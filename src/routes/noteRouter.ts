import { Express, Request, Response } from "express";
import { getNotes } from "../repositories/getNotes";
import { HTTP_CODES } from "../consts";

const noteRouter = (app: Express) => {
    app.get("/notes", async (req: Request, res: Response) => {
        //function getNotes get all notes from db, and return it
        const notes = await getNotes()
        if(notes.length) {
            res.send(notes)
            return
        }
        res.sendStatus(HTTP_CODES.NOT_FOUND)        
    });
}
export default noteRouter