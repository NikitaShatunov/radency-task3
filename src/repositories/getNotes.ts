export const getNotes = () => {
  const fs = require("fs");
  const rawdata = fs.readFileSync("src/data.json");
  const data = JSON.parse(rawdata);
  return data;
};
