var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

var Main = function() {};

Main.prototype = {

	preload: function() {
		game.load.image('bgloading', 'assets/backgroundloading.png');
		game.load.image('loading', 'assets/loading.png');
		game.load.script('splash', 'js/splash.js');
	},

	create: function() {
		game.state.add('Splash', Splash);
		game.state.start('Splash');
	}

};

game.state.add('Main', Main);
game.state.start('Main');