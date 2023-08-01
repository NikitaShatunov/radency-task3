import { calculateAmountOfCategories } from "../services/calculateAmountOfCategories";
import { Request, Response } from "express";
import { getNotes } from "./getNotes";
export const getStats = async () => {
  const listOfAchives = await getNotes()
  const stats = calculateAmountOfCategories(listOfAchives)
  return stats
};