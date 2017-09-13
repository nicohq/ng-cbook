const express = require('express');
const bodyParser = require('body-parser');
const winston = require('winston');
const expressWinston = require('express-winston');
const methodOverride = require('method-override');
const helmet = require('helmet');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const routes = require('./routes/index');

const winstonInstance = new winston.transports.Console({
    json: true,
    colorize: true
});

mongoose.Promise = global.Promise;

mongoose.connect(config.MONGO_URL, {
    useMongoClient: true
});

mongoose.connection.on('error', (err) => {
    throw new Error('Unable to connect to mongo database');
});

app.use(bodyParser.json());
app.use(methodOverride());
app.use(helmet());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', routes);

// enable logging in dev env
if (config.ENV === 'development') {
    expressWinston.requestWhitelist.push('body');
    expressWinston.responseWhitelist.push('body');
    app.use(expressWinston.logger({
        transports: [winstonInstance],
        meta: true,
        msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}}',
        colorStatus: true
    }));

    // Fixtures
    require('./fixtures');
}

// Error logging
app.use(expressWinston.errorLogger({
    transports: [winstonInstance]
}));

app.listen(config.PORT, function() {
    console.log(`App started on port: ${config.PORT}`);
});
