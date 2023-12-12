const path = require('path');
const contentTypeMiddleware = (req, res, next) => {
    const ext = path.extname(req.url);
    switch (ext) {
        case '.html':
            res.header('Content-Type', 'text/html');
            break;
        case '.css':
            res.header('Content-Type', 'text/css');
            break;
        case '.js':
            res.header('Content-Type', 'application/javascript');
            break;
        // Add more cases for other file types if needed
        default:
            break;
    }
    next();
};
module.exports = { contentTypeMiddleware };