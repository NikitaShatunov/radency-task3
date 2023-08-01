import { Task } from "../services/add-new-note"
import { editNoteServer } from "../services/edit-note-serv"
import { findNote } from "../services/find-note"
import { getNotes } from "./get-notes"
import { writeDataUtil } from "../helpers/write-data-util"
export const editNote = async (obj: Task, id: number) => {
  //get all note
  const notes = await getNotes()
  //find desired note
  const findData = findNote(id, notes)
  if (!findData) {
    return null
  }
  //edit note and save file
  const newData = editNoteServer(obj, id, notes)
  const newDataStringified = JSON.stringify(newData)
  writeDataUtil(newDataStringified)
}
