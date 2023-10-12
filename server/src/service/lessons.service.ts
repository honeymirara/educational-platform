import { getAllLessonDB, getLessonByIdDB, createLessonDB, updateLessonDB, deleteLessonDB } from "../repository/lesson.repository"

async function getAllLesson() {
    const data = await getAllLessonDB();

    return data;
}

async function getLessonById(course_id: string) {
    const data = await getLessonByIdDB(course_id);

    return data;
}

async function createLesson(course_id: string, title: string) {
    const data = await createLessonDB(course_id, title);

    return data;
}

async function updateLesson(id: string, course_id: string, title: string) {
    const data = await updateLessonDB(id, course_id, title);

    return data;
}

async function deleteLesson(id: string) {
    const data = await deleteLessonDB(id)
;

    return data;
}

export { getAllLesson, getLessonById, createLesson, updateLesson, deleteLesson };