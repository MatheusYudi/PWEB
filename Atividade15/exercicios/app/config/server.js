const express = require('express');
const consign = require('consign');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.json());
app.use(express.urlencoded());

consign({ cwd: 'app' })
    .include('routes')
    .then('config/connection.js')
    .then('models')
    .into(app);

module.exports = app;