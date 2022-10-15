import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const deleteUser = async (id: string): Promise<boolean> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  if (!user?.isActive) {
    throw new Error("This account are disabled");
  }

  user.isActive = false;
  await userRepository.save(user);

  return true;
};

export default deleteUser;
