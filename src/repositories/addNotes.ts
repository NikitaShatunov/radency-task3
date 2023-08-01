import { Task, addNewNotes } from "../services/addNewNote";
import { getNotes } from "./getNotes";
import { writeDataUtil } from "../helpers/writeDataUtil";
export const addNotes = async (obj: Task) => {
    const notes = await getNotes()
    const newTask = addNewNotes(obj, notes)    
    const newData = [...notes, newTask]
    const newDataParsed = JSON.stringify(newData)
    writeDataUtil(newDataParsed)
}