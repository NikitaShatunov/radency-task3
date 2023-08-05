import { dateFromContent } from "../helpers/date-from-content"

export const editNoteServer = (obj: any) => {
    const date = dateFromContent(obj.content)
    console.log(date);
    const name = obj.name
    const content = obj.content
    const archived = obj.archived
    const newNote = {
            name: name,
            content: content,
            date: date || '',
            archived: archived || null
        }
    return newNote
}