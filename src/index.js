const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');
const sortMiddleware = require('./app/middleware/sortMiddleware')
//connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(sortMiddleware)
//http logger
app.use(morgan('combined'));
//template engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: require('./helpers/handlebars')
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
route(app);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
