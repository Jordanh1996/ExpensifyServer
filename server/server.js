require('./config/config');
require('./passport/passport');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const authRoute = require('./routes/auth');
const billRoute = require('./routes/bill');
const expenseRoute = require('./routes/expense');
const currencyRoute = require('./routes/currency');

const app = express();
const port = process.env.PORT;

app.use(cors({ origin: ['http://localhost:8080', 'http://jordan-expensify.herokuapp.com'], credentials: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoute);
app.use('/bill', billRoute);
app.use('/expense', expenseRoute);
app.use('/currency', currencyRoute);

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});
