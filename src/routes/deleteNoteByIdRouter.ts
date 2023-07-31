import { Express, Request, Response } from "express"
import { deleteNoteById } from "../repositories/deleteNoteById"
const deleteNoteByIdRouter = (app: Express) => {
    app.delete("/notes/:id", (req: Request, res: Response) => {
        //I need sen 400 if i haven`t this id?
        deleteNoteById(+req.params.id)
        res.send(200)
    })
}
export default deleteNoteByIdRouter