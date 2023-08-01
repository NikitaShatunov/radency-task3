import { writeDataUtil } from "../helpers/writeDataUtil";
export const deleteAllNotes = () => {
    const newData:string = "[]"
    writeDataUtil(newData)
}