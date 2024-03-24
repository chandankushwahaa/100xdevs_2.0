import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode, verify } from "hono/jwt";

export const blogRoutes = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRoutes.use("/*", async (c, next) => {
  const jwt = c.req.header("Authorization") || "";
  // console.log('JWT:', jwt); 
  if (!jwt) {
    c.status(403);
    return c.json({ message: "Unauthorized" });
  }
  try {
    const payload = await verify(jwt, c.env.JWT_SECRET);
    if (!payload || !payload.id) {
      c.status(403);
      return c.json({ message: "Kindly Logged In" });
    }
    c.set("userId", payload.id);
    await next();
  } catch (error) {
    c.status(403);
    return c.json({ message: "You are not Logged In" });
  }

  // const authHeader = c.req.header("Authorization") || "";
  // const user = await verify(authHeader, c.env.JWT_SECRET);
  // if(user){
  //   c.set("userId", user.id);
  //   await next();
  // }else{
  //   c.status(403);
  //   c.json({message: "You are not Logged in"});
  // }

});

blogRoutes.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.get("userId");
  const body = await c.req.json();
  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: userId,
      // authorId: "1", 
    },
  });
  return c.json({
    id: blog.id,
    // title: posts.title,
    // content: posts.content,
    // authorId: posts.authorId,
  });
});

// Update post
blogRoutes.put("/", async (c) => {
  // const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const body = await c.req.json();
    const blog = await prisma.post.update({
      where: {
        id: body.id,
        // authorId: userId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({ message: "Post updated", blog });

  } catch (error) {
    c.status(411);
    return c.json({ message: "Post not found" });
  }
});

// add pagination later on
blogRoutes.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.post.findMany();
  return c.json({blog});
});


blogRoutes.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const id = c.req.param("id");
  try {
    const blog = await prisma.post.findFirst({
      where: {
        id: id,
      },
    });
    return c.json({blog});

  } catch (error) {
    c.status(411);
    return c.json({ message: "Post not found" });
  }
});

