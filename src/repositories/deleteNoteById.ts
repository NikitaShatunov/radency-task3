import { deleteNote } from "../services/deleteNote";
import { Response } from "express";
import { findNote } from "../services/findNote";
import fs from "fs";
import { notesDataLink } from "../consts";
import { getNotes } from "./getNotes";
export const deleteNoteById = async (id: number, res: Response) => {
  const notes = await getNotes();
  const findData = findNote(id, notes);
  if (!findData) {
    return null;
  }
  const newData = deleteNote(id, notes);
  const newDataParsed = JSON.stringify(newData);
  fs.writeFile(notesDataLink, newDataParsed, error => {throw error});
};
