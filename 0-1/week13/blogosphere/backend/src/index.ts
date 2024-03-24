import { Hono } from "hono";
import { userRoutes } from "./routes/user.routes";
import { blogRoutes } from "./routes/blog.routes";


export const app = new Hono<{
		Bindings: {
				DATABASE_URL: string;
				JWT_SECRET: string;
		}
}>();

app.route('/api/v1/user', userRoutes);
app.route('/api/v1/blog', blogRoutes);

export default app;