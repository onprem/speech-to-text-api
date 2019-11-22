const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const showHelp = require('./controllers/showHelp');
const speechToText = require('./controllers/speechToText');

const config = require('./config');
const logger = require('./utils/logger');

const upload = multer({ dest: 'uploads/' });

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', showHelp);
app.get('/pucho', (_req, res) => res.send('It is working!\n'));
app.post('/pucho/stt', upload.single('file'), speechToText);

app.listen(config.PORT, () => logger('info', `API started on port ${config.PORT}`));
