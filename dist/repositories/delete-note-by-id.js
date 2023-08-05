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
const services_1 = require("../services/services");
const get_notes_1 = require("./get-notes");
const write_data_util_1 = require("../helpers/write-data-util");
const deleteNoteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield (0, get_notes_1.getNotes)();
    const findData = (0, services_1.findNote)(id, notes);
    //if the note is not defined, returns null
    if (!findData) {
        return null;
    }
    const newData = (0, services_1.deleteNote)(id, notes);
    const newDataParsed = JSON.stringify(newData);
    (0, write_data_util_1.writeDataUtil)(newDataParsed);
});
exports.deleteNoteById = deleteNoteById;
//# sourceMappingURL=delete-note-by-id.js.map