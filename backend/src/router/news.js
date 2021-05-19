const Router = require("koa-router");
const newController = require("../controllers/newController");

const router = new Router();

router
  .post("/news", newController.addNew)
  .delete("/news/:id", newController.deleteNew)
  .get("/news", newController.getNews)
  .put("/news/:id", newController.updateNew)
  .get("/news/:id", newController.getNew)
  .get("/top", newController.getTopNews)
  .get("/ids", newController.getNewIds)
  .get("/allnews", newController.getAllNews);

module.exports = router.routes();
