"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "admin",
    password: "root",
    host: "db",
    port: 5432,
    database: "notes",
});
exports.pool = pool;
pool.connect((err, client, done) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    }
    else {
        console.log('Connected to the database');
        done();
    }
});
//# sourceMappingURL=db.js.map