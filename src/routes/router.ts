import Express from "express";
import { routerSchool } from "./routerSchool.js";
import { routerSubject } from "./routerSubject.js";
import { routerUser } from "./routerUser.js";
//import { postSchool, getSchools, getSchoolWithId } from "../controllers/school_controller.js";

const router: Express.Router = Express.Router();

router.use("/api/v1/schools", routerSchool);
//router.get("/schools", getSchools);
//router.get("/schools/:id", getSchoolWithId);

router.use("/api/v1/subjects", routerSubject);
router.use("/api/v1/users", routerUser);

export {router};