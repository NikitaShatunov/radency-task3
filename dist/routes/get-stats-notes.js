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
const get_stats_1 = require("../repositories/get-stats");
const constans_1 = require("../constans");
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
exports.default = getStatsNotes;
//# sourceMappingURL=get-stats-notes.js.map