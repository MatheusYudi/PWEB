const app = require('./app/config/server');

require('./app/routes')(app);

app.get('*', (_, res) => {
    res.send('<h1>404 Page Not Found</h1>');
});

app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});
