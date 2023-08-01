import { Task } from "../services/addNewNote";
import { editNoteServ } from "../services/editNoteServ";
import { findNote } from "../services/findNote";
import { Response } from "express";
import fs from "fs";
import { getNotes } from "./getNotes";
import { notesDataLink } from "../consts";
export const editNote = async (obj: Task, id: number, res: Response) => {
  const notes = await getNotes();
  const findData = findNote(id, notes);
  if (!findData) {
    return null;
  }
  const newData = editNoteServ(obj, id, notes);
  const newDataParsed = JSON.stringify(newData);
  fs.writeFile(notesDataLink, newDataParsed, err => {throw err});
};
