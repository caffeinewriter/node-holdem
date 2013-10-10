module.exports = function() {
	var poker = {};

	poker.startGame = function () {
		var more = true;
		while(more) {
			more = "no";
			if (more == "y" || more == "Yes" || more == "yes") {
				more = true;
			} else {
				more = false;
			}
		}
	};

	poker.drawCard = function () {
		// Random number between 1 and 52
		return 26;
	};

	return poker;
};

/*

A Single Hand
1. 

 */