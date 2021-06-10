module.exports = (app) => {
    app.get('/', (_, res) => {
        res.render('pages/index');
    });
}
