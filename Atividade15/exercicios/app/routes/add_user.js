module.exports = (app) => {
    app.get('/admin/add_user', (_, res) => {
        res.render('admin/add_user');
    });
}