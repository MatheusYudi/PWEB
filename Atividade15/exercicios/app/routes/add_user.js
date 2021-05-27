module.exports = (app) => {
    app.get('/add_user', (_, res) => {
        res.render('admin/add_user');
    });
}