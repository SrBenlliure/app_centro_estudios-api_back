import { RowDataPacket } from "mysql2";
import { db } from "../config.js";
import { Subject } from "../types.js";

export async function findOneSubject(id: number): Promise<Subject | null> {
    const queryString: string = `SELECT * FROM Subject WHERE id=${id}`;
    let subjectReturned: Subject | null = null;
    try {
        const [result] = await db.promise().query<RowDataPacket[]>(queryString);
        if (result.length != 0) subjectReturned = { ...result[0] } as Subject;

    } catch (error) {
        console.error(error);
    };
    return subjectReturned;
}