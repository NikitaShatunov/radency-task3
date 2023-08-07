import { Task } from "../services/add-new-note"
import { editNoteServer } from "../services/edit-note-serv"
import { Notes } from "../../data/sequelize"
export const editNote = async (obj: Task, id: number) => {
  try {
    const newNote = editNoteServer(obj)
      const result = await Notes.update({
        ...newNote
      }, {where: {id: id}});
      return result[0]
  }
  catch(e) {
    throw new Error(e)
  }
}
