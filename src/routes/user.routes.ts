import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import listUsersController from "../controllers/user/listUsers.controller";
import tokenAuthMiddleware from "../middleware/tokenAuth.middleware";

const routes = Router();

routes.post("", createUserController);
routes.get("", tokenAuthMiddleware, listUsersController);

export default routes;
