var Splash = function() {};

Splash.prototype = {

	loadScripts: function() {

		game.load.script('splash', 'js/splash.js');

	},

	loadImages: function() {

		game.load.image('ship', 'assets/ship.png');
		game.load.image('bg', 'assets/bg.png');

	},

	preload: function() {
		

		game.add.sprite(0, 0, 'bgloading');

		var status = game.add.text(game.world.centerX, game.world.centerY, 'Loading....', {
			fill: '#ffffff'
		});


	},

	loadGameStates: function() {
		game.state.add('InGame', InGame);
	},

	create: function() {
		this.loadGameStates();
		
		setTimeout(function() {
			game.state.start('InGame');
		}, 3000);
	}

};