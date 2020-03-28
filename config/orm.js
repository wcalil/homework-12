const db = require("./connection.js");


function getAll(callback) {
    db.connection.query('SELECT * FROM burgers', function (err, res) {
        callback(res)
    });
}

exports.getAll = getAll


function insertOne(burger, callback) {
    db.connection.query('INSERT INTO burgers (burger_name) VALUES (?)',[burger], function (err, res) {
        if (err) throw err;
        callback(res)
    });

}

exports.insertOne = insertOne


function updateOne(burger, callback) {
    db.connection.query('UPDATE burgers set devoured = ? WHERE id = ?',[burger.devoured, burger.id], function (err, res) {
        if (err) throw err;
        callback(res)
    });

}

exports.updateOne = updateOne
