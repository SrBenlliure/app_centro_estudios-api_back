import Express from "express";
import { postSubject, getSubjects, getSubjectWithId, deleteSubjectWithId, updateSubjectFull, updateSubjectPartial } from "../controllers/subject_controller.js";

const routerSubject: Express.Router = Express.Router();

routerSubject.post("/", postSubject);
routerSubject.get("/", getSubjects);
routerSubject.get("/:id", getSubjectWithId);
routerSubject.delete("/:id", deleteSubjectWithId);
routerSubject.put("/", updateSubjectFull);
routerSubject.patch("/", updateSubjectPartial);

export {routerSubject};