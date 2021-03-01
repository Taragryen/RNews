const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cn_name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

module.exports = Category = mongoose.model(
  "category",
  categorySchema,
  "categories"
);
