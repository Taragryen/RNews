// 数据库地址
const DB_URL = "mongodb://127.0.0.1:27017/mydb";

// 配置端口
const port = process.env.PORT || 5000;

module.exports = {
  DB_URL,
  port,
};
