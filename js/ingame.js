var InGame = function() {};

InGame.prototype = {


	create: function() {
		

		var loadingBar = game.add.sprite(game.world.centerX - 200, 400, "loading");

		var status = game.add.text(game.world.centerX, game.world.centerY, 'Hallo Welt!', {
			fill: '#ffffff'
		});


	}

};