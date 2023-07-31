import { Express, Request, Response } from "express";
import { editNote } from "../repositories/editNote";
import { validateEditTask } from "../helpers/validateEditTask";

const editNoteRouter = (app: Express) => {
    app.patch("/notes/:id", validateEditTask, (req: Request, res: Response) => {
        editNote(req.body, +req.params.id)
        res.send(200)
    });
}
export default editNoteRouter