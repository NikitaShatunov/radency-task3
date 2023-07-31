import { createDate } from "../helpers/createDate"
import { dateParser } from "../helpers/dateParser"

export interface Task {
    id: string,
    archived: boolean,
    name: string,
    created: string,
    category: string,
    content: string,
    date: string

}
export const addNewNotes = (obj: any, listOfTasks: Task[]) => {
    const id = listOfTasks[listOfTasks.length - 1].id + 1 
    const created = createDate()
    const date = dateParser(obj.content)
    const newTask = {
        id: id,
        name: obj.name,
        created: created,
        archived: false,
        category: obj.category,
        content: obj.content,
        date: date || ''
    }
    return newTask
}