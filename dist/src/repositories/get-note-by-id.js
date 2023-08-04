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
exports.getNoteById = void 0;
const find_note_1 = require("../services/find-note");
const get_notes_1 = require("./get-notes");
const getNoteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, get_notes_1.getNotes)();
    const note = (0, find_note_1.findNote)(id, data);
    return note;
});
exports.getNoteById = getNoteById;
//# sourceMappingURL=get-note-by-id.js.map