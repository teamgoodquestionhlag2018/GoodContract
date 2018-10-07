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
var userRoutes = require('./routes/UsersController');

app.use('/', indexRouter);
app.use('/proposals', proposalsRoutes);
app.use('/users', userRoutes);

module.exports = app;