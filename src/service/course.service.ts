import { getAllCoursesDB, createCoursesDB, getCourseByIdDB } from "../repository/course.repository";
import { iCourse } from '../interfaces/index'

async function getAllCourses(): Promise<iCourse> {
    const data = await getAllCoursesDB();
    return data;
}

async function createCourses(title): Promise<iCourse> {
    const data = await createCoursesDB(title);
    if (!data) throw new Error('does not exists');
    return data;
}

async function getCourseById(id): Promise<iCourse> {
    const data = await getCourseByIdDB(id);
    if (!data) throw new Error('does not exists');
    return data;
}


export { getAllCourses, createCourses, getCourseById };