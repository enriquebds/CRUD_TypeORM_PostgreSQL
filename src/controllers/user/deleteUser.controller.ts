import { Request, Response } from "express";
import deleteUser from "../../services/user/deleteUser";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteUser(id);

    return res.status(204).json({ message: "User deleted!" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({
        message: error.message,
      });
    }
  }
};

export default deleteUserController;
