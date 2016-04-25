var Splash = function() {};

Splash.prototype = {

	loadScripts: function() {

		game.load.script('ingame', 'js/ingame.js');
		game.load.script('title', 'js/title.js');
		
	},

	loadImages: function() {

		game.load.image('ship', 'assets/ship.png');

	},

	loadFonts: function() {

		game.load.script('WebFont', 'js/webfontloader.js');

		WebFontConfig = {
			custom: {
				families: ['ka1'],
				urls: ['assets/fonts/ka1.css']
			}
		};


	},

	preload: function() {

		game.add.sprite(0, 0, 'bg');

		this.loadFonts();

		var status = game.add.text(game.world.centerX, game.world.centerY, 'Loading....', {
			font: '64px ka1',
			fill: '#ffffff'
		});

		this.loadScripts();
		this.loadImages();

	},

	loadGameStates: function() {
		game.state.add('InGame', InGame);
		game.state.add('Title', Title);
	},

	create: function() {
		this.loadGameStates();
		
		setTimeout(function() {
			game.state.start('Title');
		}, 1000);
	}

};