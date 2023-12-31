import Express from "express";
import { postSchool, getSchools, getSchoolWithId, deleteSchoolWithId, updateSchoolFull, updateSchoolPartial } from "../controllers/school_controller.js";
import { isUserAuthenticated } from "../Utilidades/isUserAuthenticated.js";
import { isUserAdmin } from "../Utilidades/isUserAdmin.js";
const routerSchool = Express.Router();
routerSchool.post("/", isUserAuthenticated, postSchool);
routerSchool.get("/", isUserAuthenticated, getSchools);
routerSchool.get("/:id", isUserAuthenticated, getSchoolWithId);
routerSchool.delete("/:id", isUserAuthenticated, isUserAdmin, deleteSchoolWithId);
routerSchool.put("/", isUserAuthenticated, updateSchoolFull);
routerSchool.patch("/", isUserAuthenticated, updateSchoolPartial);
export { routerSchool };
