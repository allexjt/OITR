var Splash = function (game) {},
	playSound = true,
	playMusic = true,
	music;

Splash.prototype = {
	loadScripts: function () {
		game.load.script('WebFont', 'js/webfontloader.js');
		game.load.script('GameMenu', 'js/GameMenu.js');
		game.load.script('Game', 'js/Game.js');
		game.load.script('HowToPlay', 'js/HowToPlay.js');
		game.load.script('Credits', 'js/Credits.js');
		game.load.script('GameIntro', 'js/GameIntro.js');
		game.load.script('GameOver', 'js/GameOver.js');
	},

	loadBgm: function () {
		game.load.audio('mainTheme', 'assets/Music/Music_mellow.wav');
		game.load.audio('button1', 'assets/SFX/Button1.wav');
		game.load.audio('button2', 'assets/SFX/Button2.wav');
		game.load.audio('button3', 'assets/SFX/Button3.wav');
		game.load.audio('button4', 'assets/SFX/Button4.wav');
		game.load.audio('button5', 'assets/SFX/Button5.wav');
		game.load.audio('drop1', 'assets/SFX/Drop1.wav');
		game.load.audio('drop2', 'assets/SFX/Drop2.wav');
		game.load.audio('drop3', 'assets/SFX/Drop3.wav');
		game.load.audio('drop4', 'assets/SFX/Drop4.wav');
		game.load.audio('drop5', 'assets/SFX/Drop5.wav');
		game.load.audio('step1', 'assets/SFX/Step1.wav');
		game.load.audio('step2', 'assets/SFX/Step2.wav');
		game.load.audio('step3', 'assets/SFX/Step3.wav');
		game.load.audio('step4', 'assets/SFX/Step4.wav');
		game.load.audio('step5', 'assets/SFX/Step5.wav');
		game.load.audio('door', 'assets/SFX/door2.wav');
	},

	loadImages: function () {
	   game.load.image('street_bg', 'assets/BG/background.png');
	   game.load.image('apartment', 'assets/Sprites/apartment.png');
	   game.load.spritesheet('wet_meter', 'assets/UI/wet_meter_sheet.png', 40, 6, 21);
	   game.load.spritesheet('player', 'assets/Sprites/player_sheet.png', 59, 74, 9);
	   game.load.spritesheet('gf', 'assets/Sprites/gf_sheet.png', 43, 60, 10);
	   game.load.spritesheet('raindrop', 'assets/Sprites/raindrop_sheet.png', 26, 10, 5);
	   game.load.spritesheet('credit_button', 'assets/UI/credit_button_sheet.png', 64, 30, 3);
	   game.load.spritesheet('htp_button', 'assets/UI/htp_button_sheet.png', 64, 30, 3);
	   game.load.spritesheet('start_button', 'assets/UI/start_button_sheet.png', 64, 30, 3);
	   game.load.spritesheet('how_to', 'assets/UI/howto_sheet.png', 120, 45, 3);
	   game.load.spritesheet('back_button', 'assets/UI/back_button_sheet.png', 64, 30, 3);
	},

	loadFonts: function () {
		WebFontConfig = {
			custom: {
				families: ['PressStart2P', 'VT323'],
				urls: ['style/pressstart2p.css', 'style/vt323.css']
			}
		}
	},

	init: function () {
		//Set up BG
	    this.bg = game.add.tileSprite(0, 0, 800, 600, 'bg');
	    this.bg.scale.setTo(2.5,2.5);
		this.loadingBar = game.make.sprite(game.world.centerX-(387/2), 400, "loading");
		this.oitrLogo = game.make.sprite(game.world.centerX, 200, 'oitr_title');
		this.oitrLogo.scale.setTo(2, 2);
		this.status = game.make.text(game.world.centerX, 380, 'Loading...', {fill: 'white', font: '20pt VT323'});
		utils.centerGameObjects([this.oitrLogo, this.status]);
	},

	preload: function () {
		game.add.existing(this.bg);
		game.add.existing(this.oitrLogo);
		game.add.existing(this.loadingBar);
		game.add.existing(this.status);
		this.load.setPreloadSprite(this.loadingBar);
		this.loadScripts();
		this.loadImages();
		this.loadFonts();
		this.loadBgm();
	},

	addGameStates: function () {
		game.state.add('GameMenu', GameMenu);
		game.state.add('Game', Game);
		game.state.add('HowToPlay', HowToPlay);
		game.state.add('Credits', Credits);
		game.state.add('GameIntro', GameIntro);
		game.state.add('GameOver', GameOver);
	},

	addGameMusic: function () {
		music = game.add.audio('mainTheme');
		music.loop = true;
		music.play();
	},

	create: function () {
		this.status.setText('Ready!', {fill: 'white', font: '20pt VT323'});
		this.addGameMusic();
		this.addGameStates();

		setTimeout(function () {
			game.state.start('GameMenu');
		}, 500);
	},
};