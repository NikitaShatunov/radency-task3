import { findNote } from "../services/services"
import { getNotes } from "./get-notes"

export const getNoteById = async (id: number) => {
    const data = await getNotes()
    const note = findNote(id, data)
    return note
}