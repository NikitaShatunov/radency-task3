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
const delete_note_by_id_1 = require("../repositories/delete-note-by-id");
const constans_1 = require("../constans");
const deleteNoteByIdRouter = (app) => {
    app.delete("/notes/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if ((yield (0, delete_note_by_id_1.deleteNoteById)(+req.params.id)) === null) {
                return res.sendStatus(constans_1.HTTP_CODES.NO_CONTENT);
            }
            res.sendStatus(constans_1.HTTP_CODES.OK);
        }
        catch (e) {
            res.status(constans_1.HTTP_CODES.INTERNAL_SERVER_ERROR).send(e.message);
        }
    }));
};
exports.default = deleteNoteByIdRouter;
//# sourceMappingURL=delete-note-by-id-router.js.map