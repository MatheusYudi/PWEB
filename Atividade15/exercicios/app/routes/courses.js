module.exports = (app) => {
    app.get('/info/courses', (_, res) => {
        res.render('info/courses')
    });
}