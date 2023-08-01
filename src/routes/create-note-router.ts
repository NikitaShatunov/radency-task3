import { Express, Request, Response } from "express"
import { addNotes } from "../repositories/add-notes"
import { validateNewTask } from "../helpers/validate-new-task"
import { HTTP_CODES } from "../constans"

const createNoteRouter = (app: Express) => {
  //firstly it validates request
  app.post("/notes", validateNewTask, async (req: Request, res: Response) => {
    try {
      //write new notes in db
      await addNotes(req.body)
      res.sendStatus(HTTP_CODES.CREATED)
    } catch (e: any) {
      res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(e.message)
    }
  })
}
export default createNoteRouter
