import { Task } from "./addNewNote";
export const findNote = (id: number, data: Task[]) => {
  const answer = data.find((obj: Task) => +obj.id === id);
  return answer
};