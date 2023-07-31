import { calculateAmountOfCategories } from "../helpers/calculateAmountOfCategories";
import { listOfAchives } from "../repositories/notesData";
import { Request, Response } from "express";
export const getStats = (req: Request, res: Response) => {
  const stats = calculateAmountOfCategories(listOfAchives)
  res.send(stats);
};