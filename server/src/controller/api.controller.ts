import express, { Request, Response } from 'express';
import { registrationUser, authorizationUser } from '../service/api.service';
import { buildResponse } from '../helper/buildResponse';
import { createToken } from '../helper/jwt';
import { REPLCommand } from 'repl';
const api = express.Router();

api.post('/reg', async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await registrationUser(name, surname, email, pwd)
        const token = createToken(data);
        res.cookie('access_token', token, {
            httpOnly: false,
            secure: true,
        })
        buildResponse(res, 200, data);

    } catch (err: any) {
        buildResponse(res, 404, err.message)
    }
})

api.post('/auth', async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, pwd } = req.body;
        const data = await authorizationUser(email, pwd)
        const token = createToken(data);
        res.cookie('access_token', token, {
            httpOnly: false,
            secure: true,
        })
        buildResponse(res, 200, data)
} catch (err: any) {
        buildResponse(res, 404, err.message)
    }
})

export default api
