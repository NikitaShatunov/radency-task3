"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editNoteServer = void 0;
const date_from_content_1 = require("../helpers/date-from-content");
const editNoteServer = (obj) => {
    const date = (0, date_from_content_1.dateFromContent)(obj.content);
    const name = obj.name;
    const content = obj.content;
    const archived = obj.archived;
    if (archived !== undefined) {
        const newNote = {
            name: name,
            content: content,
            date: date || '',
            archived: archived
        };
        return newNote;
    }
    else {
        const newNote = {
            name: name,
            content: content,
            date: date || '',
        };
        return newNote;
    }
};
exports.editNoteServer = editNoteServer;
//# sourceMappingURL=edit-note-serv.js.map