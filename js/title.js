var Title = function() {};

Title.prototype = {


	create: function() {

		game.add.sprite(0, 0, 'bg');

		var status = game.add.text(game.world.centerX, game.world.centerY, 'Galaxy Wars', {
			font: '64px ka1',
			fill: '#ffffff'
		});
		status.anchor.set(0.5);


	}

};