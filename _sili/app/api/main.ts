import { Application, Router } from "https://deno.land/x/oak@14.2.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import data from "./data.json" assert { type: "json" };

const router = new Router();
router
  .get("/", (c) => {
    c.response.body = "欢迎来到恐龙 API！";
  })
  .get("/api", (c) => {
    c.response.body = data;
  })
  .get("/api/:dinosaur", (c) => {
    if (c?.params?.dinosaur) {
      const found = data.find((item) =>
        item.name.toLowerCase() === c.params.dinosaur.toLowerCase()
      );
      if (found) {
        c.response.body = found;
      } else {
        c.response.body = "未找到恐龙。";
      }
    }
  });

const app = new Application();
app.use(oakCors()); // 为所有路由启用 CORS
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
