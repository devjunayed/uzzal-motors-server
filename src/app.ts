import { Request, Response } from "express";
import express from 'express';
import router from "./app/routes";
import globalErrorHanlder from "./app/middlewares/globalErrorHandler";
import cors from 'cors'
import path from 'path'

const app = express();

app.use(express.json())
app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api/v1/", router);

app.get("/",  (req: Request, res: Response) => {
    res.json({
        message: "Server is working man"
    })
});


app.use(globalErrorHanlder)


export default app;