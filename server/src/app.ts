import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import user from '../src/controller/user.controller'
import api from '../src/controller/api.controller'
import course from '../src/controller/course.controller'
import cors from 'cors';
import cookieParser from 'cookie-parser'
import lessons from '../src/controller/lessons.controller'





const app = express()
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser())

app.use('/user', user);
app.use('/api', api);
app.use('/course', course);
app.use('/lessons', lessons);

app.use((err, req: Request, res: Response, next: NextFunction) => {
    res.send(err.message);
})


export default app;
