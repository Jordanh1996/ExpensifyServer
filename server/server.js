require('./config/config');
require('./passport/passport');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');

const authRoute = require('./routes/auth');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_SESSION]
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoute);

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});

const knex = require('./database/mysql');

knex.schema.createTableIfNotExists('users', (table) => {
    table.increments();
    table.string('googleId');
    table.string('facebookId');
    table.string('username');
});
