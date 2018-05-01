require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoute = require('./routes/auth');

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(bodyParser.json());

app.use('/auth', authRoute);

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});

