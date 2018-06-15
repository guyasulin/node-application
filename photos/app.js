var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var model = require('./models/Photos');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var photosRouter = require('./routes/photos');
var uploadRouter = require('./routes/upload');
var downloadRouter = require('./routes/download');

//express v4
var multer = require('multer');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Set the upload images directory
app.set('photos', path.join(__dirname + '/public/images'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(multer({dest: './uploads/'}).single('photo'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/photos', photosRouter.list);
app.use('/upload', uploadRouter);


//
// Add the download middleware

app.get('/photo/:id/download',downloadRouter.download(app.get('photos')));

app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
