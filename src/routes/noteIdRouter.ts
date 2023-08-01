import { HTTP_CODES } from "../consts";
import { getNoteById } from "../repositories/getNoteById";
import { Express, Request, Response } from "express-serve-static-core";
const noteIdRouter = (app: Express) => {
    app.get("/notes/:id", async (req: Request, res: Response) => {
        const note = await getNoteById(+req.params.id)
        if(!note) {
            res.sendStatus(HTTP_CODES.NOT_FOUND)
        }
        else res.send(note)
    });
}

export default noteIdRouter