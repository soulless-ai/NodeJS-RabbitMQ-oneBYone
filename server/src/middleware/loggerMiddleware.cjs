const { logger } = require('../config/logger.config.cjs');

const loggerMiddleware = (req, res, next) => {
    logger.info(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

module.exports = { loggerMiddleware };