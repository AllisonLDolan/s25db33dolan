require("dotenv").config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

const connectionString = process.env.MONGO_CON;
console.log(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true});
mongoose = require('mongoose');
mongoose.connect(connectionString);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
  console.log("Connection to DB succeeded")})

var Creature = require("./models/creature");
var resourceRouter = require('./routes/resource');
var indexRouter = require('./routes/index');
var creatureRouter = require('./routes/creature');
var gridRouter = require('./routes/grid');
var randomRouter = require('./routes/pick');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/resource', resourceRouter);
app.use('/creature', creatureRouter);
app.use('/gridbuild', gridRouter);
app.use('/rand', randomRouter);
app.use('/users', usersRouter);

passport.use(new LocalStrategy(
  function(username, password, done) {
    Account.findOne({ username: username })
      .then(function (user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
          return done(null, user);
        })
        .catch(function(err){
          return done(err)
        })
    })
  )
    
  

async function recreateDB() {
  await Creature.deleteMany();

  let instance1 = new Creature({ creature: "Dragon", habitat: "Mountains", lifespan: 1000 });
  let instance2 = new Creature({ creature: "Kraken", habitat: "Ocean", lifespan: 100 });
  let instance3 = new Creature({ creature: "Phoenix", habitat: "Desert", lifespan: 500 });

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
if (reseed) { recreateDB(); }


var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser())

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
