import { Express, Request, Response } from "express";
import { getNotes } from "../repositories/getNotes";

const noteRouter = (app: Express) => {
    app.get("/notes", async (req: Request, res: Response) => {
        const listOfAchives = await getNotes()
        res.send(listOfAchives)
    });
}
export default noteRouter