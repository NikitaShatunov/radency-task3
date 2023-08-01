import { Task } from "./add-new-note"

export const deleteNote = (id: number, data: Task[]) => {
    const newData = data.filter((key) => +key.id !== id)
    return newData
}