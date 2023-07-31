import { findNote } from "../services/findNote"
import { getNotes } from "./getNotes"

export const getNoteById = (id: number) => {
    const data = getNotes()
    const note = findNote(id, data)
    return note
}