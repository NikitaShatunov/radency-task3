"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNote = exports.editNoteServer = exports.deleteNote = exports.calculateAmountOfCategories = exports.addNewNotes = void 0;
const create_date_1 = require("../helpers/create-date");
const date_from_content_1 = require("../helpers/date-from-content");
const addNewNotes = (obj, listOfTasks) => {
    var _a;
    //if our list is empty, id is 0
    const id = !listOfTasks.length
        ? 0
        : ((_a = listOfTasks[(listOfTasks === null || listOfTasks === void 0 ? void 0 : listOfTasks.length) - 1]) === null || _a === void 0 ? void 0 : _a.id) + 1;
    //calculate date of creation
    const created = (0, create_date_1.createDate)();
    //fint dates in content
    const date = (0, date_from_content_1.dateFromContent)(obj.content);
    const newTask = {
        id: id,
        name: obj.name,
        created: created,
        archived: false,
        category: obj.category,
        content: obj.content,
        date: date || "",
    };
    return newTask;
};
exports.addNewNotes = addNewNotes;
const calculateAmountOfCategories = (items) => {
    let hash = new Set();
    let unarchive = new Map();
    let archive = new Map();
    for (let key of items) {
        hash.add(key.category);
        if (!key.archived) {
            if (unarchive.has(key.category)) {
                unarchive.set(key.category, unarchive.get(key.category) + 1);
            }
            else {
                unarchive.set(key.category, 1);
            }
        }
        else {
            if (archive.has(key.category)) {
                archive.set(key.category, archive.get(key.category) + 1);
            }
            else {
                archive.set(key.category, 1);
            }
        }
    }
    const unarchiveObj = Object.fromEntries(unarchive);
    const archiveObj = Object.fromEntries(archive);
    const namesOfCategories = Array.from(hash);
    return { unarchiveObj, archiveObj, namesOfCategories };
};
exports.calculateAmountOfCategories = calculateAmountOfCategories;
const deleteNote = (id, data) => {
    const newData = data.filter((key) => +key.id !== id);
    return newData;
};
exports.deleteNote = deleteNote;
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
            key.date = date || "";
            key.archived = archived ? archived : key.archived;
        }
    });
    return newData;
};
exports.editNoteServer = editNoteServer;
const findNote = (id, data) => {
    const answer = data.find((obj) => +obj.id === id);
    return answer;
};
exports.findNote = findNote;
//# sourceMappingURL=services.js.map