const express = require('express');
const router = express.Router();
const User = require('../schemas/User')
const CryptoJS = require("crypto-js");
// const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res)=> {
    const userNew = new User({
        email: req.body.email,
        name: req.body.name,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SECRET_KEY
        ).toString(),
    })
    try {
        const user = await userNew.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;