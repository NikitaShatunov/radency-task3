import express from "express"
import { noteIdRouter, noteRouter, createNoteRouter, getStatsNotes, editNoteRouter, deleteNoteByIdRouter, deleteAllNotesRouter  } from "./routes/routes"
import { init } from "../data/db"
const app = express()
const port = 4000

setTimeout(() => init(), 3000)

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