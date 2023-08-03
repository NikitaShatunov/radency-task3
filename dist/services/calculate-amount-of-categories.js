"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAmountOfCategories = void 0;
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
//# sourceMappingURL=calculate-amount-of-categories.js.map