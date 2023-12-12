const express = require('express');
const http = require('http');
const cors = require('cors');

const { loggerMiddleware } = require('./middleware/loggerMiddleware.cjs');
const M1router = require('./routes/m1.cjs');
const { errorMiddleware } = require('./middleware/errorMiddleware.cjs');

const port = process.env.PORT || 3000;

const createWorker = async () => {
    const app = express();
    app.use(cors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }));
    app.use(express.urlencoded({ extended: true, limit: '10mb', parameterLimit: 1000000 }));
    app.use(express.json());

    app.use(loggerMiddleware);
    app.use(M1router);
    app.use(errorMiddleware);

    http.createServer(app).listen(port, () => {
        console.log(`Процесс ${process.pid} запущен и слушает порт ${port} ...`);
    });
};

module.exports = createWorker;