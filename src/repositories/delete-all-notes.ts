import { pool } from "../../data/db";

export const deleteAllNotes = async () => {
  try {
    await pool.query("DELETE FROM notes");
  } catch (error) {
    throw new Error("Error deleting all notes");
  }
};
