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
const db_1 = require("../../data/db");
const getNoteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield db_1.pool.query("SELECT * FROM notes WHERE id = $1", [id]);
        return notes.rows[0];
    }
    catch (error) {
        throw new Error("Error reading notes data");
    }
});
exports.getNoteById = getNoteById;
//# sourceMappingURL=get-note-by-id.js.map