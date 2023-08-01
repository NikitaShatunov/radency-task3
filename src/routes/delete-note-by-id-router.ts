import { Express, Request, Response } from "express"
import { deleteNoteById } from "../repositories/delete-note-by-id"
import { HTTP_CODES } from "../constans"
const deleteNoteByIdRouter = (app: Express) => {
  app.delete("/notes/:id", async (req: Request, res: Response) => {
    try {
      if (await deleteNoteById(+req.params.id) === null) {
        res.sendStatus(HTTP_CODES.NO_CONTENT)
      }
      res.status(HTTP_CODES.OK)
    } catch (e: any) {
      res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(e.message)
    }
  })
}
export default deleteNoteByIdRouter
