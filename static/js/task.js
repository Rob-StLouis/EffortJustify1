/*
 * Requires:
 *     psiturk.js
 *     utils.js
 */

// Initalize psiturk object
var psiTurk = new PsiTurk(uniqueId, adServerLoc, mode);

var mycondition = condition;  // these two variables are passed by the psiturk server process
var mycounterbalance = counterbalance;  // they tell you which condition you have been assigned to
// they are not used in the stroop code but may be useful to you

// All pages to be loaded
var pages = [
	"instructions/instruct-1.html",
	"instructions/instruct-2.html",
	"instructions/instruct-3.html",
	"instructions/instruct-3Alt.html",
	//"instructions/instruct-ready.html",
	"stage.html",
	"stage2.html",
	"stage3.html",
	"MidInstructions.html",
	"postquestionnaire.html",
	"postquestionnaire2.html",
	"postquestionnaire3.html"
];

psiTurk.preloadPages(pages);

if (mycondition==="3"){
	var instructionPages = [ // add as a list as many pages as you like
		//"instructions/instruct-1.html",
		//"instructions/instruct-2.html",
		"instructions/instruct-3Alt.html"

		//"instructions/instruct-ready.html"
	];


}else {

	var instructionPages = [ // add as a list as many pages as you like
		//"instructions/instruct-1.html",
		//"instructions/instruct-2.html",
		"instructions/instruct-3.html"

		//"instructions/instruct-ready.html"
	];
}



window['PhaserGlobal'] = [];
window['PhaserGlobal'].disableAudio = true;


var gametime = "first";


function playgame() {


	//alert(mycondition);

	if (mycondition==="3"){

		currentview = new Questionnaire();
		return
	}



	//if(round===0){
		psiTurk.showPage('stage.html');
//	}else if (round===1){
//	psiTurk.showPage('stage2.html');
//}else{
//		psiTurk.showPage('stage3.html');
//	}
//
//	var el = document.getElementById('parent1');
//
//	while ( el.firstChild ) el.removeChild( el.firstChild );


	var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });



function preload() {

	game.load.image('sky', '/static/assets/sky.png');
	game.load.image('ground', '/static/assets/platform.png');
	game.load.image('star', '/static/assets/castle.png ');
	game.load.image('mond','/static/assets/mondrian.jpg ' );
	game.load.image('poll','/static/assets/pollock.jpg ' );
	game.load.spritesheet('dude','/static/assets/dude.png ', 32, 48);


	game.load.image('pic1','/static/assets/pic1.BMP' );game.load.image('pic2','/static/assets/pic2.BMP' );game.load.image('pic3','/static/assets/pic3.BMP' );game.load.image('pic4','/static/assets/pic4.BMP' );game.load.image('pic5','/static/assets/pic5.BMP' );game.load.image('pic6','/static/assets/pic6.BMP' );game.load.image('pic7','/static/assets/pic7.BMP' );game.load.image('pic8','/static/assets/pic8.BMP' );game.load.image('pic9','/static/assets/pic9.BMP' );game.load.image('pic10','/static/assets/pic10.BMP' );game.load.image('pic11','/static/assets/pic11.BMP' );game.load.image('pic12','/static/assets/pic12.BMP' );game.load.image('pic13','/static/assets/pic13.BMP' );game.load.image('pic14','/static/assets/pic14.BMP' );game.load.image('pic15','/static/assets/pic15.BMP' );game.load.image('pic16','/static/assets/pic16.BMP' );game.load.image('pic17','/static/assets/pic17.BMP' );game.load.image('pic18','/static/assets/pic18.BMP' );game.load.image('pic19','/static/assets/pic19.BMP' );game.load.image('pic20','/static/assets/pic20.BMP' );game.load.image('pic21','/static/assets/pic21.BMP' );game.load.image('pic22','/static/assets/pic22.BMP' );game.load.image('pic23','/static/assets/pic23.BMP' );game.load.image('pic24','/static/assets/pic24.BMP' );game.load.image('pic25','/static/assets/pic25.BMP' );game.load.image('pic26','/static/assets/pic26.BMP' );game.load.image('pic27','/static/assets/pic27.BMP' );game.load.image('pic28','/static/assets/pic28.BMP' );game.load.image('pic29','/static/assets/pic29.BMP' );game.load.image('pic30','/static/assets/pic30.BMP' );game.load.image('pic31','/static/assets/pic31.BMP' );game.load.image('pic32','/static/assets/pic32.BMP' );game.load.image('pic33','/static/assets/pic33.BMP' );game.load.image('pic34','/static/assets/pic34.BMP' );game.load.image('pic35','/static/assets/pic35.BMP' );game.load.image('pic36','/static/assets/pic36.BMP' );game.load.image('pic37','/static/assets/pic37.BMP' );game.load.image('pic38','/static/assets/pic38.BMP' );game.load.image('pic39','/static/assets/pic39.BMP' );game.load.image('pic40','/static/assets/pic40.BMP' );
	game.load.image('pic41','/static/assets/pic41.bmp' );game.load.image('pic42','/static/assets/pic42.bmp' );game.load.image('pic43','/static/assets/pic43.bmp' );game.load.image('pic44','/static/assets/pic44.bmp' );game.load.image('pic45','/static/assets/pic45.bmp' );game.load.image('pic46','/static/assets/pic46.bmp' );game.load.image('pic47','/static/assets/pic47.bmp' );game.load.image('pic48','/static/assets/pic48.bmp' );game.load.image('pic49','/static/assets/pic49.bmp' );game.load.image('pic50','/static/assets/pic50.bmp' );game.load.image('pic51','/static/assets/pic51.bmp' );game.load.image('pic52','/static/assets/pic52.bmp' );game.load.image('pic53','/static/assets/pic53.bmp' );game.load.image('pic54','/static/assets/pic54.bmp' );game.load.image('pic55','/static/assets/pic55.bmp' );game.load.image('pic56','/static/assets/pic56.bmp' );game.load.image('pic57','/static/assets/pic57.bmp' );game.load.image('pic58','/static/assets/pic58.bmp' );game.load.image('pic59','/static/assets/pic59.bmp' );game.load.image('pic60','/static/assets/pic60.bmp' )
}

var player;
var platforms;
var cursors;

var stars;
	var star;
var score = 0;
var scoreText;
	var allow_restart;
	var resultAct;
	var numberofpresses;

	var time_remaining = 240;
	var round = 0;

	var gameover = true;

	var lastSecond = false;

	var start_level_time;


	psiTurk.recordUnstructuredData("condition",mycondition);



	var p1= [.2,.5,.9,.2,.5,.9,.2,.5,.9,.2,.5,.9,
		     .2,.5,.9,.2,.5,.9,.2,.5,.9,.2,.5,.9,
		     .2,.5,.9,.2,.5,.9,.2,.5,.9,.2,.5,.9,
		     .2,.5,.9,.2,.5,.9,.2,.5,.9,.2,.5,.9,
		     .2,.5,.9,.2,.5,.9,.2,.5,.9,.2,.5,.9];


	var value1 = [100,100,100,100,100,100, 100,100,100,100,100,100,
		          200,200,200,200,200,200, 200,200,200,200,200,200,
		          300,300,300,300,300,300, 300,300,300,300,300,300,
		          400,400,400,400,400,400, 400,400,400,400,400,400,
		          500,500,500,500,500,500, 500,500,500,500,500,500];










	////var p= [.2,.2,.5,.9,.2,.5,.9,.2,.5,.9,.2,.9,.2,.5,.9,.2,.5,.9,.2,.5,
	////	.9,.3,.5,.9,.9,.9,.9,.2,.8,.9,.9,.9,.2,.2,.8,.9,.9,.2,.2,.8,
	////	.9,.3,.5,.9,.9,.9,.9,.2,.8,.9,.9,.9,.2,.2,.8,.9,.9,.2,.2,.8,
	////	.9,.3,.5,.9,.9,.9,.9,.2,.8,.9,.9,.9,.2,.2,.8,.9,.9,.2,.2,.8];
    //
	//var value = [100,500,300,100,400,100,400,300,100,500,100,400,300,100,500,100,400,300,100,500,
	//	100,500,300,100,400,100,400,300,100,500,100,400,300,100,500,100,400,300,100,500,
	//	100,500,300,100,400,100,400,300,100,500,100,400,300,100,500,100,400,300,100,500,
	//	100,500,300,100,400,100,400,300,100,500,100,400,300,100,500,100,400,300,100,500,
	//	100,500,300,100,400,100,400,300,100,500,100,400,300,100,500,100,400,300,100,500];

	var paintingtype=[];
	var setorder=[];


	var notwait = true;

	for (i = 1; i < 61; i++) {
		paintingtype.push(String("pic"+i));
		setorder.push(i-1);

	}

	setorder = _.shuffle(setorder);


	var p=[];
	var value=[];


	for (i = 0; i < 60; i++) {
		p.push(p1[setorder[i]]);
		value.push(value1[setorder[i]]);


	}

	paintingtype = _.shuffle(paintingtype);






	var paintValue = value.push();


	//var current_value = value.push();

	psiTurk.recordUnstructuredData("values",value);

	psiTurk.recordUnstructuredData("prob",p);

	psiTurk.recordUnstructuredData("paintType",paintingtype);
	psiTurk.recordUnstructuredData("setorder",setorder);



	function create() {
		if (gametime != "first"){
			return;
		}
		//alert("A"+value1);


	//  We're going to be using physics, so enable the Arcade Physics system
	game.physics.startSystem(Phaser.Physics.ARCADE);

	//  A simple background for our game
	game.add.sprite(0, 0, 'sky');

	//  The platforms group contains the ground and the 2 ledges we can jump on
	platforms = game.add.group();

	//  We will enable physics for any object that is created in this group
	platforms.enableBody = true;


	// Here we create the ground.
	var ground = platforms.create(0, game.world.height - 64, 'ground');

	//  Scale it to fit the width of the game (the original sprite is 400x32 in size)
	ground.scale.setTo(2, 2);

	//  This stops it from falling away when you jump on it
	ground.body.immovable = true;


	// The player and its settings
	player = game.add.sprite(32, game.world.height - 150, 'dude');

	//  We need to enable physics on the player
	game.physics.arcade.enable(player);

	//  Player physics properties. Give the little guy a slight bounce.
	player.body.bounce.y = 0.2;
	player.body.gravity.y = 3000;
	player.body.collideWorldBounds = true;

	//  Our two animations, walking left and right.
	player.animations.add('left', [0, 1, 2, 3], 10, true);
	player.animations.add('right', [5, 6, 7, 8], 10, true);

	//  Finally some stars to collect
	stars = game.add.group();

	//  We will enable physics for any star that is created in this group
	stars.enableBody = true;

	//  Here we'll create 12 of them evenly spaced apart
//    for (var i = 0; i < 12; i++)
//    {
	//  Create a star inside of the 'stars' group

	var heightStar = 258;
	//alert(round);




	//switch (round % 2){
	//	case 0:
	//		paint = 'mond';
	//		scaleP = .25;
	//		break;
	//	case 1:
	//		paint = "poll";
	//		scaleP = .15;
	//		break;
	//	//case 2:
	//	//	paint = 'mond';
	//	//	scaleP = .25;
	//	//	break;
	//	//case 3:
	//	//	paint = "poll";
	//	//	scaleP = .15;
	//	//	break;
	//	//case 4:
	//	//	paint = 'mond';
	//	//	scaleP = .25;
	//	//	break;
	//	//case 5:
	//	//	paint = "poll";
	//	//	scaleP = .15;
	//	//	break;
	//	//case 6:
	//	//	paint = 'mond';
     //   //
	//	//	scaleP = .25;
	//	//	break;
	//	//case 7:
	//	//	paint = "poll";
	//	//	scaleP = .15;
	//	//	break;
	//	//case 8:
	//	//	paint = 'mond';
	//	//	scaleP = .25;
	//	//	break;
    //
	//}

		scaleP = .75;


		paint = paintingtype.shift();

	star = stars.create(550, game.world.height - heightStar, paint);
	star.scale.setTo(scaleP,scaleP);

		numberofpresses = 0;






	//  Let gravity do its thing
	//star.body.gravity.y = 300;

	//  This just gives each star a slightly random bounce value
	//star.body.bounce.y = 0;
//    }

	// instructions
	instruct_text = game.add.text(16, 16, 'Press the right arrow key to move right', { fontSize: '32px', fill: '#000' });
		skip_instruct_text= game.add.text(16,45,"Press 's' to skip this room", { fontSize: '100px', fill: '#000' });






		score_text =  game.add.text(16, 75, 'Score: $'+score, { fontSize: '32px', fill: '#800' });
	//v_text = game.add.text(600, 300, '#300', {font: '30px Arial', fill: '#000'});

		time_remaining_text= game.add.text(16,105,"Time Remaining: "+time_remaining+" seconds", { fontSize: '100px', fill: '#000' });

		counter();





		//  Our controls.
	cursors = game.input.keyboard.createCursorKeys();

	allow_restart = true;


		paintValue = value.shift();
		//alert(value);
		paint_label =  game.add.text(600, 300, '$'+paintValue, { fontSize: '32px', fill: '#000' });



		start_level_time = new Date().getTime();

		notwait = true;



	}



	function update() {update:{
		if (gametime != "first"){

			break update;
			//alert("should");
		}

	//  Collide the player and the stars with the platforms
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(stars, platforms);
	game.physics.arcade.collide(platforms, platforms);

	//  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function

		if(allow_restart){
			game.physics.arcade.overlap(player, stars, got_painting);
		}


	//  Reset the players velocity (movement)
	player.body.velocity.x = 0;

	var flapKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	flapKey.onUp.add(moveright);

		dontIncrement = true;

		var flapKey2 = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		flapKey2.onDown.add(showright);

		dontIncrement = true;


	var skipGame = game.input.keyboard.addKey(Phaser.Keyboard.S);
	skipGame.onDown.add(function () {

		if(allow_restart){
			wait_screen();
			//console.log("pressed");
			resultAct = "skipped";
			allow_restart=false;


		}else{
			//console.log(allow_restart);
		}

	}, this);

		//var skipSection = game.input.keyboard.addKey(Phaser.Keyboard.X);
		//skipSection.onDown.add(function () {
		//	//alert(gametime);
        //
		//	game.destroy();
        //
		//	currentview = new Questionnaire();
        //
        //
        //
		//}, this);


//
	function moveright() {

		if(notwait===true){


		if(lastSecond=="down"){

			//if(Math.random()>p[round]){
			//	var velo = 0;
			//}else{
			//	var velo = 800;
			//}

			velo = 1600*p[round];
			dontIncrement=false;
			player.body.velocity.x = velo;
			player.frame= 6;
			//console.log(allow_restart)
			numberofpresses +=1;
			dontIncrement=true;
			lastSecond = "up";


		}
		player.frame = 4;
		}
	}

		function showright() {
			//dontIncrement=false;
			//player.body.velocity.x = velo;
			player.frame= 6;
			//console.log(allow_restart)
			//numberofpresses +=1;
			//dontIncrement=true;
			lastSecond = "down";

		}



//	if (cursors.left.isDown)
//	{
//		//  Move to the left
////        player.body.velocity.x = -5;
////
////        player.animations.play('left');
//	}
//	else if (cursors.right.isDown)
//	{
//		//  Move to the right
////        player.body.velocity.x = 5;
////
////        player.animations.play('right');
//	}
//	else
//	{
//		//  Stand still
//
//        //
//		;
//	}



		//player.animations.stop();


		if (time_remaining===0) {
			if (gameover ===true) {

				var endtime = new Date().getTime();
				var rt = endtime-start_level_time;
				console.log("endgae");


				psiTurk.recordTrialData({'result':"sectionEnd", 'numpressess':numberofpresses,'diff':p[round], 'value':paintValue,'painting':paint,"rt":rt});
				game.input.keyboard.clearCaptures();

				currentview = new Questionnaire();
				gameover =false;
			}
		}

}}





//	function collectStar (player, star) {
//
//
//
//			// Removes the star from the screen
//
//			//$('.continue').unbind('click.psiturk.instructionsnav.next');
//			//$('.previous').unbind('click.psiturk.instructionsnav.prev');
//
//			// Record that the user has finished the instructions and
//			// moved on to the experiment. This changes their status code
//			// in the database.
//			//psiTurk.finishInstructions();
//			//
//			//psiTurk.startTask();
//
//			// Move on to the experiment
//
//			player.kill();
//			star.kill();
//
//
//			//  Add and update the score
//			//               score += current_value;
//			//               score_text.text = 'Score: $' + score;
//
//			//current_value = value.push();
//
//			//game.paused = true;
//
//			var w = 800, h = 600;
//
//			// Then add the menu
//			//menu = game.add.sprite(w/2, h/2, 'menu');
//			//menu.anchor.setTo(0.5, 0.5);
//
//			// And a label to illustrate which menu item was chosen. (This is not necessary)
//
//
//			choiceLabel = game.add.text(w / 2, h - 440, 'You got the painting! How much do you like it?', {
//				font: '30px Arial',
//				fill: '#fff'
//			});
//			choiceLabel.anchor.setTo(.5, .5);
//			choiceLabel.wordWrap = true;
//			choiceLabel.wordWrapWidth = 400;
//			optionlabelInst = game.add.text(w / 4, h - 180, 'Please click on a number below', {
//				font: '30px Arial',
//				fill: '#fff'
//			});
//			optionlabel1 = game.add.text(w / 2 - 60, h - 150, '1', {font: '30px Arial', fill: '#fff'});
//			optionlabel2 = game.add.text(w / 2 - 30, h - 150, '2', {font: '30px Arial', fill: '#fff'});
//			optionlabel3 = game.add.text(w / 2, h - 150, '3', {font: '30px Arial', fill: '#fff'});
//			optionlabel4 = game.add.text(w / 2 + 30, h - 150, '4', {font: '30px Arial', fill: '#fff'});
//			optionlabel5 = game.add.text(w / 2 + 60, h - 150, '5', {font: '30px Arial', fill: '#fff'});
//			//not sure what this does
//			//optionlabel1.anchor.setTo(.5,.5);
//			//optionlabel2.anchor.setTo(.5,.5);
//			//optionlabel3.anchor.setTo(.5,.5);
//			//optionlabel4.anchor.setTo(.5,.5);
//			//optionlabel5.anchor.setTo(.5,.5);
//			painting = stars.create(w / 2 - 100, h / 2 - 100, paint);
//			//mond.anchor.setTo(0.5, 0.5);
//			painting.scale.setTo(scaleP, scaleP);
//
//			optionlabel1.inputEnabled = true;
//			optionlabel2.inputEnabled = true;
//			optionlabel3.inputEnabled = true;
//			optionlabel4.inputEnabled = true;
//			optionlabel5.inputEnabled = true;
//
//			allow_restart = false;
//
//
//			//need to add a way to record the score.
//
//			optionlabel1.events.onInputUp.add(function () {
//
//				optionlabel1.destroy();
//
//				optionlabel1 = game.add.text(w / 2 - 60, h - 150, '1', {font: '30px Arial', fill: '#000'});
//
//
//				setTimeout(function () {
//
//
//					if (round === 8) {
//						currentview = new Questionnaire();
//
//					} else {
//						clear_text();
//						RecreateGame();
//					}
//
//				}, 500)
//
//			});
//
//
//			optionlabel2.events.onInputUp.add(function () {
//
//				optionlabel2.destroy();
//
//				optionlabel2 = game.add.text(w / 2 - 30, h - 150, '2', {font: '30px Arial', fill: '#000'});
//
//
//				setTimeout(function () {
//
//
//					if (round === 8) {
//						currentview = new Questionnaire();
//
//					} else {
//						clear_text();
//						RecreateGame();
//					}
//
//				}, 500)
//			});
//
//			optionlabel3.events.onInputUp.add(function () {
//
//
//				optionlabel3.destroy();
//				optionlabel3 = game.add.text(w / 2, h - 150, '3', {font: '30px Arial', fill: '#000'});
//
//
//				setTimeout(function () {
//
//
//					if (round === 8) {
//						currentview = new Questionnaire();
//
//					} else {
//						clear_text();
//						RecreateGame();
//					}
//
//				}, 500)
//
//			});
//
//			optionlabel4.events.onInputUp.add(function () {
//
//
//				optionlabel4.destroy();
//				optionlabel4 = game.add.text(w / 2 + 30, h - 150, '4', {font: '30px Arial', fill: '#000'});
//
//
//				setTimeout(function () {
//
//
//					if (round === 8) {
//						currentview = new Questionnaire();
//
//					} else {
//						clear_text();
//						RecreateGame();
//					}
//
//				}, 500)
//			});
//
//			optionlabel5.events.onInputUp.add(function () {
//
//				optionlabel5.destroy();
//
//				optionlabel5 = game.add.text(w / 2 + 60, h - 150, '5', {font: '30px Arial', fill: '#000'});
//
//
//				setTimeout(function () {
//
//
//					if (round === 8) {
//						currentview = new Questionnaire();
//
//					} else {
//						clear_text();
//						RecreateGame();
//					}
//
//				}, 500)
//
//
//			});
//
//
//			//round = round + 1;
//			//s(round);
//
//
//
//
//
//
//
//}

	function clear_text(){

		optionlabel1.destroy();
		optionlabel2.destroy();
		optionlabel3.destroy();
		optionlabel4.destroy();
		optionlabel5.destroy();
		choiceLabel.destroy();
		optionlabelInst.destroy();
		painting.destroy();



	}








	function RecreateGame() {
		if (gametime != "first"){
			return;
		}


		player.kill();
		star.kill();


		// The player and its settings
		player = game.add.sprite(32, game.world.height - 150, 'dude');

		//  We need to enable physics on the player
		game.physics.arcade.enable(player);

		//  Player physics properties. Give the little guy a slight bounce.
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 3000;
		player.body.collideWorldBounds = true;

		//  Our two animations, walking left and right.
		player.animations.add('left', [0, 1, 2, 3], 10, true);
		player.animations.add('right', [5, 6, 7, 8], 10, true);

		//  Finally some stars to collect
		stars = game.add.group();

		//  We will enable physics for any star that is created in this group
		stars.enableBody = true;

		//  Here we'll create 12 of them evenly spaced apart
//    for (var i = 0; i < 12; i++)
//    {
		//  Create a star inside of the 'stars' group


		round = round + 1;

		console.log(round);

		star.destroy();


		var heightStar = 258;

		//switch (round) {
		//	case 0:
		//		paint = 'mond';
		//		scaleP = .25;
		//		break;
		//	case 1:
		//		paint = "poll";
		//		scaleP = .15;
		//		break;
		//	case 2:
		//		paint = 'mond';
		//		scaleP = .25;
		//		break;
		//	case 3:
		//		paint = "poll";
		//		scaleP = .15;
		//		break;
		//	case 4:
		//		paint = 'mond';
		//		scaleP = .25;
		//		break;
		//	case 5:
		//		paint = "poll";
		//		scaleP = .15;
		//		break;
		//	case 6:
		//		paint = 'mond';
		//		scaleP = .25;
		//		break;
		//	case 7:
		//		paint = "poll";
		//		scaleP = .15;
		//		break;
		//	case 8:
		//		paint = 'mond';
		//		scaleP = .25;
		//		break;
        //
		//}

		scaleP = .75;
		paint = paintingtype.shift();

		setTimeout(function () {
			allow_restart = true;
		}, 300);

		star = stars.create(550, game.world.height - heightStar, paint);
		star.scale.setTo(scaleP, scaleP);

		paintValue = value.shift();
		//alert(paintValue);
		paint_label.destroy();
		paint_label = game.add.text(600, 300, '$'+ paintValue, { fontSize: '32px', fill: '#000' });

		Score_calc();

		numberofpresses=0;


		start_level_time = new Date().getTime();

		notwait = true;



	}

	function Score_calc(){
		if (gametime != "first"){
			return;
		}




		//## Set up new mechanism.




		score_text.destroy();
		score_text =  game.add.text(16, 75, 'Score: $'+score, { fontSize: '32px', fill: '#800' });







		//##########3







		//alert(round);





	}



	function  got_painting(){
		if (gametime != "first"){
			return;
		}





		allow_restart=false;
		player.kill();
		star.kill();
		paint_label.destroy();

		score  = score + paintValue;

		resultAct = "gotPaint1";
		wait_screen();

		Score_calc();
	}

	function  wait_screen(){
		if (gametime != "first"){
			return;
		}

		notwait = false;
		//alert("repeatingA");

		player.kill();
		star.kill();
		paint_label.destroy();

		count_number_text_inst = game.add.text(220,250,"Your next round is starting in:", { fontSize: '100px', fill: '#000' });

		count_number_text =  game.add.text(350,280,"3", { fontSize: '100px', fill: '#000' });

		setTimeout(function () {
			count_number_text.destroy();
			count_number_text =  game.add.text(350,280,"2", { fontSize: '100px', fill: '#000' });

		}, 1000);

		setTimeout(function () {
			count_number_text.destroy();
			count_number_text =  game.add.text(350,280,"1", { fontSize: '100px', fill: '#000' });

		}, 2000);


		setTimeout(function () {
			//alert("repeatingW");
			count_number_text_inst.destroy();

			count_number_text.destroy();
			RecreateGame();

		}, 3000);

		var endtime = new Date().getTime();
		var rt = endtime- start_level_time;


		psiTurk.recordTrialData({'result':resultAct, 'numpressess':numberofpresses,'diff':p[round], 'value':paintValue,'painting':paint,"rt":rt});
		numberofpresses=0;


	}

	function counter(){
		if (gametime != "first"){
			return;
		}

		if (time_remaining>0){
			time_remaining = time_remaining -1;
			time_remaining_text.destroy();
			time_remaining_text= game.add.text(16,105,"Time Remaining: "+time_remaining+" seconds", { fontSize: '100px', fill: '#000' });


			setTimeout(function () {
				//alert("repeatingW");
				counter();

			}, 1000);


		}else{

			//setTimeout(function () {
			//	//alert("repeatingW");
			//	counter();
            //
			//}, 1000);
            //
			//currentview = new Questionnaire();




		}








	}


}





function playgame2() {


	playgame = "";
	game ="";




	//if(round===0){
	psiTurk.showPage('stage2.html');
//	}else if (round===1){
//	psiTurk.showPage('stage2.html');
//}else{
//		psiTurk.showPage('stage3.html');
//	}
//
//	var el = document.getElementById('parent1');
//
//	while ( el.firstChild ) el.removeChild( el.firstChild );


	var game2 = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });



	function preload() {
		if (gametime != "second"){
			return;
		}

		game2.load.image('sky', '/static/assets/sky.png');
		game2.load.image('ground', '/static/assets/platform.png');
		game2.load.image('star', '/static/assets/castle.png ');
		game2.load.image('mond','/static/assets/mondrian.jpg ' );
		game2.load.image('poll','/static/assets/pollock.jpg ' );
		game2.load.spritesheet('dude', '/static/assets/dude.png', 32, 48);



		game2.load.image('pic91','/static/assets/pic91.BMP' );game2.load.image('pic92','/static/assets/pic92.BMP' );game2.load.image('pic93','/static/assets/pic93.BMP' );game2.load.image('pic94','/static/assets/pic94.BMP' );game2.load.image('pic95','/static/assets/pic95.BMP' );game2.load.image('pic96','/static/assets/pic96.BMP' );game2.load.image('pic97','/static/assets/pic97.BMP' );game2.load.image('pic98','/static/assets/pic98.BMP' );game2.load.image('pic99','/static/assets/pic99.BMP' );		//http://localhost:22362/assets/platform.png

	}

	var round = 0;
	var player;
	var platforms;
	var cursors;

	var stars;
	var star;
	var score = 0;
	var scoreText;
	var allow_restart;

	var checkpaint;

	var time_remaining = 15;

	var paint1;

	var paint;



	var p1= [.2,.5,.9,.2,.5,.9,.2,.5,.9];

	var value1 = [100,400,300,100,500,100,400,300,100];

	var paintingtype=[];
	var setorder=[];

	for (i = 91; i < 100; i++) {
		paintingtype.push(String("pic"+i));
		setorder.push(i-91);

	}

	setorder = _.shuffle(setorder);


	var p=[];
	var value=[];


	for (i = 0; i < 10; i++) {
		p.push(p1[setorder[i]]);
		value.push(value1[setorder[i]]);


	}

	paintingtype = _.shuffle(paintingtype);



	psiTurk.recordUnstructuredData("values1",value);

	psiTurk.recordUnstructuredData("prob1",p);

	psiTurk.recordUnstructuredData("paintType1",paintingtype);
	psiTurk.recordUnstructuredData("setorder1",setorder);




	var numberofpresses=0;
	var Trial_RT_Start;
	var Trial_RT_Finish;
	var rt1;
	var rt2;



	//var paintValue = value.push();


	//var current_value = value.push();


	function create() {
		if (gametime != "second"){
			return;
		}



		//  We're going to be using physics, so enable the Arcade Physics system
		game2.physics.startSystem(Phaser.Physics.ARCADE);

		//  A simple background for our game
		game2.add.sprite(0, 0, 'sky');

		//  The platforms group contains the ground and the 2 ledges we can jump on
		platforms = game2.add.group();

		//  We will enable physics for any object that is created in this group
		platforms.enableBody = true;


		// Here we create the ground.
		var ground = platforms.create(0, game2.world.height - 64, 'ground');

		//  Scale it to fit the width of the game (the original sprite is 400x32 in size)
		ground.scale.setTo(2, 2);

		//  This stops it from falling away when you jump on it
		ground.body.immovable = true;


		// The player and its settings
		player = game2.add.sprite(32, game2.world.height - 150, 'dude');

		//  We need to enable physics on the player
		game2.physics.arcade.enable(player);

		//  Player physics properties. Give the little guy a slight bounce.
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 3000;
		player.body.collideWorldBounds = true;

		//  Our two animations, walking left and right.
		player.animations.add('left', [0, 1, 2, 3], 10, true);
		player.animations.add('right', [5, 6, 7, 8], 10, true);

		//  Finally some stars to collect
		stars = game2.add.group();

		//  We will enable physics for any star that is created in this group
		stars.enableBody = true;

		//  Here we'll create 12 of them evenly spaced apart
//    for (var i = 0; i < 12; i++)
//    {
		//  Create a star inside of the 'stars' group

		var heightStar = 258;
		//alert(round);




		//switch (round){
		//	case 0:
		//		paint1 = 'mond';
		//		scaleP1 = .25;
		//		break;
		//	//case 1:
		//	//	paint = "poll";
		//	//	scaleP = .15;
		//	//	break;
		//	//case 2:
		//	//	paint = 'mond';
		//	//	scaleP = .25;
		//	//	break;
		//	//case 3:
		//	//	paint = "poll";
		//	//	scaleP = .15;
		//	//	break;
		//	//case 4:
		//	//	paint = 'mond';
		//	//	scaleP = .25;
		//	//	break;
		//	//case 5:
		//	//	paint = "poll";
		//	//	scaleP = .15;
		//	//	break;
		//	//case 6:
		//	//	paint = 'mond';
		//	//	scaleP = .25;
		//	//	break;
		//	//case 7:
		//	//	paint = "poll";
		//	//	scaleP = .15;
		//	//	break;
		//	//case 8:
		//	//	paint = 'mond';
		//	//	scaleP = .25;
		//	//	break;
        //
		//}

		paint1 = paintingtype.shift();
		scaleP1 = .75;
		star = stars.create(550, game2.world.height - heightStar, paint1);
		star.scale.setTo(scaleP1,scaleP1);






		//  Let gravity do its thing
		//star.body.gravity.y = 300;

		//  This just gives each star a slightly random bounce value
		//star.body.bounce.y = 0;
//    }

		// instructions
		instruct_text = game2.add.text(16, 16, 'Press the right arrow key to move right', { fontSize: '32px', fill: '#000' });



		if (mycondition==="0"){
			title_test = game2.add.text(16, 46, 'Skipped work of calligraphy '+ (round+1), { fontSize: '32px', fill: '#000' });

		}else{
			title_test = game2.add.text(16, 46, 'Work of calligraphy '+ (round+1), { fontSize: '32px', fill: '#000' });

		}


		//score_text =  game.add.text(16, 45, 'Score: $'+score, { fontSize: '32px', fill: '#000' });





		//  Our controls.
		cursors = game2.input.keyboard.createCursorKeys();

		allow_restart = true;

		console.log("S"+paint1);

		Trial_RT_Start = new Date().getTime();




	}



	function update() {
		if (gametime != "second"){
			return;
		}


		//  Collide the player and the stars with the platforms
		game2.physics.arcade.collide(player, platforms);
		game2.physics.arcade.collide(stars, platforms);
		game2.physics.arcade.collide(platforms, platforms);


		if(checkpaint !== paint1){
			console.log(paint1+" "+checkpaint);
		}

		//  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function

		if(allow_restart){
			game2.physics.arcade.overlap(player, stars, collectStar,null,this);
		}


		//  Reset the players velocity (movement)
		player.body.velocity.x = 0;

		//  Reset the players velocity (movement)
		player.body.velocity.x = 0;

		var flapKey = game2.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		flapKey.onUp.add(moveright);

		dontIncrement = true;

		var flapKey2 = game2.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		flapKey2.onDown.add(showright);

		dontIncrement = true;

		//var skipGame = game.input.keyboard.addKey(Phaser.Keyboard.S);
		//skipGame.onDown.add(function () {
        //
		//	if(allow_restart){
		//		wait_screen();
		//		console.log("pressed");
		//		allow_restart=false;
		//	}else{
		//		//conso

        //
		//}, this);

		//var skipSection = game.input.keyboard.addKey(Phaser.Keyboard.X);
		//skipSection.onDown.add(function () {
        //
		//	currentview = new Questionnaire2();
        //
        //
        //
		//}, this);


//
		function moveright() {


			if(lastSecond=="down"){

				//if(Math.random()>p[round]){
				//	var velo = 0;
				//}else{
				//	var velo = 800;
				//}

				velo = 1600*p[round];

				dontIncrement=false;
				player.body.velocity.x = velo;
				player.frame= 6;
				//console.log(allow_restart)
				numberofpresses +=1;
				dontIncrement=true;
				lastSecond = "up";

			}
			player.frame = 4;
		}

		function showright() {
			//dontIncrement=false;
			//player.body.velocity.x = velo;
			player.frame= 6;
			//console.log(allow_restart)
			//numberofpresses +=1;
			//dontIncrement=true;
			lastSecond = "down";

		}

		if (cursors.left.isDown)
		{
			//  Move to the left
//        player.body.velocity.x = -5;
//
//        player.animations.play('left');
		}
		else if (cursors.right.isDown)
		{
			//  Move to the right
//        player.body.velocity.x = 5;
//
//        player.animations.play('right');
		}
		else
		{
			//  Stand still
			player.animations.stop();

			player.frame = 4;
		}

	}





	function collectStar (player, star) {
		if (gametime != "second"){
			return;
		}



		Trial_RT_Finish = new Date().getTime();

		rt1 = Trial_RT_Finish - Trial_RT_Start;

		psiTurk.recordTrialData({'result':"GotPainting", 'numpressess':numberofpresses,'diff':p[round], 'value':0,'painting':paint,"rt":rt1});



		Option_RT_Start = new Date().getTime();




		// Removes the star from the screen

		//$('.continue').unbind('click.psiturk.instructionsnav.next');
		//$('.previous').unbind('click.psiturk.instructionsnav.prev');

		// Record that the user has finished the instructions and
		// moved on to the experiment. This changes their status code
		// in the database.
		//psiTurk.finishInstructions();
		//
		//psiTurk.startTask();

		// Move on to the experiment

		player.kill();
		star.kill();

			instruct_text.destroy();
			title_test.destroy();


		//  Add and update the score
		//               score += current_value;
		//               score_text.text = 'Score: $' + score;

		//current_value = value.push();

		//game.paused = true;

		var w = 800, h = 600;

		// Then add the menu
		//menu = game.add.sprite(w/2, h/2, 'menu');
		//menu.anchor.setTo(0.5, 0.5);

		// And a label to illustrate which menu item was chosen. (This is not necessary)

		console.log("CollectStar:"+round);
		console.log(paint1);


		if (mycondition==="0"){
			choiceLabel = game2.add.text(w / 2, h - 440, 'What was the value of this skipped painting?', {
				font: '30px Arial',
				fill: '#fff'
			});

			//alert(0);
		} else if (mycondition==="1"){
			choiceLabel = game2.add.text(w / 2, h - 440, 'What is the value of this painting?', {
				font: '30px Arial',
				fill: '#fff'
			});

		} else if (mycondition==="3"){
			choiceLabel = game2.add.text(w / 2, h - 440, 'What is the value of this painting?', {
				font: '30px Arial',
				fill: '#fff'
			});

		}else{
			choiceLabel = game2.add.text(w / 2, h - 440, 'How much do you like this painting?', {
				font: '30px Arial',
				fill: '#fff'
			});


		}




		choiceLabel.anchor.setTo(.5, .5);
		choiceLabel.wordWrap = true;
		choiceLabel.wordWrapWidth = 400;
		optionlabelInst = game2.add.text(w / 4, h - 180, 'Please select a number below', {
			font: '30px Arial',
			fill: '#fff'
		});

		if(mycondition==="2"){

			var TR1 = "1";
			var TR2 = "2";
			var TR3 = "3";
			var TR4 = "4";
			var TR5 = "5";

			optionlabel1 = game2.add.text(w / 2 - 180, h - 150, '1', {font: '30px Arial', fill: '#fff'});
			optionlabel2 = game2.add.text(w / 2 - 90, h - 150, '2', {font: '30px Arial', fill: '#fff'});
			optionlabel3 = game2.add.text(w / 2, h - 150, '3', {font: '30px Arial', fill: '#fff'});
			optionlabel4 = game2.add.text(w / 2 + 90, h - 150, '4', {font: '30px Arial', fill: '#fff'});
			optionlabel5 = game2.add.text(w / 2 + 180, h - 150, '5', {font: '30px Arial', fill: '#fff'});



		}else {

			var TR1 = '$100';
			var TR2 = '$200';
			var TR3 = '$300';
			var TR4 = '$400';
			var TR5 = '$500';
			optionlabel1 = game2.add.text(w / 2 - 180, h - 150, '$100', {font: '30px Arial', fill: '#fff'});
			optionlabel2 = game2.add.text(w / 2 - 90, h - 150, '$200', {font: '30px Arial', fill: '#fff'});
			optionlabel3 = game2.add.text(w / 2, h - 150, '$300', {font: '30px Arial', fill: '#fff'});
			optionlabel4 = game2.add.text(w / 2 + 90, h - 150, '$400', {font: '30px Arial', fill: '#fff'});
			optionlabel5 = game2.add.text(w / 2 + 180, h - 150, '$500', {font: '30px Arial', fill: '#fff'});
		}
		//not sure what this does
		//optionlabel1.anchor.setTo(.5,.5);
		//optionlabel2.anchor.setTo(.5,.5);
		//optionlabel3.anchor.setTo(.5,.5);
		//optionlabel4.anchor.setTo(.5,.5);
		//optionlabel5.anchor.setTo(.5,.5);
		painting = stars.create(w / 2 - 100, h / 2 - 100, paint1);
		//mond.anchor.setTo(0.5, 0.5);
		painting.scale.setTo(scaleP1, scaleP1);

		optionlabel1.inputEnabled = true;
		optionlabel2.inputEnabled = true;
		optionlabel3.inputEnabled = true;
		optionlabel4.inputEnabled = true;
		optionlabel5.inputEnabled = true;

		allow_restart = false;


		//need to add a way to record the score.




		optionlabel1.events.onInputUp.add(function () {

			Option_RT_Finish = new Date().getTime();
			rt2 =  Option_RT_Finish -Option_RT_Start;


			psiTurk.recordTrialData({'result':"OptionSelection", 'numpressess':numberofpresses,'diff':p[round], 'value':1,'painting':paint,"rt":rt2});


			optionlabel1.destroy();



			optionlabel1 = game2.add.text(w / 2 - 180, h - 150, TR1, {font: '30px Arial', fill: '#000'});


			setTimeout(function () {


				if (round === 8) {

					game2.input.keyboard.clearCaptures();
					game2.destroy();
					currentview = new Questionnaire2();

				} else {
					clear_text();
					RecreateGame();
				}

			}, 500)

		});


		optionlabel2.events.onInputUp.add(function () {

			Option_RT_Finish = new Date().getTime();
			rt2 =  Option_RT_Finish -Option_RT_Start;

			psiTurk.recordTrialData({'result':"OptionSelection", 'numpressess':numberofpresses,'diff':p[round], 'value':2,'painting':paint,"rt":rt2});


			optionlabel2.destroy();

			optionlabel2 = game2.add.text(w / 2 - 90, h - 150, TR2, {font: '30px Arial', fill: '#000'});


			setTimeout(function () {


				if (round === 8) {

					game2.input.keyboard.clearCaptures();
					game2.destroy();
					currentview = new Questionnaire2();

				} else {
					clear_text();
					RecreateGame();
				}

			}, 500)
		});

		optionlabel3.events.onInputUp.add(function () {

			Option_RT_Finish = new Date().getTime();
			rt2 =  Option_RT_Finish -Option_RT_Start;

			psiTurk.recordTrialData({'result':"OptionSelection", 'numpressess':numberofpresses,'diff':p[round], 'value':3,'painting':paint,"rt":rt2});



			optionlabel3.destroy();
			optionlabel3 = game2.add.text(w / 2, h - 150, TR3, {font: '30px Arial', fill: '#000'});


			setTimeout(function () {


				if (round === 8) {
					game2.input.keyboard.clearCaptures();
					game2.destroy();

					currentview = new Questionnaire2();

				} else {
					clear_text();
					RecreateGame();
				}

			}, 500)

		});

		optionlabel4.events.onInputUp.add(function () {

			Option_RT_Finish = new Date().getTime();
			rt2 =  Option_RT_Finish - Option_RT_Start;

			psiTurk.recordTrialData({'result':"OptionSelection", 'numpressess':numberofpresses,'diff':p[round], 'value':4,'painting':paint,"rt":rt2});



			optionlabel4.destroy();
			optionlabel4 = game2.add.text(w / 2 + 90, h - 150, TR4, {font: '30px Arial', fill: '#000'});


			setTimeout(function () {


				if (round === 8) {
					game2.input.keyboard.clearCaptures();
					game2.destroy();

					currentview = new Questionnaire2();

				} else {
					clear_text();
					RecreateGame();
				}

			}, 500)
		});

		optionlabel5.events.onInputUp.add(function () {

			Option_RT_Finish = new Date().getTime();
			rt2 =  Option_RT_Finish -Option_RT_Start;


			psiTurk.recordTrialData({'result':"OptionSelection", 'numpressess':numberofpresses,'diff':p[round], 'value':5,'painting':paint,"rt":rt2});


			optionlabel5.destroy();

			optionlabel5 = game2.add.text(w / 2 + 180, h - 150, TR5, {font: '30px Arial', fill: '#000'});


			setTimeout(function () {


				if (round === 8) {
					game2.input.keyboard.clearCaptures();
					game2.destroy();


					currentview = new Questionnaire2();

				} else {
					clear_text();
					RecreateGame();
				}

			}, 500)


		});


		//round = round + 1;
		//alert(round);







	}

	function clear_text(){
		if (gametime != "second"){
			return;
		}


		optionlabel1.destroy();
		optionlabel2.destroy();
		optionlabel3.destroy();
		optionlabel4.destroy();
		optionlabel5.destroy();
		choiceLabel.destroy();
		optionlabelInst.destroy();
		painting.destroy();



	}








	function RecreateGame() {


		player.kill();
		star.kill();


		// The player and its settings
		player = game2.add.sprite(32, game2.world.height - 150, 'dude');

		//  We need to enable physics on the player
		game2.physics.arcade.enable(player);

		//  Player physics properties. Give the little guy a slight bounce.
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 3000;
		player.body.collideWorldBounds = true;

		//  Our two animations, walking left and right.
		player.animations.add('left', [0, 1, 2, 3], 10, true);
		player.animations.add('right', [5, 6, 7, 8], 10, true);

		//  Finally some stars to collect
		stars = game2.add.group();

		//  We will enable physics for any star that is created in this group
		stars.enableBody = true;

		//  Here we'll create 12 of them evenly spaced apart
//    for (var i = 0; i < 12; i++)
//    {
		//  Create a star inside of the 'stars' group


		round = round + 1;


		star.destroy();


		var heightStar = 258;

		//switch (round) {
		//	case 0:
		//		paint1 = 'mond';
		//		scaleP1 = .25;
		//		break;
		//	case 1:
		//		paint1 = "poll";
		//		scaleP1 = .15;
		//		break;
		//	case 2:
		//		paint1 = 'mond';
		//		scaleP1 = .25;
		//		break;
		//	case 3:
		//		paint1 = "poll";
		//		scaleP1 = .15;
		//		break;
		//	case 4:
		//		paint1 = 'mond';
		//		scaleP1 = .25;
		//		break;
		//	case 5:
		//		paint1 = "poll";
		//		scaleP1 = .15;
		//		break;
		//	case 6:
		//		paint1 = 'mond';
		//		scaleP1 = .25;
		//		break;
		//	case 7:
		//		paint1 = "poll";
		//		scaleP1 = .15;
		//		break;
		//	case 8:
		//		paint1 = 'mond';
		//		scaleP1 = .25;
		//		break;
		//
		//}

		console.log("Update:"+round);
		console.log(paint1);

		checkpaint = paint1;


		setTimeout(function () {
			allow_restart = true;
		}, 300);

		paint1 = paintingtype.shift();
		scaleP1 = .75;
		star = stars.create(550, game2.world.height - heightStar, paint1);
		star.scale.setTo(scaleP1, scaleP1);

		//paintValue = value.shift();
		////alert(paintValue);
		//paint_label.destroy();
		//paint_label = game.add.text(600, 300, '$'+ paintValue, { fontSize: '32px', fill: '#000' });

		
		instruct_text = game2.add.text(16, 16, 'Press the right arrow key to move right', { fontSize: '32px', fill: '#000' });



		if (mycondition==="0"){
			title_test = game2.add.text(16, 46, 'Skipped work of calligraphy '+ (round+1), { fontSize: '32px', fill: '#000' })

		}else{
			title_test = game2.add.text(16, 46, 'Work of calligraphy '+ (round+1), { fontSize: '32px', fill: '#000' })

		}


		numberofpresses = 0;

		Trial_RT_Start = new Date().getTime();



	}




    //
	//function  got_painting(){
    //
	//	instruct_text.destroy();
	//	title_test.destroy();
    //
    //
	//	allow_restart=false;
	//	player.kill();
	//	star.kill();
	//	paint_label.destroy();
    //
	//	score  = score + paintValue;
	//	wait_screen()
	//}
















}



/****************
* Questionnaire *
****************/

var Questionnaire = function() {




	gametime = "Afterfirst";

	var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your HIT. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

	record_responses = function() {

		psiTurk.recordTrialData({'phase':'IntQ', 'status':'submit'});

		$('textarea').each( function(i, val) {
			psiTurk.recordUnstructuredData(this.id, this.value);
		});
		$('select').each( function(i, val) {
			psiTurk.recordUnstructuredData(this.id, this.value);
		});

	};

	prompt_resubmit = function() {
		replaceBody(error_message);
		$("#resubmit").click(resubmit);
	};

	resubmit = function() {
		replaceBody("<h1>Trying to resubmit...</h1>");
		reprompt = setTimeout(prompt_resubmit, 10000);

		psiTurk.saveData({
			success: function() {
			    clearInterval(reprompt);
                //psiTurk.computeBonus('compute_bonus', function(){finish()});
			},
			error: prompt_resubmit
		});
	};

	// Load the questionnaire snippet 
	psiTurk.showPage('MidInstructions.html');
	psiTurk.recordTrialData({'phase':'IntQ', 'status':'begin'});

	if (mycondition==="0"){
		document.getElementById("Ins0").style.display = 'block';
	} else if (mycondition==="1"){
		document.getElementById("Ins1").style.display = 'block';
	}else if (mycondition==="2") {
		document.getElementById("Ins2").style.display = 'block';
	}else {
		document.getElementById("Ins3").style.display = 'block';
	}



	//alert("pressed2")
	
	$("#next").click(function () {
	    //record_responses();
        //alert("pressed1");
		gametime = "second";
		currentview = playgame2();
		//alert("pressed");
	    psiTurk.saveData({
            success: function(){
                //psiTurk.computeBonus('compute_bonus', function() {
                //	psiTurk.completeHIT(); // when finished saving compute bonus, the quit
                //});
            },
            error: prompt_resubmit});
	});
    
	
};

var Questionnaire2 = function() {
	gametime = "over";

	var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your HIT. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

	record_responses = function() {

		psiTurk.recordTrialData({'phase':'postquestionnaire1', 'status':'submit'});

		$('textarea').each( function(i, val) {
			psiTurk.recordUnstructuredData(this.id, this.value);
		});
		$('select').each( function(i, val) {
			psiTurk.recordUnstructuredData(this.id, this.value);
		});

	};

	prompt_resubmit = function() {
		replaceBody(error_message);
		$("#resubmit").click(resubmit);
	};

	resubmit = function() {
		replaceBody("<h1>Trying to resubmit...</h1>");
		reprompt = setTimeout(prompt_resubmit, 10000);

		psiTurk.saveData({
			success: function() {
				clearInterval(reprompt);
				//psiTurk.computeBonus('compute_bonus', function(){finish()});
			},
			error: prompt_resubmit
		});
	};

	// Load the questionnaire snippet
	psiTurk.showPage('postquestionnaire2.html');
	psiTurk.recordTrialData({'phase':'postquestionnaire1', 'status':'begin'});


	if (mycondition==="3"){

		document.getElementById("startegyq1Div").style.display = 'none';

		document.getElementById("onesection").style.display = 'block';

		document.getElementById("twosection").style.display = 'none';



	}

	$("#next").click(function () {
		record_responses();
		//currentview = playgame2();
		//psiTurk.saveData({
		//	success: function(){
		//		psiTurk.computeBonus('compute_bonus', function() {
		//			psiTurk.completeHIT(); // when finished saving compute bonus, the quit
		//		});
		//	},
		//	error: prompt_resubmit});
		currentview = new Questionnaire3();

	});


};

var Questionnaire3 = function() {

	var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your HIT. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

	record_responses = function() {

		psiTurk.recordTrialData({'phase':'postquestionnaire2', 'status':'submit'});

		$('textarea').each( function(i, val) {
			psiTurk.recordUnstructuredData(this.id, this.value);
		});
		$('select').each( function(i, val) {
			psiTurk.recordUnstructuredData(this.id, this.value);
		});

	};

	prompt_resubmit = function() {
		replaceBody(error_message);
		$("#resubmit").click(resubmit);
	};

	resubmit = function() {
		replaceBody("<h1>Trying to resubmit...</h1>");
		reprompt = setTimeout(prompt_resubmit, 10000);

		psiTurk.saveData({
			success: function() {
				clearInterval(reprompt);
				//psiTurk.computeBonus('compute_bonus', function(){finish()});
			},
			error: prompt_resubmit
		});
	};

	// Load the questionnaire snippet
	psiTurk.showPage('postquestionnaire.html');
	psiTurk.recordTrialData({'phase':'postquestionnaire2', 'status':'begin'});

	$("#next").click(function () {
		record_responses();
		//currentview = playgame2();
		//psiTurk.saveData({
		//	success: function(){
		//		psiTurk.computeBonus('compute_bonus', function() {
		//			psiTurk.completeHIT(); // when finished saving compute bonus, the quit
		//		});
		//	},
		//	error: prompt_resubmit});
		currentview = new Questionnaire4();

	});


};



var Questionnaire4 = function() {

	var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your HIT. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

	record_responses = function() {

		psiTurk.recordTrialData({'phase':'postquestionnaire3', 'status':'submit'});

		$('textarea').each( function(i, val) {
			psiTurk.recordUnstructuredData(this.id, this.value);
		});
		$('select').each( function(i, val) {
			psiTurk.recordUnstructuredData(this.id, this.value);
		});

	};

	prompt_resubmit = function() {
		replaceBody(error_message);
		$("#resubmit").click(resubmit);
	};

	resubmit = function() {
		replaceBody("<h1>Trying to resubmit...</h1>");
		reprompt = setTimeout(prompt_resubmit, 10000);

		psiTurk.saveData({
			success: function() {
				clearInterval(reprompt);
				//psiTurk.computeBonus('compute_bonus', function(){finish()});
			},
			error: prompt_resubmit
		});
	};

	// Load the questionnaire snippet
	psiTurk.showPage('postquestionnaire3.html');
	psiTurk.recordTrialData({'phase':'postquestionnaire3', 'status':'begin'});

	$("#next").click(function () {
		record_responses();
		//currentview = playgame2();
		psiTurk.saveData({
		   success: function(){
		       //psiTurk.computeBonus('compute_bonus', function() {
		       	psiTurk.completeHIT(); // when finished saving compute bonus, the quit
		       //});
		   },
		   error: prompt_resubmit});
	});


};

// Task object to keep track of the current phase
var currentview;

/*******************
 * Run Task
 ******************/
//$(window).load( function(){
//    psiTurk.doInstructions(
//    	instructionPages, // a list of pages you want to display in sequence
//    	function() { currentview = new StroopExperiment(); } // what you want to do when you are done with instructions
//    );
//});

$(window).load( function(){
	psiTurk.doInstructions(
		instructionPages, // a list of pages you want to display in sequence
		function() { currentview = new playgame(); } // what you want to do when you are done with instructions
	);
});
