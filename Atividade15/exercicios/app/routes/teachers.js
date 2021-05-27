module.exports = function (app) {
    app.get('/info/teachers', function (req, res) {

        const mysql = require('mysql');

        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root12345678',
            database: 'site_fatec',
        });

        connection.connect(function (err) {
            if (err) {
                throw err;
            }

            console.log('MySql Connected!');
        });

        connection.query('select * from professores', function (err, results) {
            if (err) {
                console.log(err);
                res.send(err);
                return;
            }

            res.send(results);
        });

        // res.render('info/teachers');
    });
};