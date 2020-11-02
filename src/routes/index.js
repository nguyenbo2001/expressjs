const sitesRouter = require('./site');
const newsRouter = require('./news');
const coursesRouter = require('./courses');
const meRouter = require('./me');

function route(app) {

    app.use('/courses', coursesRouter);

    app.use('/me', meRouter);

    app.use('/news', newsRouter);

    app.use('/', sitesRouter);


}

module.exports = route;
