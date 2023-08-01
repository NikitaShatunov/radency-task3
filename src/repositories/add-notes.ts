import { Task, addNewNotes } from "../services/add-new-note"
import { getNotes } from "./get-notes"
import { writeDataUtil } from "../helpers/write-data-util"
export const addNotes = async (obj: Task) => {
    const notes = await getNotes()
    const newTask = addNewNotes(obj, notes)    
    const newData = [...notes, newTask]
    const newDataParsed = JSON.stringify(newData)
    writeDataUtil(newDataParsed)
}