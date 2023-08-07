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
exports.deleteAllNotes = void 0;
const sequelize_1 = require("../../data/sequelize");
const deleteAllNotes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize_1.Notes.destroy({
            truncate: true
        });
    }
    catch (error) {
        throw new Error("Error deleting all notes");
    }
});
exports.deleteAllNotes = deleteAllNotes;
//# sourceMappingURL=delete-all-notes.js.map