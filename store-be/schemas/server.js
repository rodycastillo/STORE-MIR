const express = require("express");
const cors = require("cors");
const { connectionDB } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/store";
    //conection DB
    this.connectionDB();
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
    app.use(express.urlencoded({ extended: true }));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Listening in port http://localhost:${process.env.PORT}`);
    });
  }
}

module.exports = Server;
