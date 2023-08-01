import { deleteNote } from "../services/delete-note"
import { findNote } from "../services/find-note"
import { getNotes } from "./get-notes"
import { writeDataUtil } from "../helpers/write-data-util"
export const deleteNoteById = async (id: number) => {
  const notes = await getNotes()
  const findData = findNote(id, notes)
  //if the note is not defined, returns null
  if (!findData) {
    return null
  }
  const newData = deleteNote(id, notes)
  const newDataParsed = JSON.stringify(newData)
  writeDataUtil(newDataParsed)
}
