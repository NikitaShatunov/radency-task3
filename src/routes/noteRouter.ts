import { Express, Request, Response } from "express";
import { listOfAchives } from "../repositories/notesData";

const noteRouter = (app: Express) => {
    app.get("/notes", (req: Request, res: Response) => {
        res.send(listOfAchives)
    });
}
export default noteRouter