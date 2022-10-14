import listUsers from "../../services/user/listUsers";
import { Request, Response } from "express";

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsers();
  return res.json(users);
};

export default listUsersController;
