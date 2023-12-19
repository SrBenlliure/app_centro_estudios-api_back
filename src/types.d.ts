export interface School{
    id:number,
    name: string,
    createdAt: Date,
    updatedAt: Date
};

export type SchoolName = Pick<School, 'name'>;

export type SchoolPartial = Pick<School, 'id', 'name'>

export interface Subject{
    id: number,
    name: string,
    course: string,
    createdAt: Date,
    updatedAt: Date
};

export type SubjectName = Pick<Subject, "name">;

export type SubjectCourse = Pick<Subject, "course">;

export type SubjectPartial = Pick<Subject, "id", "name", "course">;

export interface User{
    id: number,
    username: string,
    password: string,
    name: string,
    first_surname: string,
    second_surname: string | null,
    phone: string | null,
    email: string | null,
    createdAt: Date,
    updatedAt: Date,
    role: string,
    password_reset_token: string | null,
    status: string,
    avatar: string | null,
    info_file_url: string | null
};

export type UserPartial = pick <User, "username", "password", "name", "first_surname", "second_surname", "phone", "email", "role", "status">

export type UserPasswordPartial = Pick<User, 'username', 'password'>;

export interface jwUserToken {
    id: number,
    username: string,
    role: string
}