const winston = require('winston');
const { LoggingWinston } = require('@google-cloud/logging-winston');
const appVersion = require('../../package.json').version;

const Logger = winston.Logger;
const Console = winston.transports.Console;

if (process.env.NODE_ENV === 'development') {
  process.env.GOOGLE_APPLICATION_CREDENTIALS = '/Users/dennisy/keys/pluto-cmp-f1d01876b199.json';
}

const loggingWinston = new LoggingWinston({
  labels: {
    app: 'cmp',
    env: process.env.NODE_ENV,
    version: appVersion,
  },
});

const logger = new Logger({
  level: 'info', // log at 'info' and above
  transports: [
    new Console(),
    loggingWinston,
  ],
});

module.exports = (req, res, next) => {
  logger.info({
    httpRequest: {
      status: res.statusCode,
      requestUrl: req.originalUrl,
      requestMethod: req.method,
      userAgent: req.get('User-Agent'),
      referer: req.get('Referer'),
      protocol: req.protocol,
    },
    countryCode: req.get('X-AppEngine-Country'),
    // TODO: gdrpApplies: isUserEu(),
    cookieData: {
      euconsentBool: (req.cookies.euconsent !== undefined),
      euconsent: req.cookies.euconsent,
      eupubconsent: req.cookies.eupubconsent,
      custom: req.cookies.custom,
    },
  });
  next();
};
