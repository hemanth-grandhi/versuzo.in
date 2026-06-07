import { createApp } from "./app.js";

const app = createApp();

// Export a standard Node request handler for Vercel's Node runtime
export default function handler(req: any, res: any) {
	return app(req, res);
}
