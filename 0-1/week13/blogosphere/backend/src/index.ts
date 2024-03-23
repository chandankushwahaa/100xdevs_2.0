import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { decode, sign, verify } from 'hono/jwt';

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	}
}>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/signup', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const user = await prisma.user.create({
		data: {
			email: body.email,
			password: body.password,
		},
	})

	const token = await sign({ id: user.id }, c.env.JWT_SECRET)
	return c.json({
		jwt: token
	})
})



app.post('/api/v1/signin', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const user = await prisma.user.findFirst({
		where: {
			email: body.email,
			password: body.password,
		}	
	});

	if(!user) {
		return c.json({
			error: 'User not found'
		});
	}
	
	const jwt = await sign({ id: user.id}, c.env.JWT_SECRET);
	return c.json({
		jwt: jwt
	})
})

app.get('/api/v1/blog/:id', (c) => {
	const id = c.req.param('id')
	console.log(id);
	return c.text('get blog route')
})

app.post('/api/v1/blog', (c) => {

	return c.text('signin route')
})

app.put('/api/v1/blog', (c) => {
	return c.text('signin route')
})

export default app
 