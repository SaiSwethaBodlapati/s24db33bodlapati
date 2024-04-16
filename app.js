var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Account = require('./models/account'); // Require the Account model

passport.use(new LocalStrategy(
  function(username, password, done) {
    Account.findOne({ username: username })
      .then(function(user) {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      })
      .catch(function(err) {
        return done(err);
      });
  }
));

require('dotenv').config();
const connectionString = process.env.MONGO_CON || 'mongodb+srv://Swetha:Swetha123@cluster0.jsars8k.mongodb.net/?retryWrites=true&w=majority';
const mongoose = require('mongoose');
mongoose.connect(connectionString);

// Get the default connection
var db = mongoose.connection;
// Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function() {
  console.log("Connection to DB succeeded");
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var catRouter = require('./routes/cat');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var catCostume = require("./models/cat");
var resourceRouter = require("./routes/resource");

var app = express();

async function recreateDB() {
  // Delete everything
  await catCostume.deleteMany();
  let instance1 = new catCostume({ cat_color: "brown", cat_breed: "Abyssinian", cat_price: 2500 });
  let instance2 = new catCostume({ cat_color: "white", cat_breed: "Ragdoll", cat_price: 6500 });
  let instance3 = new catCostume({ cat_color: "black", cat_breed: "British Shorthair", cat_price: 7000 });
  instance1.save().then(doc => {
    console.log("First object saved");
  }).catch(err => {
    console.error(err);
  });
  instance2.save().then(doc => {
    console.log("Second object saved");
  }).catch(err => {
    console.error(err);
  });
  instance3.save().then(doc => {
    console.log("Third object saved");
  }).catch(err => {
    console.error(err);
  });
}
let reseed = true;
if (reseed) {
  recreateDB();
}

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cat', catRouter);
app.use('/grid', gridRouter);
app.use('/pick', pickRouter);
app.use('/cat', catCostume);
app.use('/resource', resourceRouter);

// Passport config
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
