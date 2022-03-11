require('dotenv').config()
const Server = require('./schemas/server');
const server = new Server()
// const CryptoJS = require('crypto-js')
server.listen()

// const password = "carlito123"
// const cryp = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY)
// console.log({cryp})