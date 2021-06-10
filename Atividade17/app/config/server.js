const express = require('express');
const consign = require('consign');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

consign({ cwd: 'app' })
    .include('routes')
    .into(app);

module.exports = app;
