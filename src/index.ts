import express from "express"
import noteIdRouter from "./routes/note-id-router"
import noteRouter from "./routes/note-router"
import createNoteRouter from "./routes/create-note-router"
import getStatsNotes from "./routes/get-stats-notes"
import editNoteRouter from "./routes/edit-note-router"
import deleteNoteByIdRouter from "./routes/delete-note-by-id-router"
import deleteAllNotesRouter from "./routes/delete-all-notes-router"
const app = express()
const port = 4000


app.use(express.json())

getStatsNotes(app)
noteIdRouter(app)
noteRouter(app)
createNoteRouter(app)
editNoteRouter(app)
deleteNoteByIdRouter(app)
deleteAllNotesRouter(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
