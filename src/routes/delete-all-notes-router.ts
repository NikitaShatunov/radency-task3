import { Express, Request, Response } from "express"
import { deleteAllNotes } from "../repositories/delete-all-notes"
import { HTTP_CODES } from "../constans"
const deleteAllNotesRouter = (app: Express) => {
    app.delete("/notes", (req: Request, res: Response) => {
       try {
        deleteAllNotes()
        res.sendStatus(HTTP_CODES.OK)
       }
       catch(e: any) {
        res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(e.message)
       }
    })
}
export default deleteAllNotesRouter