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
const edit_note_1 = require("../repositories/edit-note");
const validate_edit_task_1 = require("../helpers/validate-edit-task");
const constans_1 = require("../constans");
const editNoteRouter = (app) => {
    app.patch("/notes/:id", validate_edit_task_1.validateEditTask, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            //edit notes from repositories
            const editFile = yield (0, edit_note_1.editNote)(req.body, +req.params.id);
            if (editFile === null) {
                res.sendStatus(constans_1.HTTP_CODES.NO_CONTENT);
                return;
            }
            res.sendStatus(constans_1.HTTP_CODES.OK);
        }
        catch (e) {
            res.status(constans_1.HTTP_CODES.INTERNAL_SERVER_ERROR).send(e.message);
        }
    }));
};
exports.default = editNoteRouter;
//# sourceMappingURL=edit-note-router.js.map