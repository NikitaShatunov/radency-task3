import express from "express"
import noteIdRouter from "./routes/noteIdRouter";
import noteRouter from "./routes/noteRouter";
import createNoteRouter from "./routes/createNoteRouter";
import getStatsNotes from "./routes/getStatsNotes";
import editNoteRouter from "./routes/editNoteRouter";
import deleteNoteByIdRouter from "./routes/deleteNoteByIdRouter";
import deleteAllNotesRouter from "./routes/deleteAllNotesRouter";
const app = express();
const port = 4000;


app.use(express.json())

getStatsNotes(app)
noteIdRouter(app)
noteRouter(app)
createNoteRouter(app)
editNoteRouter(app)
deleteNoteByIdRouter(app)
deleteAllNotesRouter(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
