import { getAllLessonDB, getLessonByIdDB, createLessonDB, updateLessonDB, deleteLessonDB } from "../repository/lessons.repository"
import { iLessons } from '../interfaces/index';


async function getAllLesson(): Promise<iLessons[]> {
    const data = await getAllLessonDB();
    return data;
}

async function getLessonById(course_id: string): Promise<iLessons[]> {
    const data = await getLessonByIdDB(course_id);

    return data;
}

async function createLesson(course_id: string, title: string): Promise<iLessons[]> {
    const data = await createLessonDB(course_id, title);
    return data;
}

async function updateLesson(id: string, course_id: string, title: string): Promise<iLessons[]> {
    const data = await updateLessonDB(id, course_id, title);
    return data;
}

async function deleteLesson(id: string): Promise<iLessons[]> {
    const data = await deleteLessonDB(id)
    return data;
}

export { getAllLesson, getLessonById, createLesson, updateLesson, deleteLesson };