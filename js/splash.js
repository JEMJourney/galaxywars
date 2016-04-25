var Splash = function() {};

Splash.prototype = {

	loadScripts: function() {

		game.load.script('ingame', 'js/ingame.js');
		game.load.script('ingame', 'js/title.js');
		game.load.script('WebFont', 'js/webfontloader.js');

	},

	loadImages: function() {

		game.load.image('ship', 'assets/ship.png');
		game.load.image('bg', 'assets/background.png');

	},

	loadFonts: function() {

		WebFontConfig = {
			custom: {
				families: ['ka1'],
				urls: ['assets/fonts/ka1.css']
			}
		};


	},

	preload: function() {

		game.add.sprite(0, 0, 'bgloading');

		var status = game.add.text(game.world.centerX, game.world.centerY, 'Loading....', {
			fill: '#ffffff'
		});

		this.loadScripts();
		this.loadImages();
		this.loadFonts();

	},

	loadGameStates: function() {
		game.state.add('InGame', InGame);
		game.state.add('Title', Title);
	},

	create: function() {
		this.loadGameStates();
		
		setTimeout(function() {
			game.state.start('Title');
		}, 3000);
	}

};