var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var proposalsRoutes = require('./routes/ProposalsController');
var authenticationRoutes = require('./routes/AuthenticationController');
var milestoneRoutes = require('./routes/MilestonesController');

var validationMiddleware = require('./middleware/ValidationMiddleware');
var errorHandler = require('./middleware/ErrorHandler');

app.use('/', indexRouter);
app.use('/proposals', validationMiddleware, proposalsRoutes);
app.use('/authentication', authenticationRoutes);
app.use('/milestones', validationMiddleware, milestoneRoutes);
app.use(errorHandler);

module.exports = app;