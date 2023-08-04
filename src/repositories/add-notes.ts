import { Task, addNewNotes } from "../services/add-new-note"
import { getNotes } from "./get-notes"
import { writeDataUtil } from "../helpers/write-data-util"
export const addNotes = async (obj: Task) => {
    const notes = await getNotes()
    const newNote = addNewNotes(obj)    
    writeDataUtil(newNote)
}