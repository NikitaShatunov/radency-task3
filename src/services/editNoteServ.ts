import { dateParser } from "../helpers/dateParser";
import { Task } from "./addNewNote";

export const editNoteServ = (obj: any, id: number, data: Task[]) => {
    const date = dateParser(obj.content)
    const name = obj.name
    const content = obj.content
    const archived = obj.archived
    let newData = <Task[]>[...data]
    newData.forEach((key) => {
        if(+key.id === id) {
            key.name = name
            key.content = content
            key.date = date || ''
            key.archived = archived ? archived : key.archived
        }
    })
    return newData
}