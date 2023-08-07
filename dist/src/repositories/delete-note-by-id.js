"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNoteById = void 0;
const sequelize_1 = require("../../data/sequelize");
const deleteNoteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield sequelize_1.Notes.destroy({
            where: {
                id: id
            }
        });
        console.log(result);
        if (result === 0) {
            return null; // If no rows were deleted (note doesn't exist), return null
        }
        return result; // Return the deleted note
    }
    catch (error) {
        throw new Error("Error deleting note by id");
    }
});
exports.deleteNoteById = deleteNoteById;
//# sourceMappingURL=delete-note-by-id.js.map