const mongoose = require("mongoose");

const CiteSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    cite: { type: Object, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cite", CiteSchema);
