const moduleMessage = require('./module1');
const app = require('./app/config/server');

const add_user = require('./app/routes/add_user')(app);
const courses = require('./app/routes/courses')(app);
const history = require('./app/routes/history')(app);
const home = require('./app/routes/home')(app);
const teachers = require('./app/routes/teachers')(app);

app.get('*', (_, res) => {
    res.send('<h1>404 Page Not Found</h1>');
});

app.listen(3000, () => {
    console.log(moduleMessage);
    console.log('Server listening on http://localhost:3000');
});