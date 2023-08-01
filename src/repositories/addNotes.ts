import { error } from "console";
import { Task, addNewNotes } from "../services/addNewNote";
import { getNotes } from "./getNotes";
import fs from "fs"
export const addNotes = async (obj: Task) => {
    const notes = await getNotes()
    const newTask = addNewNotes(obj, notes)    
    const newData = [...notes, newTask]
    const newDataParsed = JSON.stringify(newData)
    fs.writeFile('src/data.json', newDataParsed, error => {throw error});
}