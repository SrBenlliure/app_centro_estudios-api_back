import Express from "express";
import { saveSubject } from "../model/saveSubject.js";
import { findSubjects } from "../model/findSubjects.js";
import { Subject, SubjectName, SubjectCourse, SubjectPartial } from "../types.js";
import { findOneSubject } from "../model/findOneSubject.js";
import { deleteOneSubject } from "../model/deleteOneSubject.js";
import { updateSubjectPatch } from "../model/updateSubjectPatch.js";
import { updateSubjectPut } from "../model/updateSubjectPut.js";

export async function postSubject(req: Express.Request, res: Express.Response) {
    const subject: SubjectName = { name: req.body.subject };
    const course: SubjectCourse = { course: req.body.course }
    const result: number = await saveSubject(subject, course);
    if (result != 0) res.status(200).json({ "message": `Insertado con éxito, ID: ${result}` });
    else res.status(400).send("No se pudo insertar");
};

export async function getSubjects(req: Express.Request, res: Express.Response) {
    const subjectsReturned: Subject[] = await findSubjects();
    if (subjectsReturned) res.status(200).json(subjectsReturned);
    else res.status(400).json({ "error": "No se pudo realizar la consulta" });

}

export async function getSubjectWithId(req: Express.Request, res: Express.Response) {
    const subjectReturned: Subject | null = await findOneSubject(parseInt(req.params.id));
    if (subjectReturned) res.status(200).json(subjectReturned);
    else res.status(404).json({ "error": "no se encontró el dato" });
}

export async function deleteSubjectWithId(req: Express.Request, res: Express.Response) {
    const deleteResponse: number = await deleteOneSubject(parseInt(req.params.id));
    if (deleteResponse == 1) res.status(200).json({ "message": `El registro ${req.params.id} se eliminó con éxito` });
    else res.status(400).json({ "error": "no se pudo borrar el registro" });
}

export async function updateSubjectFull(req: Express.Request, res: Express.Response) {
    const subjectData: Subject = { ...req.body } as Subject;
    const updateResponse: number = await updateSubjectPut(subjectData);
    if (updateResponse == 1) res.status(200).json({ "message": `El registro ${subjectData.id} se actualizó con éxito` });
    else res.status(400).json({ "error": "no se pudo actualizar el registro" });
}

export async function updateSubjectPartial(req: Express.Request, res: Express.Response) {
    const subjectData: SubjectPartial = { id: req.body.id, name: req.body.name, course: req.body.course };
    const updateResponse: number = await updateSubjectPatch(subjectData);
    if (updateResponse == 1) res.status(200).json({ "message": `El registro ${subjectData.id} se actualizó con éxito` });
    else res.status(400).json({ "error": "no se pudo actualizar el registro" });
}
