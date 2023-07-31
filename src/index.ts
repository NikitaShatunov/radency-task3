import express, {Request, Response} from "express"
import noteIdRouter from "./routes/noteIdRouter";
import noteRouter from "./routes/noteRouter";
import createNoteRouter from "./routes/createNoteRouter";
import getStatsNotes from "./routes/getStatsNotes";
import { listOfAchives } from "./repositories/notesData";
const app = express();
const port = 4000;


app.use(express.json())

getStatsNotes(app)
noteIdRouter(app)
noteRouter(app)
createNoteRouter(app)

app.get("/notes", (req, res) => {
  res.send(listOfAchives);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
