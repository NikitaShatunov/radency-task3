import { findNote } from "../services/find-note"
import { getNotes } from "./get-notes"

export const getNoteById = async (id: number) => {
    const data = await getNotes()
    const note = findNote(id, data)
    return note
}