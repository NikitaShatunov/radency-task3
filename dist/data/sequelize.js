"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSequelize = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('notes', 'admin', 'root', {
    host: 'db',
    port: 5432,
    dialect: 'postgres'
});
const initSequelize = () => {
    sequelize.authenticate().then(() => console.log('Database connected.')).catch((e) => console.log("Erorr:", e));
};
exports.initSequelize = initSequelize;
//# sourceMappingURL=sequelize.js.map