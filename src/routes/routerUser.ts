import Express from "express";
import { postUser, getUserWithUsername, logUser, userRecovery, changeUserPassword, setNewPassword } from "../controllers/user_controller.js";
import { logoutUser } from "../controllers/user_controller.js";

const routerUser: Express.Router = Express.Router();

routerUser.post("/", postUser);
routerUser.post("/login", logUser);
routerUser.post("/recovery", userRecovery);
routerUser.get("/recovery/:username", setNewPassword);
routerUser.patch("/newPassword", changeUserPassword);
routerUser.get("/logout", logoutUser);
routerUser.get("/:username", getUserWithUsername);


export { routerUser };