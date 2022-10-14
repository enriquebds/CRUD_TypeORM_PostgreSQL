import { Router } from "express";
import loginUserController from "../controllers/sessions/login.controller";

const routes = Router();

routes.post("", loginUserController);

export default routes;
