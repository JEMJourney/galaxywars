var Splash = function() {};

Splash.prototype = {

	loadScripts: function() {

		game.load.script('ingame', 'js/ingame.js');
		game.load.script('title', 'js/title.js');
		game.load.script('WebFont', 'js/webfontloader.js');
		
	},

	loadImages: function() {

		game.load.image('ship', 'assets/ship.png');
		game.load.atlas('button', 'assets/buttons.png', 'assets/buttons.json');

	},

	loadSounds: function() {

		game.load.audio('buttonClick', 'assets/sound/select.wav');

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

		game.add.sprite(0, 0, 'bg');

		var status = game.add.text(game.world.centerX, game.world.centerY, 'Loading....', {
			font: '64px',
			fill: '#ffffff'
		});
		status.anchor.set(0.5);

		this.loadScripts();
		this.loadImages();
		this.loadFonts();
		this.loadSounds();

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