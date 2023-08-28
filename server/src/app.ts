import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import user from '../src/controller/user.controller'
import api from '../src/controller/api.controller'
import course from '../src/controller/course.controller'
import cors from 'cors';



const app = express()
app.use(cors());
app.use(bodyParser.json());

app.use('/user', user);
app.use('/api', api);
app.use('/course', course);

app.use((err, req: Request, res: Response, next: NextFunction) => {
    res.send(err.message);
})


export default app;
