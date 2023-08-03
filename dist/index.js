"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const note_id_router_1 = __importDefault(require("./routes/note-id-router"));
const note_router_1 = __importDefault(require("./routes/note-router"));
const create_note_router_1 = __importDefault(require("./routes/create-note-router"));
const get_stats_notes_1 = __importDefault(require("./routes/get-stats-notes"));
const edit_note_router_1 = __importDefault(require("./routes/edit-note-router"));
const delete_note_by_id_router_1 = __importDefault(require("./routes/delete-note-by-id-router"));
const delete_all_notes_router_1 = __importDefault(require("./routes/delete-all-notes-router"));
const app = (0, express_1.default)();
const port = 4000;
app.use(express_1.default.json());
(0, get_stats_notes_1.default)(app);
(0, note_id_router_1.default)(app);
(0, note_router_1.default)(app);
(0, create_note_router_1.default)(app);
(0, edit_note_router_1.default)(app);
(0, delete_note_by_id_router_1.default)(app);
(0, delete_all_notes_router_1.default)(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map