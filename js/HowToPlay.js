var HowToPlay = function(game) {};

HowToPlay.prototype = {
	preload: function () {
		game.add.existing(this.bg);
		game.add.existing(this.player);	
        game.add.existing(this.howToPlayTitle);
        game.add.existing(this.controlsImage);
        game.add.existing(this.instruction1);
        game.add.existing(this.instruction2);
        game.add.existing(this.instruction3);
        game.add.existing(this.backText);
	},

	create: function () {
        var buttonSound = game.add.audio('button3');
		this.player.bringToTop();
        this.backText.events.onInputUp.add(function (target) {
            buttonSound.play();
            game.state.start('GameMenu');
        });
	},

	init: function () {
		this.bg = game.add.tileSprite(0, 0, 800, 600, 'bg');
	    this.bg.scale.setTo(2.5,2.5);
	    this.player = game.add.sprite(125, 600-110, 'player');
	    this.player.scale.setTo(1.5, 1.5);
	    this.player.animations.add('stand', [0], 30);
	    this.player.animations.add('walk', [1,2,3,4,5,6,7], 30);
	    this.player.animations.play('stand', 8, true);
        this.controlsImage = game.add.sprite(game.world.centerX, 200, 'how_to');
        this.controlsImage.animations.add('cycle', [0,1,0,2], 30);
        this.controlsImage.animations.play('cycle', 4, true);
        this.rainImage = game.add.sprite(game.world.centerX, 300, 'raindrop');
        this.rainImage.animations.add('cycle', [0,1,2,3,4], 30);
        this.rainImage.animations.play('cycle', 4, true);
        this.rainImage.scale.setTo(2, 2);
        this.gfImage = game.add.sprite(game.world.centerX, 425, 'gf');
        this.gfImage.animations.add('stand', [0], 30);
        this.gfImage.animations.play('stand', 1, true);
        this.gfImage.scale.setTo(1.5, 1.5);
        this.howToPlayTitle = game.add.text(game.world.centerX, 100, 'How To Play', {fill: 'white', font: '26px PressStart2P'});
        this.instruction1 = game.add.text(game.world.centerX, 150, 'Use the left and right arrow keys to move.', {fill: 'white', font: ' 20px VT323'});
        this.instruction2 = game.add.text(game.world.centerX, 250, 'Stop raindrops to collect points.', {fill: 'white', font: ' 20px VT323'});
        this.instruction3 = game.add.text(game.world.centerX, 350, "Don't let your girlfriend get hit by the rain!", {fill: 'white', font: ' 20px VT323'});
        this.backText = game.add.text(game.world.centerX, 500, 'Back', {fill: 'white', font: ' 24px VT323'});
        this.backText.inputEnabled = true;
        utils.centerGameObjects([this.howToPlayTitle, this.controlsImage, this.rainImage, this.gfImage, this.instruction1, this.instruction2, this.instruction3, this.backText]);
	},

	update: function() {
    }
};