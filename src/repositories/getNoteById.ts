import { findNote } from "../services/findNote"
import { getNotes } from "./getNotes"

export const getNoteById = async (id: number) => {
    const data = await getNotes()
    const note = findNote(id, data)
    return note
}