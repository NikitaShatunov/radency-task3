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
const sequelize_1 = require("../../data/sequelize");
const editNote = (obj, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newNote = (0, edit_note_serv_1.editNoteServer)(obj);
        const result = yield sequelize_1.Notes.update(Object.assign({}, newNote), { where: { id: id } });
        console.log(result);
        return result[0];
    }
    catch (e) {
        throw new Error(e);
    }
});
exports.editNote = editNote;
//# sourceMappingURL=edit-note.js.map