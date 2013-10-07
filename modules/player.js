module.exports = function(socket, name) {
	this.name = name;
	this.socket = socket;
	this.bank = 1000;
};