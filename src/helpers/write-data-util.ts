import fs from "fs"
import { notesDataLink } from "../constans"
export const writeDataUtil = (newData: any) => {
     fs.writeFile(notesDataLink, newData, error => {
          if(error) throw error         
     })
}