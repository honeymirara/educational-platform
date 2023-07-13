import express from 'express';
import { createUnzip } from 'zlib';

const route = express.Router();

route.get('/', (req, res) => {
    try {
        res.send('hi')

    } catch (error: any) {
        res.send(error.message)
    }
});

route.post('/', async (req, res) => {
    try {
        const {name, surname, email, pwd} = req.body;
        const data = await createUser(name, surname, email, pwd)
        res.send(data);

    } catch (err: any) {
        res.send(err.message);
    }
})

export default route;