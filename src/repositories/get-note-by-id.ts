import { pool } from "../../data/db"

export const getNoteById = async (id: number) => {
    try {
        const notes = await pool.query("SELECT * FROM notes WHERE id = $1", [id])
        return notes.rows[0]
      } catch (error) {
        throw new Error("Error reading notes data")
      }
    }