var Game = function(game) {};

var score = 0;
var wetHits = 0;

Game.prototype = {
	preload: function () {
		game.add.existing(this.bg);
		game.add.existing(this.bg_scene);
		game.add.existing(this.player);	
		game.add.existing(this.wetMeter);
		game.physics.arcade.enable([this.player, this.gf]);
		this.player.body.allowGravity = false;
		this.gf.body.allowGravity = false;
	},

	create: function () {
		this.createRaindropA();
		this.createRaindropB();
		this.player.bringToTop();
	},

	init: function () {
		wetHits = 0;
		score = 0;
		this.bg = game.add.tileSprite(0, 0, 800, 600, 'bg');
	    this.bg.scale.setTo(2.5,2.5);
	    this.bg_scene = game.add.sprite(-15, 30, 'street_bg');
	    this.bg_scene.scale.setTo(1.9,1.9);
	    this.apartment = game.add.sprite(0, 144, 'apartment');
	    this.apartment.scale.setTo(1.9, 1.9);
	    this.player = game.add.sprite(125, 600-110, 'player');
	    this.player.scale.setTo(1.5, 1.5);
	    this.player.animations.add('stand', [0], 30);
	    this.player.animations.add('walk', [1,2,3,4,5,6,7], 30);
	    this.player.animations.add('hit', [8], 30);
	    this.player.animations.play('walk', 8 , true);
	    //Set up GF sprite
	    //gf = new GF(game, 400-90, 600-128, 50);
	    this.gf = game.add.sprite(180, 600-90, 'gf');
	    this.gf.scale.setTo(1.5, 1.5);
	    this.gf.animations.add('stand', [0], 30);
	    this.gf.animations.add('hit', [9], 30);
	    this.gf.animations.add('walk', [1,2,3,4,5,6,7,8], 30);
	    this.gf.animations.play('stand', 12 ,true);
	    this.wetMeter = game.add.sprite(12, 12, 'wet_meter');
	    this.wetMeter.scale.setTo(3,3);
	    this.wetMeter.animations.add('0', [20], 30);
	    this.wetMeter.animations.add('1', [19], 30);
	    this.wetMeter.animations.add('2', [18], 30);
	    this.wetMeter.animations.add('3', [17], 30);
	    this.wetMeter.animations.add('4', [16], 30);
	    this.wetMeter.animations.add('5', [15], 30);
	    this.wetMeter.animations.add('6', [14], 30);
	    this.wetMeter.animations.add('7', [13], 30);
	    this.wetMeter.animations.add('8', [12], 30);
	    this.wetMeter.animations.add('9', [11], 30);
	    this.wetMeter.animations.add('10', [10], 30);
	    this.wetMeter.animations.add('11', [9], 30);
	    this.wetMeter.animations.add('12', [8], 30);
	    this.wetMeter.animations.add('13', [7], 30);
	    this.wetMeter.animations.add('14', [6], 30);
	    this.wetMeter.animations.add('15', [5], 30);
	    this.wetMeter.animations.add('16', [4], 30);
	    this.wetMeter.animations.add('17', [3], 30);
	    this.wetMeter.animations.add('18', [2], 30);
	    this.wetMeter.animations.add('19', [1], 30);
	    this.wetMeter.animations.add('20', [0], 30);
	    this.wetMeter.animations.play(wetHits.toString(), 8, true);
	    this.footstepA = game.add.audio('step1');
	    this.footstepB = game.add.audio('step2');
	    this.footstepC = game.add.audio('step3');
	    this.footstepD = game.add.audio('step4');
	    this.footstepE = game.add.audio('step5');
	    this.dripA = game.add.audio('drop1');
	    this.dripB = game.add.audio('drop2');
	    this.dripC = game.add.audio('drop3');
	    this.dripD = game.add.audio('drop4');
	    this.dripE = game.add.audio('drop5');
	    this.gfForward = true;
	    this.scoreHeader = game.add.text((800-100), 12, 'Score: ' + score, {fill: 'white', font: '24px VT323'});
	},

	update: function() {
		game.physics.arcade.overlap(this.player, this.raindropA, this.catchRaindropA, null, this);
		game.physics.arcade.overlap(this.player, this.raindropB, this.catchRaindropB, null, this);
		game.physics.arcade.overlap(this.gf, this.raindropA, this.hitRaindropA, null, this);
		game.physics.arcade.overlap(this.gf, this.raindropB, this.hitRaindropB, null, this);
		this.raindropA.y += 5;
        if (this.raindropA.y >= (this.game.config.height-20)) {
        	this.raindropA.animations.play('destroy', 10, true);
        	this.playDripSound();
        	var _this = this;
        	setTimeout(function () {
				_this.raindropA.destroy();
				_this.createRaindropA();
        	}, 500);
        }
        this.raindropB.y += 5;
        if (this.raindropB.y >= (this.game.config.height-20)) {
        	this.raindropB.animations.play('destroy', 10, true);
        	this.playDripSound();
        	var _this = this;
        	setTimeout(function () {
				_this.raindropB.destroy();
				_this.createRaindropB();
        	}, 500);
        }
	 	if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
	       {
	       	this.playFootSound();
	     	if(this.player.x >= (0+90)) {
	     		if(this.player.scale.x > 0) {
	     			this.player.scale.x *= -1;
	     		}
	     		this.player.animations.play('walk', 8, true);
	     		this.player.x -= 4;
	     	}
	    }
	     else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
	    {
	    	this.playFootSound();
	     	if(this.player.x <= (800-this.player.width)) {
	     		if(this.player.scale.x < 0) {
	     			this.player.scale.x *= -1;
	     		}
	     		this.player.animations.play('walk', 8, true);
	     		this.player.x += 4;
	     	}
	    }
	     else {
	     		this.player.animations.play('stand', 8, true);
	     }
	     if(this.gfForward == true) {
	     		if(this.gf.scale.x < 0) {
	     			this.gf.scale.x *= -1;
	     		}
	     		this.gf.animations.play('walk', 8, true);
	     		this.gf.x += 3;
	     		if(this.gf.x >= (800-this.gf.width)) {
	     			this.gfForward = false;
	     		}
	     }
	     else  {
	     		if(this.gf.scale.x > 0) {
	     			this.gf.scale.x *= -1;
	     		}
	     		this.gf.animations.play('walk', 8, true);
	     		this.gf.x -= 3;
	     		if(this.gf.x <= (this.gf.width+120)) {
	     			this.gfForward = true;
	     		}
	     }
	     this.scoreHeader.setText('Score: ' + score);
	     this.wetMeter.animations.play(wetHits.toString(), 8, true);
	     if(wetHits >= 20) {
	     	game.state.start('GameOver', false, false, score);
	     }
    },

    createRaindropA: function() {
        this.raindropA = this.make.sprite(game.rnd.integerInRange(10, 790), -(game.rnd.integerInRange(50, 500)), 'raindrop');
        this.raindropA.scale.setTo(2,2);
        game.physics.arcade.enable([this.raindropA]);
		this.raindropA.body.allowGravity = false;
        this.raindropA.animations.add('normal', [0], 30);
        this.raindropA.animations.add('destroy', [1, 2, 3, 4], 30);
        game.add.existing(this.raindropA);
        this.raindropA.animations.play('normal', 8, true);
    },

    catchRaindropA: function() {
    	this.raindropA.animations.play('destroy', 10, true);
    	this.playDripSound();
    	this.raindropA.destroy();
    	score += 1;
    	var _this = this;
    	setTimeout(function () {
			_this.createRaindropA();
        }, 500);
    },

    hitRaindropA: function() {
    	this.raindropA.animations.play('destroy', 10, true);
    	this.player.animations.play('hit', 8, true);
    	this.gf.animations.play('hit', 8, true);
    	this.playDripSound();
    	this.raindropA.destroy();
    	wetHits += 4;
    	var _this = this;
    	setTimeout(function () {
			_this.createRaindropA();
        }, 500);
    },

    createRaindropB: function() {
        this.raindropB = this.make.sprite(game.rnd.integerInRange(10, 790), -(game.rnd.integerInRange(50, 500)), 'raindrop');
        this.raindropB.scale.setTo(2,2);
        game.physics.arcade.enable([this.raindropB]);
		this.raindropB.body.allowGravity = false;
        this.raindropB.animations.add('normal', [0], 30);
        this.raindropB.animations.add('destroy', [1, 2, 3, 4], 30);
        game.add.existing(this.raindropB);
        this.raindropB.animations.play('normal', 8, true);
    },

    catchRaindropB: function() {
    	this.raindropB.animations.play('destroy', 10, true);
    	this.playDripSound();
    	this.raindropB.destroy();
    	score += 1;
    	var _this = this;
    	setTimeout(function () {
			_this.createRaindropB();
        }, 500);
    },

    hitRaindropB: function() {
    	this.raindropB.animations.play('destroy', 10, true);
    	this.player.animations.play('hit', 8, true);
    	this.gf.animations.play('hit', 8, true);
    	this.playDripSound();
    	this.raindropB.destroy();
    	wetHits += 4;
    	var _this = this;
    	setTimeout(function () {
			_this.createRaindropB();
        }, 500);
    },

    playFootSound: function() {
    	var randNum = game.rnd.integerInRange(1, 5);
    	if(!this.footstepA.isPlaying && !this.footstepB.isPlaying && !this.footstepC.isPlaying && !this.footstepD.isPlaying && !this.footstepE.isPlaying){
    		switch(randNum){
    			case 1:
    				this.footstepA.play();
    				break;
    			case 2:
    				this.footstepB.play();
    				break;
    			case 3: 
    				this.footstepC.play();
    				break;
    			case 4:
    				this.footstepD.play();
    				break;
    			case 5:
    				this.footstepE.play();
    		}
    	}
    },

    playDripSound: function() {
    	var randNum = game.rnd.integerInRange(1, 5);
    	if(!this.dripA.isPlaying && !this.dripB.isPlaying && !this.dripC.isPlaying && !this.dripD.isPlaying && !this.dripE.isPlaying){
			switch(randNum){
				case 1:
					this.dripA.play();
					break;
				case 2:
					this.dripB.play();
					break;
				case 3: 
					this.dripC.play();
					break;
				case 4:
					this.dripD.play();
					break;
				case 5:
					this.dripE.play();
			}
		}
    }
};