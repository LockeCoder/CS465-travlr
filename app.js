var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');
var fs = require('fs');

var indexRouter = require('./app_server/routes/index');
var travelRouter = require('./app_server/routes/travel');
var usersRouter = require('./app_server/routes/users'); // keep only if you still have this file

var app = express();

// view engine setup (now points to app_server/views)
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// optional: register partials if you created app_server/views/partials
var partialsPath = path.join(__dirname, 'app_server', 'views', 'partials');
if (fs.existsSync(partialsPath)) {
  hbs.registerPartials(partialsPath);
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// static files still come from /public
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/travel', travelRouter); // NEW
app.use('/', indexRouter);
app.use('/users', usersRouter); // remove if you don't use it

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;