import { notesDataLink } from "../consts";
import fs from "fs";
import util from "util";

const readFileAsync = util.promisify(fs.readFile);

export const getNotes = async () => {
  try {
    const rawdata = await readFileAsync(notesDataLink);
    const notes = JSON.parse(String(rawdata));
    return notes;
  } catch (error) {
    throw new Error("Error reading notes data");
  }
};
