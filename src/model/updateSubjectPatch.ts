import { SubjectPartial } from "../types";
import { db } from "../config.js";
import { ResultSetHeader } from "mysql2";

export async function updateSubjectPatch(subjectData: SubjectPartial): Promise<number> {
    const queryString: string = `UPDATE Subject SET name="${subjectData.name}", course="${subjectData.course}", updated_at= NOW() WHERE id=${subjectData.id};`;
    let updatedRows: number = 0;
    try {
        const [result] = await db.promise().query<ResultSetHeader>(queryString);
        updatedRows = result.affectedRows;
    } catch (error) {
        console.log(error);
    }
    return updatedRows;
}