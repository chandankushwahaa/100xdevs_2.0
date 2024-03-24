import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { sign } from 'hono/jwt';

export const userRoutes = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>();

// Sign up
userRoutes.post('/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    })
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ 
      jwt: token 
    });

  } catch (error) {
    // console.log(error);
    c.status(411);
    return c.json({ message: 'User Already Exist' });
  }
});

// Sign in
userRoutes.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      },
    });
    // If user does not exist, return 403
    if (!user) {
      c.status(403);
      return c.json({ message: 'Invalid Credential' });
    }
    // If user exists, sign a token and return it
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ 
      jwt: token 
    });
  } catch (error) {
    // console.log(error);
    c.status(411);
    return c.json({ message: 'User Not Found' });
  }
});