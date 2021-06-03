module.exports = (app) => {
    app.get('/admin/add_teacher', (_, res) => {
        res.render('admin/add_teacher');
    });
    
    app.post('/teacher/save', (req,res) => {
        const data = req.body;
        const connection = app.config.connection;
        const teacherModel = app.models.teacher;

        teacherModel.save(data, connection, (error, results) => {
            if (error) {
                console.error('Erro ao inserir no banco:' + error);
                res.status(500).send(error);
            }
            else {
                console.log('professor criado!!!');
                res.redirect('/info/teachers');
            }
        });
    });
}