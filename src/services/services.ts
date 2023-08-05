import { createDate } from "../helpers/create-date";
import { dateFromContent } from "../helpers/date-from-content";

export interface Task {
  id: string;
  archived: boolean;
  name: string;
  created: string;
  category: string;
  content: string;
  date: string;
}
export const addNewNotes = (obj: any, listOfTasks: Task[]) => {
  //if our list is empty, id is 0
  const id = !listOfTasks.length
    ? 0
    : listOfTasks[listOfTasks?.length - 1]?.id + 1;
  //calculate date of creation
  const created = createDate();
  //fint dates in content
  const date = dateFromContent(obj.content);
  const newTask = {
    id: id,
    name: obj.name,
    created: created,
    archived: false,
    category: obj.category,
    content: obj.content,
    date: date || "",
  };
  return newTask;
};
export const calculateAmountOfCategories = (items: Task[]) => {
  let hash = new Set<string>();
  let unarchive = new Map<string, number>();
  let archive = new Map<string, number>();

  for (let key of items) {
    hash.add(key.category);
    if (!key.archived) {
      if (unarchive.has(key.category)) {
        unarchive.set(key.category, unarchive.get(key.category)! + 1);
      } else {
        unarchive.set(key.category, 1);
      }
    } else {
      if (archive.has(key.category)) {
        archive.set(key.category, archive.get(key.category)! + 1);
      } else {
        archive.set(key.category, 1);
      }
    }
  }
  const unarchiveObj = Object.fromEntries(unarchive);
  const archiveObj = Object.fromEntries(archive);
  const namesOfCategories: string[] = Array.from(hash);

  return { unarchiveObj, archiveObj, namesOfCategories };
};
export const deleteNote = (id: number, data: Task[]) => {
  const newData = data.filter((key) => +key.id !== id);
  return newData;
};
export const editNoteServer = (obj: any, id: number, data: Task[]) => {
  const date = dateFromContent(obj.content);
  const name = obj.name;
  const content = obj.content;
  const archived = obj.archived;
  let newData = <Task[]>[...data];
  newData.forEach((key) => {
    if (+key.id === id) {
      key.name = name;
      key.content = content;
      key.date = date || "";
      key.archived = archived ? archived : key.archived;
    }
  });
  return newData;
};
export const findNote = (id: number, data: Task[]) => {
  const answer = data.find((obj: Task) => +obj.id === id);
  return answer;
};
