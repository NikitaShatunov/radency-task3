import { Express, Request, Response } from "express";
import { addNotes } from "../repositories/addNotes";
import { validateNewTask } from "../helpers/validateNewTask";

const createNoteRouter = (app: Express) => {
    app.post("/notes", validateNewTask, (req: Request, res: Response) => {
        addNotes(req.body)
        res.sendStatus(200);
    });
}
export default createNoteRouter