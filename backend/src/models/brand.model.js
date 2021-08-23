const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    brand_name: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("brands", brandSchema);
