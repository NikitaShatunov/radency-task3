"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delete_all_notes_1 = require("../repositories/delete-all-notes");
const constans_1 = require("../constans");
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
exports.default = deleteAllNotesRouter;
//# sourceMappingURL=delete-all-notes-router.js.map