"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDate = void 0;
const createDate = () => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const currentDate = new Date();
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    return `${month} ${day}, ${year}`;
};
exports.createDate = createDate;
//# sourceMappingURL=create-date.js.map