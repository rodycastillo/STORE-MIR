const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Object, required: true },
    title: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
