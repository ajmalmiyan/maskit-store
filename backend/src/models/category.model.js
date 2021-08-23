const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    category_name: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("categories", categorySchema);
