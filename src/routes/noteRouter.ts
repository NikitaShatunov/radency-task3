import { Express, Request, Response } from "express";
import { getNotes } from "../repositories/getNotes";

const noteRouter = (app: Express) => {
    app.get("/notes", (req: Request, res: Response) => {
        const listOfAchives = getNotes()
        res.send(listOfAchives)
    });
}
export default noteRouter