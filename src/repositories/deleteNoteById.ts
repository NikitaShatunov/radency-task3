import { deleteNote } from "../services/deleteNote";

export const deleteNoteById = (id: number) => {
    const fs = require('fs'); 
    const rawdata = fs.readFileSync("src/data.json");
    const data = JSON.parse(rawdata);
    const newData = deleteNote(id, data)
    const newDataParsed = JSON.stringify(newData)
    fs.writeFileSync('src/data.json', newDataParsed);
}