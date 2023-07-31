import { getNoteById } from "../repositories/getNoteById";
import { Express, Request, Response } from "express-serve-static-core";
const noteIdRouter = (app: Express) => {
    app.get("/notes/:id", (req: Request, res: Response) => {
        const note = getNoteById(+req.params.id)
        res.send(note)
    });
}

export default noteIdRouter