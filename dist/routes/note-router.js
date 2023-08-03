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
const get_notes_1 = require("../repositories/get-notes");
const constans_1 = require("../constans");
const noteRouter = (app) => {
    app.get("/notes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        //function getNotes get all notes from db, and return it
        const notes = yield (0, get_notes_1.getNotes)();
        if (notes.length) {
            res.send(notes);
            return;
        }
        res.sendStatus(constans_1.HTTP_CODES.NOT_FOUND);
    }));
};
exports.default = noteRouter;
//# sourceMappingURL=note-router.js.map