interface iUser {
    id: number;
    name: string;
    surname: string;
    email: string;
    pwd: string;
}

interface iCourse {
    id: number;
    title: string;
}

interface iLessons {
    id: string;
    title: string;
    course_id: string;
}

export { iUser, iCourse, iLessons }