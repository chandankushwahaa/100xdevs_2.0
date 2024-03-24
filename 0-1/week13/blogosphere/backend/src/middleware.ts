// import { verify } from "hono/jwt";

// export function initMiddleware(app) {
//   app.use('/api/v1/blog/*', async (c, next) => {
//     const header = c.req.header('Authorization');

//     const token = header.split(' ')[1];

//     const response = await verify(token, c.env.JWT_SECRET);
//     if(response.id) {
//       // c.set('userId', response.id);
//       // await next();
//       next();
//     }else{
//       c.status(403);
//       return c.json({ message: 'Forbidden' });
//     }
//   });
// }