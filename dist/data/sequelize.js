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
exports.initSequelize = exports.Notes = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize = new sequelize_1.Sequelize("notes", "admin", "root", {
    host: "db",
    port: 5432,
    dialect: "postgres",
});
exports.Notes = sequelize.define("notes", {
    id: {
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    },
    category: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    },
    content: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    },
    created: {
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    },
    archived: {
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    date: {
        type: sequelize_typescript_1.DataType.STRING,
    }
}, {
    timestamps: false
});
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
const checkTableQuery = `
SELECT EXISTS (
    SELECT 1
    FROM information_schema.tables
    WHERE table_name = 'notes'
);
`;
const initSequelize = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [result] = yield sequelize.query(checkTableQuery);
        const tableExists = result[0].exists;
        if (!tableExists) {
            yield exports.Notes.sync();
            yield exports.Notes.bulkCreate(dataToInsert);
            console.log('Table "notes" created and data inserted successfully.');
        }
        else {
            console.log('Table "notes" already exists, skipping initialization.');
        }
    }
    catch (error) {
        console.error('Error initializing the database:', error);
    }
});
exports.initSequelize = initSequelize;
//# sourceMappingURL=sequelize.js.map