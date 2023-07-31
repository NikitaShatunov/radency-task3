import { Express, Request, Response } from "express";
import { listOfAchives } from "../repositories/notesData";

const createNoteRouter = (app: Express) => {
    app.post("/notes", (req: Request, res: Response) => {
        res.send(req.body.name)
    });
}
export default createNoteRouter