"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFromContent = void 0;
const dateFromContent = (content) => {
    const regex = /\d{1,2}\/\d{1,2}\/\d{2,4}/g;
    const date = content.match(regex);
    return date ? date.join(', ') : '';
};
exports.dateFromContent = dateFromContent;
//# sourceMappingURL=date-from-content.js.map