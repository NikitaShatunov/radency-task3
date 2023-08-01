import { Express, Request, Response } from "express";
import { addNotes } from "../repositories/addNotes";
import { validateNewTask } from "../helpers/validateNewTask";
import { HTTP_CODES } from "../consts";

const createNoteRouter = (app: Express) => {
    app.post("/notes", validateNewTask, async (req: Request, res: Response) => {
      try {
      await addNotes(req.body)
        res.sendStatus(HTTP_CODES.CREATED);
      }
        catch (e: any) {
          res.sendStatus(HTTP_CODES.INTERNAL_SERVER_ERROR).send(e.message)
        }
    });
}
export default createNoteRouter