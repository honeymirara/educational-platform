import express, { Request, Response } from 'express';
import { createUser, getAllUsers, getUserById, updateUser, deleteUser} from '../service/user.service';
import { buildResponse } from '../helper/buildResponse';
import { REPLCommand } from 'repl';
const route = express.Router();

route.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await getAllUsers();
        buildResponse(res, 200, data);

    } catch (err: any) {
        buildResponse(res, 404, err.message)
    }
});

route.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await getUserById(id);
        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message)
    }
})

route.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd)
        buildResponse(res, 200, data);

    } catch (err: any) {
        buildResponse(res, 404, err.message)
    }
})

route.put('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { name, surname, email, pwd } = req.body;
        const data = await updateUser(name, surname, email, pwd, id);
        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
})

route.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await deleteUser(id);
        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
});

export default route;