import express, { Application } from "express";
import routeConstants from "../constants/route.constants";
import ProfileRouter from "./profile.routes";
import RepositoryRouter from "./repository.routes";
class Router {
  router: express.IRouter = express.Router({ mergeParams: true });
  init = (app: Application) => {
    app.use(routeConstants.profile.path, ProfileRouter.router);
    app.use(routeConstants.repositories.path, RepositoryRouter.router);
  };
}

export default new Router();
