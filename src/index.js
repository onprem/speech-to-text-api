const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const logger = require('./utils/logger');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/pucho', (_req, res) => res.send('It is working!\n'));

app.listen(config.PORT, () => logger('info', `API started on port ${config.PORT}`));
