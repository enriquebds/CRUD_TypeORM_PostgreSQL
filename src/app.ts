import "reflect-metadata";
import express from "express";
import userRoutes from "./routes/user.routes";
import userLogin from "./routes/login.routes";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", userLogin);

app.listen(3334, () => {
  console.log("Server running in port 3334");
});

export default app;
