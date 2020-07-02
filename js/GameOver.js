var GameOver = function(game) {};

GameOver.prototype = {
	preload: function () {
		game.add.existing(this.bg);
		game.add.existing(this.bg_scene);
	},

	create: function () {
		var buttonSound = game.add.audio('button3');
		this.replayText.events.onInputUp.add(function (target) {
            buttonSound.play();
            game.state.start('GameIntro');
        });
        this.menuText.events.onInputUp.add(function (target) {
            buttonSound.play();
            game.state.start('GameMenu');
        });
	},

	init: function (score) {
		this.score = score;
		this.bg = game.add.tileSprite(0, 0, 800, 600, 'bg');
	    this.bg.scale.setTo(2.5,2.5);
	    this.bg_scene = game.add.sprite(-15, 30, 'street_bg');
	    this.bg_scene.scale.setTo(1.9,1.9);
	    this.apartment = game.add.sprite(0, 144, 'apartment');
	    this.apartment.scale.setTo(1.9, 1.9);
	    this.gameOver = game.add.text(game.world.centerX, 200, 'Game Over', {fill: 'white', font: '26px PressStart2P'});
	    this.scoreHeader = game.add.text(game.world.centerX, 250, 'Score: ' + this.score, {fill: 'white', font: '24px VT323'});
	    this.replayText = game.add.text(game.world.centerX, 300, 'Replay', {fill: 'white', font: ' 24px VT323'});
        this.replayText.inputEnabled = true;
        this.menuText = game.add.text(game.world.centerX, 350, 'Main Menu', {fill: 'white', font: ' 24px VT323'});
        this.menuText.inputEnabled = true;
	    utils.centerGameObjects([this.gameOver, this.scoreHeader, this.replayText, this.menuText]);
	},

	update: function() {
    }
};