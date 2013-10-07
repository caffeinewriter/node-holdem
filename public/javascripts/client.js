var socket = io.connect('http://localhost');
var Player = function () {
	this.name = prompt("Enter desired username:");
	socket.emit("newPlayer", this);
};
var you = new Player();