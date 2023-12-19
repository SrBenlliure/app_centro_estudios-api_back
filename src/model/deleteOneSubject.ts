import { ResultSetHeader } from "mysql2";
import { db } from "../config.js";

export async function deleteOneSubject(id: number): Promise<number> {
    const queryString = `DELETE FROM Subject WHERE id = ${id}`;
    let rowsDeleted: number = 0;
    try {
        const [result] = await db.promise().query<ResultSetHeader>(queryString);
        rowsDeleted = result.affectedRows;
    } catch (error) {
        console.error(error);
    }
    return rowsDeleted;
}