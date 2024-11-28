const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create a new database file if it doesn't exist
const db = new sqlite3.Database(path.join(__dirname, 'event_suggestion.db'), (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT UNIQUE,
            password TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`);
        db.run(`CREATE TABLE IF NOT EXISTS user_demographics (
            user_id INTEGER,
            date_of_birth TEXT,
            gender TEXT,
            religion TEXT,
            address TEXT,
            FOREIGN KEY(user_id) REFERENCES users(id)
        )`);
    }
});

module.exports = db;