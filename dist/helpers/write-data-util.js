"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeDataUtil = void 0;
const fs_1 = __importDefault(require("fs"));
const constans_1 = require("../constans");
const writeDataUtil = (newData) => {
    fs_1.default.writeFile(constans_1.notesDataLink, newData, error => {
        if (error)
            throw error;
    });
};
exports.writeDataUtil = writeDataUtil;
//# sourceMappingURL=write-data-util.js.map