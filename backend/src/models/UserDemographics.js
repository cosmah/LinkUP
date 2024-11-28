const db = require('../../db');

class UserDemographics {
    static create({ user_id, date_of_birth, gender, religion, address }, callback) {
        const sql = `INSERT INTO user_demographics (user_id, date_of_birth, gender, religion, address) VALUES (?, ?, ?, ?, ?)`;
        db.run(sql, [user_id, date_of_birth, gender, religion, address], function (err) {
            if (err) {
                return callback(err);
            }
            callback(null, { id: this.lastID, user_id, date_of_birth, gender, religion, address });
        });
    }

    static findByUserId(user_id, callback) {
        const sql = `SELECT * FROM user_demographics WHERE user_id = ?`;
        db.get(sql, [user_id], (err, row) => {
            if (err) {
                return callback(err);
            }
            callback(null, row);
        });
    }

    static updateByUserId(user_id, { date_of_birth, gender, religion, address }, callback) {
        const sql = `UPDATE user_demographics SET date_of_birth = ?, gender = ?, religion = ?, address = ? WHERE user_id = ?`;
        db.run(sql, [date_of_birth, gender, religion, address, user_id], function (err) {
            if (err) {
                return callback(err);
            }
            callback(null, { user_id, date_of_birth, gender, religion, address });
        });
    }

    static deleteByUserId(user_id, callback) {
        const sql = `DELETE FROM user_demographics WHERE user_id = ?`;
        db.run(sql, [user_id], function (err) {
            if (err) {
                return callback(err);
            }
            callback(null);
        });
    }
}

module.exports = UserDemographics;