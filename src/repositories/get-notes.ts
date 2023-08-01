import { notesDataLink } from "../constans"
import { promises as fs } from 'fs'

export const getNotes = async () => {
  try {
    const rawData = await fs.readFile(notesDataLink)
    const notes = JSON.parse(String(rawData))
    return notes
  } catch (error) {
    throw new Error("Error reading notes data")
  }
}
