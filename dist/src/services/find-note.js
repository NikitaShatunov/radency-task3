"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNote = void 0;
const findNote = (id, data) => {
    const answer = data.find((obj) => +obj.id === id);
    return answer;
};
exports.findNote = findNote;
//# sourceMappingURL=find-note.js.map