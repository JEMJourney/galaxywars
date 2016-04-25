var Splash = function() {};

Splash.prototype = {

	loadScripts: function() {

	},

	loadImages: function() {

	},

	preload: function() {
		

		var loadingBar = game.add.sprite(game.world.centerX, 400, "loading");
		loadingBar.

		var status = game.add.text(game.world.centerX, 380, 'Loading....', {
			fill: '#ffffff'
		});

		this.load.setPreloadSprite(loadingBar);

		this.loadScripts();
		this.loadImages();

	}

};