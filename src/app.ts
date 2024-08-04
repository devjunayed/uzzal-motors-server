import { Request, Response } from "express";
import express from 'express';

const app = express();

app.get("/",  (req: Request, res: Response) => {
    res.json({
        message: "Server is working man"
    })
});


export default app;