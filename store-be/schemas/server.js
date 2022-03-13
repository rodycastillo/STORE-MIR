const express = require("express");
const cors = require("cors");
const { connectionDB } = require("../database/config");
const auth = require('../routes/auth')
const cite = require('../routes/cite')
const upload = require('../routes/upload')

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/store";
    //conection DB
    this.connectionDB();
    this.middlewares();
    this.router();
  }

  async connectionDB() {
    await connectionDB();
  }

  middlewares() {
    //Index.html
    this.app.use(express.static("public"));
    //CORS
    this.app.use(cors());
    //Parsing of body
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  router() {
    this.app.use('/api/auth', auth)
    this.app.use('/api/cite', cite)
    this.app.use('/api/upload', upload)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Listening in port http://localhost:${process.env.PORT}`);
    });
  }
}

module.exports = Server;
