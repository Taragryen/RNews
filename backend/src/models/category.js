const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/**
 * 实例化类型模版
 */
const categorySchema = new Schema({
  name: { type: String, required: true },
  cn_name: { type: String, required: true },
  desc: { type: String, required: true },
});

/**创建模型 */
module.exports = Category = mongoose.model(
  "category",
  categorySchema,
  "categories"
);
