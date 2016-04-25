var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {

	preload: preload,
	create: create,
	update: update

});

function preload() {

	game.load.image('star', 'assets/star.png');
	game.load.image('sky', 'assets/sky.png');
	game.load.image('wall', 'assets/wall.png');

}

function create() {

	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0, 0, 'sky');

}

function update() {

}