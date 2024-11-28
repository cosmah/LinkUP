const db = require('../../db');

class User {
    static create({ name, email, password }, callback) {
        const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
        db.run(sql, [name, email, password], function (err) {
            if (err) {
                return callback(err);
            }
            callback(null, { id: this.lastID, name, email, password });
        });
    }

    static findByEmail(email, callback) {
        const sql = `SELECT * FROM users WHERE email = ?`;
        db.get(sql, [email], (err, row) => {
            if (err) {
                return callback(err);
            }
            callback(null, row);
        });
    }

    static findById(id, callback) {
        const sql = `SELECT * FROM users WHERE id = ?`;
        db.get(sql, [id], (err, row) => {
            if (err) {
                return callback(err);
            }
            callback(null, row);
        });
    }
}

module.exports = User;