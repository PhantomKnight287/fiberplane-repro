import { Hono } from "hono";
import { createFiberplane } from "@fiberplane/hono";

const fiberplane = createFiberplane({});
const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.use("/fp/*", fiberplane);

export default app;
