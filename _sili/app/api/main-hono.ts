import { Hono } from "https://deno.land/x/hono@v4.2.2/mod.ts";
import {
    cors,
    prettyJSON,
} from "https://deno.land/x/hono@v4.2.2/middleware.ts";
import data from "./data.json" assert { type: "json" };

const app = new Hono();

app
.use(prettyJSON()) // With options: prettyJSON({ space: 4 })
.use(cors()) // 全局允许跨域请求
.get("/", (c) => {
    return c.text("欢迎来到恐龙 API！");
})
    .get("/api", (c) => {
        return c.json(data);
    })
    app.get('/api/:dinosaur', (c) => {
        const dinosaurName = c.req.param('dinosaur')
        if (dinosaurName) {
          const found = data.find(
            (item) => item.name.toLowerCase() === dinosaurName.toLowerCase()
          )
          if (found) {
            return c.json(found)
          } else {
            return c.json("未找到恐龙。", 404)
          }
        }
      })
//     .onError((err, c) => { // 美中不足的是无法定位报错位置
//   console.error(`${err}`)
//   return c.json(`Custom Error Message: ${err}`, 500)
// })


Deno.serve({ port: 8000 }, app.fetch);
