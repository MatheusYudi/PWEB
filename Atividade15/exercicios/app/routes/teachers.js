module.exports = (app) => {
    app.get('/info/teachers', (_, res) => {

        const connection = app.config.connection;
        const teacherModel = app.models.teacher;

        teacherModel.list(connection, (error, results) => {
            if (error) {
                console.error(error);
                res.send(error);
                return;
            }

            res.render('info/teachers', { data: results });
        });

    });
};