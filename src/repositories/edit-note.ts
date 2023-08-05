import { Task } from "../services/add-new-note"
import { editNoteServer } from "../services/edit-note-serv"
import { pool } from "../../data/db"
export const editNote = async (obj: Task, id: number) => {
  try {
    const newNote = editNoteServer(obj)
    if(newNote.archived !== null) {
      const result = await pool.query(
        `UPDATE notes SET
          archived = $1,
          name = $2,
          content = $3,
          date = $4
        WHERE id = $5
        RETURNING *`,
        [
          newNote.archived,
          newNote.name,
          newNote.content,
          newNote.date,
          id,
        ]
      );
      return result.rowCount > 0
    }
    else {
      const result = await pool.query(
        `UPDATE notes SET
          name = $1,
          content = $2,
          date = $3
        WHERE id = $4
        RETURNING *`,
        [
          newNote.name,
          newNote.content,
          newNote.date,
          id,
        ]
      );
      return result.rowCount > 0
    } 
  }
  catch(e) {
    throw new Error(e)
  }
}
