import { Pool } from 'pg'

const pool = new Pool({
    user: "admin",
    password: "root",
    host: "db",
    port: 5432,
    database: "notes",
})

pool.connect((err, client, done) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
        done();
    }
});

export { pool };
