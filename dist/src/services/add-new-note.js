"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewNotes = void 0;
const create_date_1 = require("../helpers/create-date");
const date_from_content_1 = require("../helpers/date-from-content");
const addNewNotes = (obj) => {
    //calculate date of creation
    const created = (0, create_date_1.createDate)();
    //fint dates in content
    const date = (0, date_from_content_1.dateFromContent)(obj.content);
    const newTask = {
        name: obj.name,
        created: created,
        archived: false,
        category: obj.category,
        content: obj.content,
        date: date || ''
    };
    return newTask;
};
exports.addNewNotes = addNewNotes;
//# sourceMappingURL=add-new-note.js.map