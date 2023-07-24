
import { getAllCourses, createCourses, getCourseById } from '../service/course.service';
import express, { Request, Response } from 'express';
import { buildResponse } from '../helper/buildResponse';


const course = express.Router;



course.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await getAllCourses();
        buildResponse(res, 200, data);

    } catch (err: any) {
        buildResponse(res, 404, err.message)
    }
});


course.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const { title } = req.body;
        const data = await createCourses(title);
        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
});

course.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await getCourseById(id);
        buildResponse(res, 200, data);

    } catch (err: any) {
        buildResponse(res, 404, err.message)
    }
})

export default course;