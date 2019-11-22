const logger = (level, ...messages) => {
  const levels = {
    info: '[INFO]',
    log: '[LOG]',
    warn: '[WARN]',
    error: '[ERROR]',
  };
  // eslint-disable-next-line no-console
  console.log(levels[level], ...messages);
};

module.exports = logger;
