var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {

	preload: preload,
	create: create,
	update: update

});

var platforms;
var player;
var stars;

var score = 0;
var scoreText;

var cursors;

function preload() {

	game.load.image('star', 'assets/star.png');
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/ground.png');
	game.load.image('player', 'assets/player.png');

}

function create() {

	cursors = game.input.keyboard.createCursorKeys();

	game.physics.startSystem(Phaser.Physics.ARCADE);

	//Background
	game.add.sprite(0, 0, 'sky');

	//Platforms
	platforms = game.add.group();

	platforms.enableBody = true;

	var ground = platforms.create(0, game.world.height - 64, 'ground');

	ground.scale.setTo(2, 2);

	ground.body.immovable = true;

	var ledge = platforms.create(400, 400, 'ground');

	ledge.body.immovable = true;

	ledge = platforms.create(-150, 250, 'ground');

	ledge.body.immovable = true;

	//Stars
	stars = game.add.group();
	stars.enableBody = true;

	for (var i = 0; i < 12; i++) {
		
		var star = stars.create(i * 70, 0, 'star');

		star.body.gravity.y = 300;

		star.body.bounce.y = 0.7 + Math.random() * 0.2;

	}

	//Player
	player = game.add.sprite(32, game.world.height - 150, 'player');

	game.physics.arcade.enable(player);

	player.body.bounce.y = 0;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;

	//Score display

	scoreText = game.add.text(16, 16, 'Score: 0', {
		fontSize: '32px',
		fill: '#000'
	});

}

function update() {

	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(stars, platforms);

	game.physics.arcade.overlap(player, stars, collectStar, null, this);

	player.body.velocity.x = 0;

	if(cursors.left.isDown) {
		player.body.velocity.x = -150;
	} else if(cursors.right.isDown) {
		player.body.velocity.x = 150;
	}

	if(cursors.up.isDown && player.body.touching.down) {
		player.body.velocity.y = -350;
	}

}

function collectStar(player, star) {

	star.kill();

	score += 10;
	scoreText.text = 'Score: ' + score; 

}