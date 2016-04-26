var Title = function() {};

var start;

Title.prototype = {

	create: function() {

		game.add.sprite(0, 0, 'bg');

		var status = game.add.text(game.world.centerX, 100, 'Galaxy Wars', {
			font: '64px ka1',
			fill: '#ffffff'
		});
		status.anchor.set(0.5);

		start = game.add.button(game.world.centerX, 300, 'button', onStartClick, this, 'start', 'start', 'start');
		start.anchor.set(0.5);

	},

	onStartClick: function() {
		console.log("Start clicked");
	}

};