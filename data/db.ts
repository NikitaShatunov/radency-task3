import { Pool } from 'pg'
import { Task } from '../src/services/add-new-note';

const pool = new Pool({
    user: "admin",
    password: "root",
    host: "db",
    port: 5432,
    database: "notes",
})


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

const dataToInsert: Task[] = [
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


export const init = async () => {
    try {
        const client = await pool.connect();

        const result = await client.query(checkTableQuery);
        const tableExists = result.rows[0].exists;

        if (!tableExists) {
            await client.query(createTableQuery);

            for (const item of dataToInsert) {
                const { name, category, content, created, archived, date } = item;
                const insertDataQuery = `
                    INSERT INTO public.notes (name, category, content, created, archived, date)
                    VALUES ($1, $2, $3, $4, $5, $6);
                `;
                await client.query(insertDataQuery, [name, category, content, created, archived, date]);
            }

            console.log('Table "notes" created and data inserted successfully.');
        } else {
            console.log('Table "notes" already exists.');
        }
    } catch (error) {
        console.error('Error initializing the database:', error);
    }
};


export { pool };
