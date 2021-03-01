// 引入koa、router、logger、koa-bodyparser
const Koa = require("koa");
const router = require("./src/router");
const { port } = require("./src/config");
const logger = require("koa-logger");
const Moment = require("moment");
const bodyparser = require("koa-bodyparser");
require("./src/dbHelper");

// 实例化koa
const app = new Koa();

// 日志输出
app.use(
  logger((str) => {
    // 给请求日志添加moment格式化后的时间
    console.log(Moment().format("YYYY-MM-DD HH:mm:ss") + str);
  })
);

app.use(bodyparser());

// 配置路由
app.use(router.routes()).use(router.allowedMethods());

// 监听
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
