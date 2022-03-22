const router = require("express").Router();
const Product = require("../schemas/Product");

router.post("/product", async (req, res) => {
  const { category, description, image, price, rating, title } = req.body;
  !req.body && res.status(404).json({ message: "Failed data", status: false });
  try {
    const newProduct = new Product({
      category,
      description,
      image,
      price,
      rating,
      title,
    });
    const product = await newProduct.save();
    res.status(200).json({
      message: "Product saved successfully",
      data: product,
      status: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Dont saved Product", status: false });
  }
});

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res
      .status(200)
      .json({ message: "All products", data: products, status: true });
  } catch (error) {
    res.status(403).json({ message: "Products not found", status: false });
  }
});

router.post("/products/update/:id", async (req, res) => {
  !req.params.id &&
    res
      .status(500)
      .json({ message: "Id not found, put please", status: false });
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "Product updated successfully",
      status: true,
      data: product,
    });
  } catch (error) {
    res
      .status(403)
      .json({ message: "The product cannot be updated", status: false, error });
  }
});

router.get("/products/:id", async (req, res) => {
  !req.params.id &&
    res
      .status(500)
      .json({ message: "Id not found, put please", status: false });
  try {
    const product = await Product.findById(req.params.id);
    res
      .status(200)
      .json({ message: "successfully found", data: product, status: false });
  } catch (error) {
    res.status(403).json({ message: "Product not found", status: false });
  }
});

module.exports = router;
