import { Task, addNewNotes } from "../services/add-new-note"
import { writeDataUtil } from "../helpers/write-data-util"
export const addNotes = async (obj: Task) => {
    const newNote = addNewNotes(obj)    
    writeDataUtil(newNote)
}