const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override')
const db = require('./configs/db');

const route = require('./routes');

const app = express();

db.connect();

app.use(morgan('combined'));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(methodOverride('_method'));

// Template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

route(app);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
