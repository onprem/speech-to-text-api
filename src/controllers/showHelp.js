const md = require('markdown-it')();
const fs = require('fs');

const showHelp = (_req, res) => {
  const readme = fs.readFileSync('README.md');
  const result = `<!DOCTYPE html>
  <html>
  <head>
    <title>Pucho | Speech to Text</title>
  </head>
  <body>
    ${md.render(readme.toString())}
  </body>
  </html>
  `;
  res.send(result);
};

module.exports = showHelp;
