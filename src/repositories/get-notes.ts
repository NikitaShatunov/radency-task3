import { Notes } from "../../data/sequelize"

export const getNotes = async () => {
  try {
    const notes: any = await Notes.findAll({raw: true})    
    return notes
  } catch (error) {
    throw new Error("Error reading notes data")
  }
}
