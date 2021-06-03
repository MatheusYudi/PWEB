module.exports = (app) => {
    app.get('/info/teachers/detail', (_, res) => {

        const connection = app.config.connection;
        const teacherModel = app.models.teacher;

        teacherModel.get(connection, (error, results) => {
            if (error) {
                console.error(error);
                res.send(error);
                return;
            }

            res.render('info/teachers_detail', { data: results });
        });

    });
};