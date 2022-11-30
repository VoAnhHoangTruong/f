const newsRouter = require('./news');
const mesRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', mesRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

module.exports = route;
