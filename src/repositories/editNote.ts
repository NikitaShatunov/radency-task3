import { editNoteServ } from "../services/editNoteServ";

export const editNote = (obj: any, id: number) => {
    const fs = require('fs'); 
    const rawdata = fs.readFileSync("src/data.json");
    const data = JSON.parse(rawdata);
    const newData = editNoteServ(obj, id, data)
    const newDataParsed = JSON.stringify(newData)
    fs.writeFileSync('src/data.json', newDataParsed);
}