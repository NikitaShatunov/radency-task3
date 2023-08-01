import { calculateAmountOfCategories } from "../services/calculate-amount-of-categories"
import { getNotes } from "./get-notes"
export const getStats = async () => {
  const listOfAchives = await getNotes()
  const stats = calculateAmountOfCategories(listOfAchives)
  return stats
};