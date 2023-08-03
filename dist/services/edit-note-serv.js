"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editNoteServer = void 0;
const date_from_content_1 = require("../helpers/date-from-content");
const editNoteServer = (obj, id, data) => {
    const date = (0, date_from_content_1.dateFromContent)(obj.content);
    const name = obj.name;
    const content = obj.content;
    const archived = obj.archived;
    let newData = [...data];
    newData.forEach((key) => {
        if (+key.id === id) {
            key.name = name;
            key.content = content;
            key.date = date || '';
            key.archived = archived ? archived : key.archived;
        }
    });
    return newData;
};
exports.editNoteServer = editNoteServer;
//# sourceMappingURL=edit-note-serv.js.map