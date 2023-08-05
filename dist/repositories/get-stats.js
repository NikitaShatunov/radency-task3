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
exports.getStats = void 0;
const services_1 = require("../services/services");
const get_notes_1 = require("./get-notes");
const getStats = () => __awaiter(void 0, void 0, void 0, function* () {
    const listOfAchives = yield (0, get_notes_1.getNotes)();
    const stats = (0, services_1.calculateAmountOfCategories)(listOfAchives);
    return stats;
});
exports.getStats = getStats;
//# sourceMappingURL=get-stats.js.map