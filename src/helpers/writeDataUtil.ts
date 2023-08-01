import fs from "fs"
import { notesDataLink } from "../consts";
export const writeDataUtil = (newData: any) => {
     fs.writeFile(notesDataLink, newData, error => {throw error});
}