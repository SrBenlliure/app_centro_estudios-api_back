import { Subject } from "../types";
import { db } from "../config.js";
import { ResultSetHeader } from "mysql2";

export async function updateSubjectPut(subjectUpdated: Subject): Promise<number> {
    const queryString: string = `UPDATE Subject SET name="${subjectUpdated.name}", course="${subjectUpdated.course}", created_at="${subjectUpdated.createdAt}", updated_at= NOW() WHERE id=${subjectUpdated.id};`;
    let updatedRows: number = 0;
    try {
        const [result] = await db.promise().query<ResultSetHeader>(queryString);
        updatedRows = result.affectedRows;
    } catch (error) {
        console.log(error);
    }
    return updatedRows;
}