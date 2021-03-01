// 导入koa-router
const Router = require("koa-router");

// 导入各个路由
const news = require("./news");
const categories = require("./categories");

// 实例化
const router = new Router();

// 配置路由
router.use("/api", categories, news);

module.exports = router;
