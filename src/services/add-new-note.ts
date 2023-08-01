import { createDate } from "../helpers/create-date"
import { dateFromContent } from "../helpers/date-from-content"

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
    //if our list is empty, id is 0
    const id = !listOfTasks.length ? 0 : listOfTasks[listOfTasks?.length - 1]?.id + 1 
    //calculate date of creation
    const created = createDate()
    //fint dates in content
    const date = dateFromContent(obj.content)
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