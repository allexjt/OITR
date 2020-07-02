var GameIntro = function(game) {};

GameIntro.prototype = {
	preload: function () {
		game.add.existing(this.bg);
		game.add.existing(this.bg_scene);
		game.add.existing(this.player);	
		game.add.existing(this.wetMeter);
		this.player.animations.play('walk', 8, true);
		this.gf.animations.play('walk', 8, true);
		game.physics.arcade.enable([this.player, this.gf]);
		this.player.body.allowGravity = false;
		this.gf.body.allowGravity = false;
		game.physics.arcade.moveToXY(this.gf, 180, 510, 10, 1500);
		game.physics.arcade.moveToXY(this.player, 125, 490, 10, 1500);
		var player = this.player;
		var gf = this.gf;
		setTimeout(function () {
			gf.body.velocity.x = 0;
			player.body.velocity.x = 0;
			gf.animations.play('stand', 8, true);
			player.animations.play('stand', 8, true);
			game.state.start('Game');
		}, 1500);
	},

	create: function () {
		this.player.bringToTop();
	},

	init: function () {
		this.bg = game.add.tileSprite(0, 0, 800, 600, 'bg');
	    this.bg.scale.setTo(2.5,2.5);
	    this.bg_scene = game.add.sprite(-15, 30, 'street_bg');
	    this.bg_scene.scale.setTo(1.9,1.9);
	    this.apartment = game.add.sprite(0, 144, 'apartment');
	    this.apartment.scale.setTo(1.9, 1.9);
	    this.player = game.add.sprite(-50, 600-110, 'player');
	    this.player.scale.setTo(1.5, 1.5);
	    this.player.animations.add('stand', [0], 30);
	    this.player.animations.add('walk', [1,2,3,4,5,6,7], 30);
	    this.player.animations.play('walk', 8 , true);
	    //Set up GF sprite
	    this.gf = game.add.sprite(-20, 600-90, 'gf');
	    this.gf.scale.setTo(1.5, 1.5);
	    this.gf.animations.add('stand', [0], 30);
	    this.gf.animations.add('walk', [1,2,3,4,5,6,7,8], 30);
	    this.gf.animations.play('walk', 12 ,true);
	    this.wetMeter = game.add.sprite(12, 12, 'wet_meter');
	    this.wetMeter.scale.setTo(3,3);
	    this.wetMeter.animations.add('100p', [20], 30);
	    this.wetMeter.animations.play('100p', 8, true);
	    this.score = game.add.text((800-100), 12, 'Score: 0', {fill: 'white', font: '24px VT323'});
	},

	update: function() {
    }
};