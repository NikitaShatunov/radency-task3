"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = void 0;
const deleteNote = (id, data) => {
    const newData = data.filter((key) => +key.id !== id);
    return newData;
};
exports.deleteNote = deleteNote;
//# sourceMappingURL=delete-note.js.map