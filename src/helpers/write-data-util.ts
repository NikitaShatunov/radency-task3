import { pool } from "../../data/db";

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
    const notes = await pool.query(
      `INSERT INTO notes (archived, name, created, category, content, date) values ($1, $2, $3, $4, $5, $6)`,
      [
        newData.archived,
        newData.name,
        newData.created,
        newData.category,
        newData.content,
        newData.date,
      ]
    );
  } catch (error) {
    throw new Error("Error reading notes data");
  }
};
