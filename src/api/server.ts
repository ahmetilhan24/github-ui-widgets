import express, { Application } from "express";
import config from "./config";
import Router from "./router";
class Server {
  app: Application = express.application;
  init = () => {
    config();
    Router.init(this.app);
    this.listen();
  };
  listen = () => {
    const port: unknown = process.env.API_PORT;
    if (port) {
      this.app.listen(port, () => {
        console.log(`Port listening at ${port}`);
      });
    }
  };
}

//! start server
const server = new Server();
server.init();
