const speech = require('@google-cloud/speech');
const fs = require('fs');

const logger = require('../utils/logger');

const speechToText = async (req, res) => {
  const sttClient = new speech.SpeechClient();

  const file = fs.readFileSync(req.file.path);

  const audio = {
    content: file.toString('base64'),
  };
  const config = {
    encoding: req.file.mimetype === 'audio/mpeg' ? 'MP3' : 'LINEAR16',
    sampleRateHertz: 16000,
    languageCode: 'en-US',
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
    logger('info', response);

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
    res.status(500).json({
      status: 'INTERNAL_SERVER_ERROR',
      statusCode: 500,
    });
  }
};

module.exports = speechToText;
