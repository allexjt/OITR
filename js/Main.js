var conf = {
	width: 800,
	height: 600,
	renderer: Phaser.AUTO,
	antialias: false
};

var game = new Phaser.Game(conf), Main = function () {};

Main.prototype = {
	//var player, gf;
	
	preload: function() {
	   //Load BG and sprites
	   game.load.image('loading', 'assets/UI/loading.png');
	   game.load.image('oitr_title', 'assets/UI/oitr_title.png');
	   game.load.image('bg', 'assets/BG/bg.png');
	   game.load.script('utils', 'js/utils.js');
	   game.load.script('Splash', 'js/splash.js');
	},

	create: function() {
	   game.state.add('Splash',  Splash);
	   game.state.start('Splash');

	   //Activate physics engine
	   game.physics.startSystem(Phaser.Physics.ARCADE);
	}
};

game.state.add('Main', Main);
game.state.start('Main');
