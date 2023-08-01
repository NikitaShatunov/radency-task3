import { calculateAmountOfCategories } from "../services/calculateAmountOfCategories";
import { Request, Response } from "express";
import { getNotes } from "./getNotes";
export const getStats = async (req: Request, res: Response) => {
  const listOfAchives = await getNotes()
  const stats = calculateAmountOfCategories(listOfAchives)
  res.send(stats);
};