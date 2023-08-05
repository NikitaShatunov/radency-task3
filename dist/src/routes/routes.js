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
exports.noteRouter = exports.noteIdRouter = exports.getStatsNotes = exports.editNoteRouter = exports.deleteNoteByIdRouter = exports.deleteAllNotesRouter = exports.createNoteRouter = void 0;
const add_notes_1 = require("../repositories/add-notes");
const validate_new_task_1 = require("../helpers/validate-new-task");
const delete_all_notes_1 = require("../repositories/delete-all-notes");
const delete_note_by_id_1 = require("../repositories/delete-note-by-id");
const get_notes_1 = require("../repositories/get-notes");
const edit_note_1 = require("../repositories/edit-note");
const get_stats_1 = require("../repositories/get-stats");
const validate_edit_task_1 = require("../helpers/validate-edit-task");
const get_note_by_id_1 = require("../repositories/get-note-by-id");
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
exports.createNoteRouter = createNoteRouter;
const deleteAllNotesRouter = (app) => {
    app.delete("/notes", (req, res) => {
        try {
            (0, delete_all_notes_1.deleteAllNotes)();
            res.sendStatus(constans_1.HTTP_CODES.OK);
        }
        catch (e) {
            res.status(constans_1.HTTP_CODES.INTERNAL_SERVER_ERROR).send(e.message);
        }
    });
};
exports.deleteAllNotesRouter = deleteAllNotesRouter;
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
exports.deleteNoteByIdRouter = deleteNoteByIdRouter;
const editNoteRouter = (app) => {
    app.patch("/notes/:id", validate_edit_task_1.validateEditTask, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            //edit notes from repositories
            const editFile = yield (0, edit_note_1.editNote)(req.body, +req.params.id);
            if (!editFile) {
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
exports.editNoteRouter = editNoteRouter;
const getStatsNotes = (app) => {
    app.get("/notes/stats", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            //calculate stats
            const stats = yield (0, get_stats_1.getStats)();
            res.send(stats);
        }
        catch (e) {
            res.status(constans_1.HTTP_CODES.INTERNAL_SERVER_ERROR).send(e.message);
        }
    }));
};
exports.getStatsNotes = getStatsNotes;
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
exports.noteIdRouter = noteIdRouter;
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
exports.noteRouter = noteRouter;
//# sourceMappingURL=routes.js.map