import { pool } from "../../data/db"

export const getNotes = async () => {
  try {
    const notes = await pool.query("SELECT * from notes")
    return notes.rows
  } catch (error) {
    throw new Error("Error reading notes data")
  }
}
