import { dateFromContent } from "../helpers/date-from-content"

export const editNoteServer = (obj: any) => {
    const date = dateFromContent(obj.content)
    const name = obj.name
    const content = obj.content
    const archived = obj.archived
    if(archived !== undefined) {
        const newNote = {
            name: name,
            content: content,
            date: date || '',
            archived: archived 
        }
        return newNote
    }
    else {
        const newNote = {
            name: name,
            content: content,
            date: date || '', 
        }
        return newNote
    }
   
}