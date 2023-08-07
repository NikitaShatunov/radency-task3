import { Notes } from "../../data/sequelize";

interface Task {
  archived: boolean;
  name: string;
  created: string;
  category: string;
  content: string;
  date: string;
}

export const writeDataUtil = async (newData: Task) => {
  try {
    const note = await Notes.create({...newData})
  } catch (error) {
    throw new Error("Error reading notes data");
  }
};
