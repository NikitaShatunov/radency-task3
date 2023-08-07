import { Notes } from "../../data/sequelize"

export const getNoteById = async (id: number) => {
    try {
        const notes = await Notes.findByPk(id)
        return notes
      } catch (error) {
        throw new Error("Error reading notes data")
      }
    }