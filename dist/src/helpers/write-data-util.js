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
exports.writeDataUtil = void 0;
const db_1 = require("../../data/db");
const writeDataUtil = (newData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield db_1.pool.query(`INSERT INTO notes (archived, name, created, category, content, date) values ($1, $2, $3, $4, $5, $6)`, [
            newData.archived,
            newData.name,
            newData.created,
            newData.category,
            newData.content,
            newData.date,
        ]);
    }
    catch (error) {
        throw new Error("Error reading notes data");
    }
});
exports.writeDataUtil = writeDataUtil;
//# sourceMappingURL=write-data-util.js.map