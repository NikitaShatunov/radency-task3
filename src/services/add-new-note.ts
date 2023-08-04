import { createDate } from "../helpers/create-date"
import { dateFromContent } from "../helpers/date-from-content"

export interface Task {
    id?: string,
    archived: boolean,
    name: string,
    created: string,
    category: string,
    content: string,
    date: string

}
export const addNewNotes = (obj: any) => {
    //calculate date of creation
    const created = createDate()
    //fint dates in content
    const date = dateFromContent(obj.content)
    const newTask: Task = {
        name: obj.name,
        created: created,
        archived: false,
        category: obj.category,
        content: obj.content,
        date: date || ''
    }
    return newTask
}