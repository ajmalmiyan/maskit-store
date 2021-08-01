const express = require("express");
const router = express.Router();
const Review = require("../models/review.model");
const Product = require("../models/product.model");

//get reviews
router.get("/:productId", async (req, res) => {
  let review = await Review.find({
    productId: { $eq: req.params.productId },
  })
    .populate("userId", { first_name: 1, last_name: 1, email: 1 })
    .lean()
    .exec();

  res.status(200).json({ data: review });
});

//post reviews
router.post("/post", async (req, res) => {
  let { productId, rating } = req.body;
  rating = +rating;
  let review = await Review.create(req.body);
  // console.log(productId)
  let product = await Product.findById(productId).lean().exec();
  // console.log(product.rating)
  // console.log(rating)
  // console.log(((product.rating + rating)))
  product.rating = Number(parseFloat((product.rating + rating) / 2).toFixed(1));
  console.log(productId, product,)
  
  let newProduct = await Product.findByIdAndUpdate(productId, product, {
    new: true,
  });
  console.log(34,newProduct)
  res.status(201).json({ data: review,product_data:newProduct });
});

module.exports = router;
