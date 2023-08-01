import { Task } from "../services/addNewNote";
import { editNoteServ } from "../services/editNoteServ";
import { findNote } from "../services/findNote";
import { getNotes } from "./getNotes";
import { writeDataUtil } from "../helpers/writeDataUtil";
export const editNote = async (obj: Task, id: number) => {
  //get all note
  const notes = await getNotes();
  //find desired note
  const findData = findNote(id, notes);
  if (!findData) {
    return null;
  }
  //edit note and save file
  const newData = editNoteServ(obj, id, notes);
  const newDataParsed = JSON.stringify(newData);
  writeDataUtil(newDataParsed)
};
