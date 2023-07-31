import { calculateAmountOfCategories } from "../services/calculateAmountOfCategories";
import { Request, Response } from "express";
import { getNotes } from "./getNotes";
export const getStats = (req: Request, res: Response) => {
  const listOfAchives = getNotes()
  const stats = calculateAmountOfCategories(listOfAchives)
  res.send(stats);
};