import { addNewNotes } from "../services/addNewNote";

export const addNotes = (obj: any) => {
    const fs = require('fs'); 
    const rawdata = fs.readFileSync("src/data.json");
    const data = JSON.parse(rawdata);
    const newTask = addNewNotes(obj, data)
    const newData = [...data, newTask]
    const newDataParsed = JSON.stringify(newData)
    fs.writeFileSync('src/data.json', newDataParsed);
}