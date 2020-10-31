const sitesRouter = require('./site');
const newsRouter = require('./news');
const coursesRouter = require('./courses');

function route(app) {

    app.use('/courses', coursesRouter);

    app.use('/news', newsRouter);

    app.use('/', sitesRouter);


}

module.exports = route;
