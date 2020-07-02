var GameMenu = function(game) {};

GameMenu.prototype = {
	preload: function () {
		game.add.existing(this.bg);
		game.add.existing(this.player);
		game.add.existing(this.oitrLogo);
		game.add.existing(this.startButton);
		game.add.existing(this.htpButton);
		game.add.existing(this.creditButton);	
	},

	create: function () {
		var buttonSound = game.add.audio('button3');
		var doorSound = game.add.audio('door');
		var player = this.player;
		this.startButton.events.onInputOver.add(function (target) {
			target.animations.play('hover', 8, true);
		});
		this.htpButton.events.onInputOver.add(function (target) {
			target.animations.play('hover', 8, true);
		});
		this.creditButton.events.onInputOver.add(function (target) {
			target.animations.play('hover', 8, true);
		});
		this.startButton.events.onInputOut.add(function (target) {
			target.animations.play('normal', 8, true);
		});
		this.htpButton.events.onInputOut.add(function (target) {
			target.animations.play('normal', 8, true);
		});
		this.creditButton.events.onInputOut.add(function (target) {
			target.animations.play('normal', 8, true);
		});
		this.startButton.events.onInputDown.add(function (target) {
			target.animations.play('click', 8, true);
		});
		this.htpButton.events.onInputDown.add(function (target) {
			target.animations.play('click', 8, true);
		});
		this.creditButton.events.onInputDown.add(function (target) {
			target.animations.play('click', 8, true);
		});
		this.startButton.events.onInputUp.add(function (target) {
			target.animations.play('normal', 8, true);
			buttonSound.play();
			player.animations.play('walk', 8, true);
			game.physics.arcade.enable([player]);
			player.body.allowGravity = false;
			game.physics.arcade.moveToXY(player, 850, 490, 10, 3000);
			setTimeout(function () {
				doorSound.play();
				game.state.start('GameIntro');
			}, 3000);
		});
		this.htpButton.events.onInputUp.add(function (target) {
			target.animations.play('normal', 8, true);
			buttonSound.play();
			game.state.start('HowToPlay');
		});
		this.creditButton.events.onInputUp.add(function (target) {
			target.animations.play('normal', 8, true);
			buttonSound.play();
			game.state.start('Credits');
		});
		this.player.bringToTop();
	},

	init: function () {
		this.bg = game.add.tileSprite(0, 0, 800, 600, 'bg');
	    this.bg.scale.setTo(2.5,2.5);
	    this.oitrLogo = game.make.sprite(game.world.centerX, 200, 'oitr_title');
	    this.oitrLogo.scale.setTo(2, 2);
	    this.player = game.add.sprite(125, 600-110, 'player');
	    this.player.scale.setTo(1.5, 1.5);
	    this.player.animations.add('stand', [0], 30);
	    this.player.animations.add('walk', [1,2,3,4,5,6,7], 30);
	    this.player.animations.play('stand', 8, true);
	    this.startButton = game.make.sprite(game.world.centerX, 375, 'start_button');
	    this.startButton.scale.setTo(2,2);
	    this.startButton.animations.add('normal', [0], 30);
	    this.startButton.animations.add('hover', [1], 30);
	    this.startButton.animations.add('click', [2], 30);
	    this.startButton.animations.play('normal', 8, true);
	    this.startButton.inputEnabled = true;
	    this.htpButton = game.make.sprite(game.world.centerX, 450, 'htp_button');
	    this.htpButton.scale.setTo(2,2);
	    this.htpButton.animations.add('normal', [0], 30);
	    this.htpButton.animations.add('hover', [1], 30);
	    this.htpButton.animations.add('click', [2], 30);
	    this.htpButton.animations.play('normal', 8, true);
	    this.htpButton.inputEnabled = true;
	    this.creditButton = game.make.sprite(game.world.centerX, 525, 'credit_button');
	    this.creditButton.scale.setTo(2,2);
	    this.creditButton.animations.add('normal', [0], 30);
	    this.creditButton.animations.add('hover', [1], 30);
	    this.creditButton.animations.add('click', [2], 30);
	    this.creditButton.animations.play('normal', 8, true);
	    this.creditButton.inputEnabled = true;
		utils.centerGameObjects([this.oitrLogo, this.startButton, this.htpButton, this.creditButton]);
	},

	update: function() {
    }
};