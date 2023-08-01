import { Express, Request, Response } from "express"
import { deleteAllNotes } from "../repositories/deleteAllNotes"
import { HTTP_CODES } from "../consts"
const deleteAllNotesRouter = (app: Express) => {
    app.delete("/notes", (req: Request, res: Response) => {
       try {
        deleteAllNotes()
        res.sendStatus(HTTP_CODES.OK)
       }
       catch(e: any) {
        res.sendStatus(HTTP_CODES.INTERNAL_SERVER_ERROR)
       }
    })
}
export default deleteAllNotesRouter