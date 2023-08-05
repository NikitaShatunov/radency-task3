"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const db_1 = require("../data/db");
const app = (0, express_1.default)();
const port = 4000;
setTimeout(() => (0, db_1.init)(), 3000);
app.use(express_1.default.json());
(0, routes_1.getStatsNotes)(app);
(0, routes_1.noteIdRouter)(app);
(0, routes_1.noteRouter)(app);
(0, routes_1.createNoteRouter)(app);
(0, routes_1.editNoteRouter)(app);
(0, routes_1.deleteNoteByIdRouter)(app);
(0, routes_1.deleteAllNotesRouter)(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map