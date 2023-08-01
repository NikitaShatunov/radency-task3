import fs from "fs"
import { notesDataLink } from "../consts";
export const deleteAllNotes = () => {
    fs.writeFile(notesDataLink, '[]', error => {throw error});
}