const Router = require("koa-router");
const categoryController = require("../controllers/categoryController");

const router = new Router();

router
  .get("/categories", categoryController.getCategories)
  .post("/categories", categoryController.addCategory)
  .delete("/categories/:id", categoryController.deleteCategory);

module.exports = router.routes();
