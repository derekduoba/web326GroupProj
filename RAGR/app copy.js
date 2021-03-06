/**
*Workshop 5 completed in partnership with Derek. 
*/

/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user   = require('./routes/user-routes.js');
var http = require('http');
var path = require('path');

var app = express();
var app = module.exports = express.createServer();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Routes
app.get('/new', routes.new);
app.get('/profile', routes.profile);
app.get('/login', routes.login);
app.get('/', routes.list);

//create server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});