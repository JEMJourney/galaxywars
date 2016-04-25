var game = new Phaser.Game(800, 600, Phaser.AUTO, 'galaxywars');

game.scale.pageAlignHorizontally = true;
game.scale.pageAlignVertically = true;
game.scale.refresh();

var Main = function() {};

Main.prototype = {

	preload: function() {
		game.load.image('bgloading', 'assets/backgroundloading.png');
		game.load.image('loading', 'assets/loading.png');
		game.load.script('splash', 'js/splash.js');
		game.load.script("webfont", "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js");
	},

	create: function() {
		game.state.add('Splash', Splash);
		game.state.start('Splash');
	}

};

game.state.add('Main', Main);
game.state.start('Main');