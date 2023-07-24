import express, { Request, Response } from 'express';
import { buildResponse } from '../helper/buildResponse';
import { registrationUser, authorizationUser } from '../service/api.service';

const api = express.Router();

api.post('/reg', async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await registrationUser(name, surname, email, pwd);
        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 400, err.message);
    }
});

api.post('/auth', async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, pwd } = req.body;
        const data = await authorizationUser(email, pwd);
        buildResponse(res, 200, data);

    } catch (err: any) {
        buildResponse(res, 400, err.message);
    }
})


export default api; 