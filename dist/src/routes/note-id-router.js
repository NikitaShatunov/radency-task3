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
const constans_1 = require("../constans");
const get_note_by_id_1 = require("../repositories/get-note-by-id");
const noteIdRouter = (app) => {
    app.get("/notes/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        //search note by id
        const note = yield (0, get_note_by_id_1.getNoteById)(+req.params.id);
        if (!note) {
            res.sendStatus(constans_1.HTTP_CODES.NOT_FOUND);
        }
        else
            res.send(note);
    }));
};
exports.default = noteIdRouter;
//# sourceMappingURL=note-id-router.js.map