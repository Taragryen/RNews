// 导入mongoose和数据库地址
const mongoose = require("mongoose");
const { DB_URL } = require("../config");

// 数据库连接
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  auth: {
    authSource: "admin",
  },
  user: "xushizhao",
  pass: "xushizhao",
});

// 连接成功
mongoose.connection.on("connected", function () {
  console.log("Mongoose connection open to ", DB_URL);
});

// 连接出错
mongoose.connection.on("error", function (err) {
  console.log("Mongoose connection error: " + err);
});

// 断开连接
mongoose.connection.on("disconnected", function () {
  console.log("Mongoose connection disconnected");
});

module.exports = mongoose;
