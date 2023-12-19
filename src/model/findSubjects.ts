import { RowDataPacket } from "mysql2";
import { db } from "../config.js";
import { Subject } from "../types.js";

export async function findSubjects(): Promise<Subject[]> {
    const queryString: string = `SELECT * FROM Subject`;
    let subjectsReturned: Subject[] = [];
    try {
        const [result] = await db.promise().query<RowDataPacket[]>(queryString);
        subjectsReturned = result.map(row => {
            return { ...row } as Subject;
        });
    } catch (error) {
        console.error(error);
    };
    return subjectsReturned;

}