import { Task } from "./add-new-note"
export const findNote = (id: number, data: Task[]) => {
  const answer = data.find((obj: Task) => +obj.id === id)
  return answer
};