import express, { Responce, Request } from 'express';
import { getAllLesson, getLessonById, createLesson, updateLesson, deleteLesson } from "../service/lessons.service";
import { buildResponse } from '../helper/buildResponse';


const route = express.Router();

route.get(`/`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const data = await getAllLesson();
        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
})

route.get(`/:course_id`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { course_id } = req.params;
        const data = await getLessonById(course_id)

        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
})

route.post(`/`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { course_id, title } = req.body;
        const data = await createLesson(course_id, title)

        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
})

route.put(`/:id`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { id } = req.params;
        const { course_id, title } = req.body;
        const data = await updateLesson(id, course_id, title)

        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
})

route.delete(`/:id`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await deleteLesson(id)


        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
})

export default route;