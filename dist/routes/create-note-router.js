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
const add_notes_1 = require("../repositories/add-notes");
const validate_new_task_1 = require("../helpers/validate-new-task");
const constans_1 = require("../constans");
const createNoteRouter = (app) => {
    //firstly it validates request
    app.post("/notes", validate_new_task_1.validateNewTask, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            //write new notes in db
            yield (0, add_notes_1.addNotes)(req.body);
            res.sendStatus(constans_1.HTTP_CODES.CREATED);
        }
        catch (e) {
            res.status(constans_1.HTTP_CODES.INTERNAL_SERVER_ERROR).send(e.message);
        }
    }));
};
exports.default = createNoteRouter;
//# sourceMappingURL=create-note-router.js.map