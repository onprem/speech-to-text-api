const speech = require('@google-cloud/speech');
const fs = require('fs');

const logger = require('../utils/logger');

const languageMap = new Map([
  ['default', 'hi-IN'],
  ['english', 'en-IN'],
  ['hindi', 'hi-IN'],
  ['english-us', 'en-US'],
]);

const speechToText = async (req, res) => {
  logger('info', '[STT] got request... lang: ', req.body.lang);
  const sttClient = new speech.SpeechClient();

  const file = fs.readFileSync(req.file.path);

  const audio = {
    content: file.toString('base64'),
  };

  let languageCode;
  if (req.body.lang) languageCode = languageMap.get(req.body.lang);

  const config = {
    encoding: req.file.mimetype === 'audio/mpeg' ? 'MP3' : 'LINEAR16',
    sampleRateHertz: 16000,
    languageCode: languageCode || languageMap.get('default'),
  };
  const request = {
    audio,
    config,
  };

  try {
    const [response] = await sttClient.recognize(request);
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');

    res.status(200).json({
      status: 'REQUEST_SUCCESSFULL',
      statusCode: 200,
      data: {
        output: transcription,
      },
    });
    logger('info', '[STT] request successfull');
    logger('info', '[STT] Transcription:', transcription);
  } catch (err) {
    logger('error', err);
    res.status(500).json({
      status: 'INTERNAL_SERVER_ERROR',
      statusCode: 500,
    });
  }
};

module.exports = speechToText;
