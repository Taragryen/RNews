const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// 实例化数据模版
const NewSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  src: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

// 创建模型
module.exports = New = mongoose.model("new", NewSchema, "news");
