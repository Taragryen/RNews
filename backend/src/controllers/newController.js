const New = require("../models/new");
const { errorCapture } = require("../utils");

/**
 * 发布新闻
 */
exports.addNew = async (ctx) => {
  const requestBody = ctx.request.body;
  const temp = new New({
    title: requestBody.title,
    src: requestBody.src,
    category: requestBody.category,
    pic: requestBody.pic,
    content: requestBody.content,
    description: requestBody.description,
    readCount: parseInt(Math.random() * 200),
  });
  const result = {
    msg: "ok",
    data: {},
  };
  const [err, data] = await errorCapture(temp.save());
  if (err) {
    result.msg = err;
  } else {
    result.data = data;
  }
  ctx.body = result;
};

/**
 * 根据_id删除新闻
 */
exports.deleteNew = async (ctx) => {
  const result = {
    msg: "ok",
    data: {},
  };
  const resp = await New.remove({ _id: ctx.params.id }, (err) => {
    result.msg = err;
  });
  ctx.body = result;
};

/**
 * 获取新闻
 */
exports.getNews = async (ctx) => {
  const limit = ctx.request.query.limit || null;
  const offset = ctx.request.query.offset || null;
  const query = ctx.request.query.query || "";
  const reg = new RegExp(query, "i");
  const result = {
    msg: "ok",
    data: {},
  };
  const news = await New.find(
    {
      title: { $regex: reg },
    },
    { __v: 0 },
    (err) => {
      if (err) result.msg = err;
    }
  )
    .skip(parseInt(offset))
    .limit(parseInt(limit));
  result.data.total = news.length;
  result.data.list = news;
  ctx.body = result;
};

/**
 * 获取热榜新闻
 */
exports.getTopNews = async (ctx) => {
  const result = {
    msg: "ok",
    data: {},
  };
  const news = await New.find({}, { __v: 0 }, (err) => {
    if (err) result.msg = err;
  })
    .sort({ readCount: -1 })
    .limit(10);
  result.data.total = news.length;
  result.data.list = news;
  ctx.body = result;
};

exports.getNew = async (ctx) => {
  const result = {
    msg: "ok",
    data: {},
  };
  const resp = await New.findById(ctx.params.id, (err) => {
    if (err) result.msg = err;
  });
  result.data.new = resp;
  ctx.body = result;
};

exports.updateNew = async (ctx) => {
  const requestBody = ctx.request.body;
  const result = {
    msg: "ok",
    data: {},
  };
  const resp = await New.updateOne(
    { _id: ctx.params.id },
    {
      $set: { ...requestBody },
    },
    (err) => {
      result.msg = err;
    }
  );
  result.data = resp;
  ctx.body = result;
};

// exports.updateNewReadCount = async (ctx) => {
//   const
// }
