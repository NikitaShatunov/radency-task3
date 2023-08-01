import { HTTP_CODES } from "../constans"
import { getNoteById } from "../repositories/get-note-by-id"
import { Express, Request, Response } from "express-serve-static-core"
const noteIdRouter = (app: Express) => {
    app.get("/notes/:id", async (req: Request, res: Response) => {
        //search note by id
        const note = await getNoteById(+req.params.id)
        if(!note) {
            res.sendStatus(HTTP_CODES.NOT_FOUND)
        }
        else res.send(note)
    });
}

export default noteIdRouter