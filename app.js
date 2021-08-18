const path = require('path');
const express = require('express');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');

const globalErrorHandler = require('./controllers/errorController');
const emailController = require('./controllers/sendEmailController');

const AppError = require('./utils/appError');

const app = express();

const emailLimiter = rateLimit({
    max: 20,
    windowMs: 60 * 60 * 1000,
    message: `Too many requests from this IP, please try again in 1 hour`,
    handler: function(req, res) {
        res.status(this.statusCode).json({ status: 'fail', message: this.message });
    },
});

app.use(express.json({ limit: '10kb' }));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();

    next();
});

app.post('/api/v1/send-message', emailLimiter, emailController.sendEmail);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
    });
}

//To catch all unhandled routes
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;