import { Request, Response } from "express";
import { getNotes } from "../repositories/getNotes";
import { Task } from "./addNewNote";
export const findNote = (id: number, data: Task[]) => {
  const answer = data.find((obj: any) => obj.id === id);
  return answer
};