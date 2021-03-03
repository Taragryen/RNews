const Category = require("../models/category");
const { errorCapture } = require("../utils");

exports.addCategory = async (ctx) => {
  const requestBody = ctx.request.body;

  const findResult = await Category.findOne({
    name: requestBody.name,
  });

  const temp = new Category({
    name: requestBody.name,
    cn_name: requestBody.cn_name,
    desc: requestBody.desc,
  });
  const [err, data] = await errorCapture(temp.save());
  if (err) {
    ctx.body = err;
  } else {
    ctx.body = data;
  }
};

exports.getCategories = async (ctx) => {
  ctx.body = {
    categories: await Category.find({}, { __v: 0 }),
  };
};

exports.deleteCategory = async (ctx) => {
  const resp = {
    msg: "ok",
    result: {},
  };
  try {
    await Category.remove({ _id: ctx.params.id });
    resp.msg = "success";
  } catch (error) {
    resp.msg = error;
  }
  ctx.body = resp;
};

exports.updateCategory = async (ctx) => {
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
