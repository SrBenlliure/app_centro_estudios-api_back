import { ResultSetHeader } from 'mysql2';
import { db } from '../config.js';
import { SubjectName, SubjectCourse } from '../types.js';

export async function saveSubject(subject: SubjectName, course: SubjectCourse): Promise<number> {
    const queryString: string = `INSERT INTO Subject(name) VALUES ("${subject.name}");INSERT INTO Subject(course) VALUES ("${course.course}")`;
    let returnedId: number;
    try {
        const [result] = await db.promise().query<ResultSetHeader>(queryString);
        returnedId = result.insertId;
    } catch (error) {
        console.error(error);
        returnedId = 0;
    }
    return returnedId;
}