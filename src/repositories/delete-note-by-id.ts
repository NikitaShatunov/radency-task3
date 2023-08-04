import { pool } from "../../data/db";

export const deleteNoteById = async (id: number) => {
  try {
    const result = await pool.query("DELETE FROM notes WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
      return null; // If no rows were deleted (note doesn't exist), return null
    }

    return result.rows[0]; // Return the deleted note
  } catch (error) {
    throw new Error("Error deleting note by id");
  }
};
