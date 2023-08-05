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
exports.pool = exports.init = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "admin",
    password: "root",
    host: "db",
    port: 5432,
    database: "notes",
});
exports.pool = pool;
const createTableQuery = `
CREATE TABLE IF NOT EXISTS public.notes
(
    id serial PRIMARY KEY,
    name character varying(50) NOT NULL,
    category character varying(50) NOT NULL,
    content character varying(200) NOT NULL,
    created date NOT NULL,
    archived boolean NOT NULL DEFAULT false,
    date character varying(50)
);
`;
const checkTableQuery = `
SELECT EXISTS (
    SELECT 1
    FROM information_schema.tables
    WHERE table_name = 'notes'
);
`;
const dataToInsert = [
    {
        "name": "Shopping list",
        "category": "Shop",
        "content": "Tomato, milk, bread, oil, salt, flour, butter, meat.",
        "created": "2021-04-20T00:00:00.000Z",
        "archived": true,
        "date": null
    },
    {
        "name": "Random thought",
        "category": "Random Thought",
        "content": "Life is like a box of chocolates; you never know what youre gonna get.",
        "created": "2022-06-05T00:00:00.000Z",
        "archived": false,
        "date": null
    },
    {
        "name": "Great idea",
        "category": "Random Thought",
        "content": "A mobile app that helps people learn new languages through interactive games.",
        "created": "2023-01-15T00:00:00.000Z",
        "archived": true,
        "date": null
    },
    {
        "name": "Workout routine",
        "category": "Gym",
        "content": "30 minutes of cardio, 20 minutes of strength training.",
        "created": "2023-03-02T00:00:00.000Z",
        "archived": true,
        "date": null
    },
    {
        "name": "Journal entry",
        "category": "Random Thought",
        "content": "Today, I learned that the key to happiness is gratitude.",
        "created": "2022-08-10T00:00:00.000Z",
        "archived": false,
        "date": null
    },
    {
        "name": "Travel plans",
        "category": "Idea",
        "content": "Start saving money for a trip to Japan next year from 12/10/2023",
        "created": "2023-04-03T00:00:00.000Z",
        "archived": false,
        "date": "12/10/2023"
    },
    {
        "name": "Create song",
        "category": "Idea",
        "content": "Write song about nature",
        "created": "2023-08-04T00:00:00.000Z",
        "archived": false,
        "date": null
    },
    {
        "name": "Shopping list",
        "category": "Idea",
        "content": "Butter, egs, meat 05/06/23!",
        "created": "2023-07-12T00:00:00.000Z",
        "archived": false,
        "date": null
    },
    {
        "name": "Gym trainning",
        "category": "Gym",
        "content": "Push ups 12/12/12",
        "created": "2023-08-05T00:00:00.000Z",
        "archived": false,
        "date": "12/12/12"
    },
];
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield pool.connect();
        const result = yield client.query(checkTableQuery);
        const tableExists = result.rows[0].exists;
        if (!tableExists) {
            yield client.query(createTableQuery);
            for (const item of dataToInsert) {
                const { name, category, content, created, archived, date } = item;
                const insertDataQuery = `
                    INSERT INTO public.notes (name, category, content, created, archived, date)
                    VALUES ($1, $2, $3, $4, $5, $6);
                `;
                yield client.query(insertDataQuery, [name, category, content, created, archived, date]);
            }
            console.log('Table "notes" created and data inserted successfully.');
        }
        else {
            console.log('Table "notes" already exists.');
        }
    }
    catch (error) {
        console.error('Error initializing the database:', error);
    }
});
exports.init = init;
//# sourceMappingURL=db.js.map