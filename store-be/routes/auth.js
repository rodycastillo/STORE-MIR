const express = require("express");
const router = express.Router();
const User = require("../schemas/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  const userNew = new User({
    email: req.body.email,
    name: req.body.name,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });
  try {
    const user = await userNew.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json({ message: "Wrong password or username!" });

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const pass = bytes.toString(CryptoJS.enc.Utf8);

    pass !== req.body.password &&
      res.status(401).json({ message: "Wrong password or username!" });

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "2d" }
    );

    const { password, ...info } = user._doc;

    res.status(200).json({ ...info, token });
  } catch (err) {
    res.status(500).json({ message: "Error, data not found", error: err });
  }
});

module.exports = router;
