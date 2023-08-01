
import { getAllCourses, createCourses, getCourseById, updateCourse, deleteCourse } from '../service/course.service';
import express, { Request, Response } from 'express';
import { buildResponse } from '../helper/buildResponse';
import { title } from 'process';


const course = express.Router();




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

course.put('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { title } = req.body;
        const data = await updateCourse(id, title);
        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
});

course.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await deleteCourse(id);
        buildResponse(res, 404, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
});

export default course;