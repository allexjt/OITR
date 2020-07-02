var Credits = function(game) {};

Credits.prototype = {
	preload: function () {
		game.add.existing(this.bg);
		game.add.existing(this.player);	
        game.add.existing(this.creditsTitle);
        game.add.existing(this.teamTitle);
        game.add.existing(this.team1Title);
        game.add.existing(this.team2Title);
        game.add.existing(this.team3Title);
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
        this.creditsTitle = game.add.text(game.world.centerX, 100, 'Credits', {fill: 'white', font: '26px PressStart2P'});
        this.teamTitle = game.add.text(game.world.centerX, 200, "The 'Out In The Rain' Team", {fill: 'white', font: ' 24px VT323'});
        this.team1Title = game.add.text(game.world.centerX, 250, 'Art & Design: Xiem', {fill: 'white', font: ' 24px VT323'});
        this.team2Title = game.add.text(game.world.centerX, 280, 'Music: Ira Lobanok & Gabriel Rangel', {fill: 'white', font: ' 24px VT323'});
        this.team3Title = game.add.text(game.world.centerX, 310, 'Code: Jacob Allex', {fill: 'white', font: ' 24px VT323'});
        this.backText = game.add.text(game.world.centerX, 360, 'Back', {fill: 'white', font: ' 24px VT323'});
        this.backText.inputEnabled = true;
        utils.centerGameObjects([this.creditsTitle, this.teamTitle, this.team1Title, this.team2Title, this.team3Title, this.backText]);
	},

	update: function() {
    }
};