var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {

	preload: preload,
	create: create,
	update: update

});

var platforms;
var player;

function preload() {

	game.load.image('star', 'assets/star.png');
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/ground.png');
	game.load.image('player', 'assets/player.png');

}

function create() {

	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0, 0, 'sky');

	platforms = game.add.group();

	platforms.enableBody = true;

	var ground = platforms.create(0, game.world.height - 64, 'ground');

	ground.scale.setTo(2, 2);

	ground.body.immovable = true;

	var ledge = platforms.create(400, 400, 'ground');

	ledge.body.immovable = true;

	ledge = platforms.create(-150, 250, 'ground');

	ledge.body.immovable = true;

	player = game.add.sprite(32, game.world.height - 150, 'player');

	game.physics.arcade.enable(player);

	player.body.bounce.y = 0.2;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;

}

function update() {

}