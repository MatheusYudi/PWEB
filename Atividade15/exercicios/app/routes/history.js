module.exports = (app) => {
    app.get('/info/history', (_, res) => {
        res.render('info/history');
    });
}