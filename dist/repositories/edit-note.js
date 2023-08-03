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
exports.editNote = void 0;
const edit_note_serv_1 = require("../services/edit-note-serv");
const find_note_1 = require("../services/find-note");
const get_notes_1 = require("./get-notes");
const write_data_util_1 = require("../helpers/write-data-util");
const editNote = (obj, id) => __awaiter(void 0, void 0, void 0, function* () {
    //get all note
    const notes = yield (0, get_notes_1.getNotes)();
    //find desired note
    const findData = (0, find_note_1.findNote)(id, notes);
    if (!findData) {
        return null;
    }
    //edit note and save file
    const newData = (0, edit_note_serv_1.editNoteServer)(obj, id, notes);
    const newDataStringified = JSON.stringify(newData);
    (0, write_data_util_1.writeDataUtil)(newDataStringified);
});
exports.editNote = editNote;
//# sourceMappingURL=edit-note.js.map