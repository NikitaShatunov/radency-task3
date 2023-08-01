import { Express, Request, Response } from "express";
import { editNote } from "../repositories/editNote";
import { validateEditTask } from "../helpers/validateEditTask";
import { HTTP_CODES } from "../consts";

const editNoteRouter = (app: Express) => {
    app.patch("/notes/:id", validateEditTask,  async (req: Request, res: Response) => {
        try {
            //edit notes from repositories
            const editFile = await editNote(req.body, +req.params.id)
            if(editFile === null) {
               res.sendStatus(HTTP_CODES.NO_CONTENT)
               return
            }
            res.sendStatus(HTTP_CODES.OK)
        }
        catch(e: any) {
            res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(e.message)
        }
    });
}
export default editNoteRouter