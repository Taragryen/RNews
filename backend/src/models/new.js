const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// 实例化新闻数据模版
const NewSchema = new Schema({
  title: { type: String, required: true, index: true },
  releaseTime: { type: Date, default: Date.now },
  src: { type: String, required: true },
  category: { type: String, required: true },
  pic: { type: String, required: true },
  content: { type: String, required: true },
  isReviewed: { type: Boolean, default: false },
  readCount: { type: Number, default: 0, required: true },
  description: { type: String, required: true },
});

// 创建模型
module.exports = New = mongoose.model("new", NewSchema, "news");
