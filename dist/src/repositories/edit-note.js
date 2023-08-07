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
const db_1 = require("../../data/db");
const editNote = (obj, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newNote = (0, edit_note_serv_1.editNoteServer)(obj);
        console.log(newNote);
        if (newNote.hasOwnProperty("archived")) {
            const result = yield db_1.pool.query(`UPDATE notes SET
          archived = $1,
          name = $2,
          content = $3,
          date = $4
        WHERE id = $5
        RETURNING *`, [
                // @ts-ignore
                newNote.archived,
                newNote.name,
                newNote.content,
                newNote.date,
                id,
            ]);
            return result.rowCount > 0;
        }
        else {
            const result = yield db_1.pool.query(`UPDATE notes SET
          name = $1,
          content = $2,
          date = $3
        WHERE id = $4
        RETURNING *`, [
                newNote.name,
                newNote.content,
                newNote.date,
                id,
            ]);
            return result.rowCount > 0;
        }
    }
    catch (e) {
        throw new Error(e);
    }
});
exports.editNote = editNote;
//# sourceMappingURL=edit-note.js.map