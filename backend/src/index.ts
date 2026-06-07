import { createApp } from "./app.js";
import { env } from "./config/index.js";

const app = createApp();

app.listen(env.port, () => {
  console.log(`Versuzo API running on http://localhost:${env.port}`);
  console.log(`Health: http://localhost:${env.port}/api/v1/health`);
});
