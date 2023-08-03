"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllNotes = void 0;
const write_data_util_1 = require("../helpers/write-data-util");
const deleteAllNotes = () => {
    const newData = "[]";
    (0, write_data_util_1.writeDataUtil)(newData);
};
exports.deleteAllNotes = deleteAllNotes;
//# sourceMappingURL=delete-all-notes.js.map