import { Express, Request, Response } from "express"
import { deleteAllNotes } from "../repositories/deleteAllNotes"
const deleteAllNotesRouter = (app: Express) => {
    app.delete("/notes", (req: Request, res: Response) => {
        deleteAllNotes()
        res.sendStatus(200)
    })
}
export default deleteAllNotesRouter