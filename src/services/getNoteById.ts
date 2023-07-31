import { listOfAchives } from "../repositories/notesData";
import { Request, Response } from "express";
export const getNoteById = (req: Request, res: Response) => {
  const answer = listOfAchives.find((obj: any) => obj.id === +req.params.id);
  res.send(answer);
};