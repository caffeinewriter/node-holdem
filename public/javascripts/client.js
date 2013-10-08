$(document).foundation();
var socket = io.connect();
// var Player = function () {
// 	this.name = prompt("Enter desired username:");
// 	socket.emit("newPlayer", this);
// };
// var you = new Player();

socket.on('playerList', function (players) {
	if (players.length < 6) {
		console.log("There's room at the table. Come play!");
		$('#join').prop("disabled", false);
	} else {
		console.log("No more space at the table. Sorry.");
	}
});