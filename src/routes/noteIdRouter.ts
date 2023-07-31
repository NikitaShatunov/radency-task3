import { getNoteById } from "../services/getNoteById"; // Update the path to the service
import { Express } from "express-serve-static-core";
const noteIdRouter = (app: Express) => {
    app.get("/notes/:id", getNoteById);
}

export default noteIdRouter