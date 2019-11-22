const md = require('markdown-it')();
const fs = require('fs');

const showHelp = (_req, res) => {
  const readme = fs.readFileSync('README.md');
  const result = `<!DOCTYPE html>
  <html>
  <head>
    <title>Pucho | Speech to Text</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Source+Code+Pro&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.1em;
        width: 60vw;
        margin-left: 20vw;
      }
      code {
        font-family: 'Source Code Pro', monospace;
      }
      pre {
        background: #37374b;
        color: white;
        border-radius: 10px;
        padding: 15px 30px;
        overflow-x: auto;
      }
      @media only screen and (max-width: 1400px) {
        body {
          width: 80vw;
          margin-left: 10vw;
        }
      }
      @media only screen and (max-width: 500px) {
        body {
          width: 96vw;
          margin-left: 2vw;
          font-size: 1em;
        }
        ul {
          padding-left: 15px;
        }
      }
    </style>
  </head>
  <body>
    ${md.render(readme.toString())}
  </body>
  </html>
  `;
  res.send(result);
};

module.exports = showHelp;
