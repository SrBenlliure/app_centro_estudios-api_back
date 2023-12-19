var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { saveSubject } from "../model/saveSubject.js";
import { findSubjects } from "../model/findSubjects.js";
import { findOneSubject } from "../model/findOneSubject.js";
import { deleteOneSubject } from "../model/deleteOneSubject.js";
import { updateSubjectPatch } from "../model/updateSubjectPatch.js";
import { updateSubjectPut } from "../model/updateSubjectPut.js";
export function postSubject(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const subject = { name: req.body.subject };
        const course = { course: req.body.course };
        const result = yield saveSubject(subject, course);
        if (result != 0)
            res.status(200).json({ "message": `Insertado con éxito, ID: ${result}` });
        else
            res.status(400).send("No se pudo insertar");
    });
}
;
export function getSubjects(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const subjectsReturned = yield findSubjects();
        if (subjectsReturned)
            res.status(200).json(subjectsReturned);
        else
            res.status(400).json({ "error": "No se pudo realizar la consulta" });
    });
}
export function getSubjectWithId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const subjectReturned = yield findOneSubject(parseInt(req.params.id));
        if (subjectReturned)
            res.status(200).json(subjectReturned);
        else
            res.status(404).json({ "error": "no se encontró el dato" });
    });
}
export function deleteSubjectWithId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const deleteResponse = yield deleteOneSubject(parseInt(req.params.id));
        if (deleteResponse == 1)
            res.status(200).json({ "message": `El registro ${req.params.id} se eliminó con éxito` });
        else
            res.status(400).json({ "error": "no se pudo borrar el registro" });
    });
}
export function updateSubjectFull(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const subjectData = Object.assign({}, req.body);
        const updateResponse = yield updateSubjectPut(subjectData);
        if (updateResponse == 1)
            res.status(200).json({ "message": `El registro ${subjectData.id} se actualizó con éxito` });
        else
            res.status(400).json({ "error": "no se pudo actualizar el registro" });
    });
}
export function updateSubjectPartial(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const subjectData = { id: req.body.id, name: req.body.name, course: req.body.course };
        const updateResponse = yield updateSubjectPatch(subjectData);
        if (updateResponse == 1)
            res.status(200).json({ "message": `El registro ${subjectData.id} se actualizó con éxito` });
        else
            res.status(400).json({ "error": "no se pudo actualizar el registro" });
    });
}
