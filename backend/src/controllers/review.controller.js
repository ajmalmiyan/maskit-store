const express = require("express");
const router = express.Router();
const Review = require("../models/review.model");
const Product = require("../models/product.model");

router.get("/:productId", async (req, res) => {
  let review = await Review.find({
    productId: { $eq: req.params.productId },
  })
    .populate("userId", { first_name: 1, last_name: 1, email: 1 })
    .lean()
    .exec();

  res.status(200).json({ data: review });
});

router.post("/post", async (req, res) => {
  let { productId, rating } = req.body;
  let review = await Review.create(req.body);
  let product = await Product.findById(productId).lean().exec();
  product.rating = Number(parseFloat((product.rating + rating) / 2).toFixed(1));

  let newProduct = await Product.findByIdAndUpdate(productId, product, {
    new: true,
  });
  res.status(201).json({ data: review, product_data: newProduct });
});

module.exports = router;
