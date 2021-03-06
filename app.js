/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var server = http.createServer(app)
var io = require('socket.io').listen(server);
io.set('log level', 2);

var poker = require('./modules/poker');
var player = require('./modules/player');
var players = [];
var game = poker();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', function (req, res) {
	res.render('index', { title: 'Express' });
});

server.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});

game.startGame();

io.sockets.on('connection', function (socket) {
	socket.emit('playerList', players);
	// socket.on('newPlayer', function (player) {
	// 	// players.push( new player(socket.id, player.name) );
	// });
});
