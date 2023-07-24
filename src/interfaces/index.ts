interface iUser {
    id: number;
    name: string;
    surname: string;
    email: string;
    pwd: string;
}

interface iCourse{
    id: number;
    title: string;
}

export {iUser, iCourse}