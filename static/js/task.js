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
	//"instructions/instruct-ready.html",
	"stage.html",
	"stage2.html",
	"stage3.html",
	"postquestionnaire.html"
];

psiTurk.preloadPages(pages);

var instructionPages = [ // add as a list as many pages as you like
	"instructions/instruct-1.html",
	"instructions/instruct-2.html",
	"instructions/instruct-3.html"
	//"instructions/instruct-ready.html"
];



window['PhaserGlobal'] = [];
window['PhaserGlobal'].disableAudio = true;





function playgame() {



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
	game.load.spritesheet('dude', '/static/assets/dude.png', 32, 48);

	//http://localhost:22362/assets/platform.png

}

var player;
var platforms;
var cursors;

var stars;
	var star;
var score = 0;
var scoreText;
	var allow_restart;

	var time_remaining = 15;
	var round = 0;



var p= [.9,.9,.9,.9,.9,.9,.1,.2,.8];

	var value = [100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500];



	var paintValue = value.push();


	//var current_value = value.push();


	function create() {


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




	switch (round){
		case 0:
			paint = 'mond';
			scaleP = .25;
			break;
		case 1:
			paint = "poll";
			scaleP = .15;
			break;
		case 2:
			paint = 'mond';
			scaleP = .25;
			break;
		case 3:
			paint = "poll";
			scaleP = .15;
			break;
		case 4:
			paint = 'mond';
			scaleP = .25;
			break;
		case 5:
			paint = "poll";
			scaleP = .15;
			break;
		case 6:
			paint = 'mond';		counter();

			scaleP = .25;
			break;
		case 7:
			paint = "poll";
			scaleP = .15;
			break;
		case 8:
			paint = 'mond';
			scaleP = .25;
			break;

	}
	star = stars.create(550, game.world.height - heightStar, paint);
	star.scale.setTo(scaleP,scaleP);






	//  Let gravity do its thing
	//star.body.gravity.y = 300;

	//  This just gives each star a slightly random bounce value
	//star.body.bounce.y = 0;
//    }

	// instructions
	instruct_text = game.add.text(16, 16, 'Press the right arrow key to move', { fontSize: '32px', fill: '#000' });


	score_text =  game.add.text(16, 45, 'Score: $'+score, { fontSize: '32px', fill: '#000' });
	//v_text = game.add.text(600, 300, '#300', {font: '30px Arial', fill: '#000'});

		time_remaining_text= game.add.text(16,70,"Time Remaining: "+time_remaining+" seconds", { fontSize: '100px', fill: '#000' });

		counter();





		//  Our controls.
	cursors = game.input.keyboard.createCursorKeys();

	allow_restart = true;


		paintValue = value.shift();
		alert(value);
		paint_label =  game.add.text(600, 300, '$'+paintValue, { fontSize: '32px', fill: '#000' });



	}



	function update() {

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
	flapKey.onDown.add(moveright);


	var skipGame = game.input.keyboard.addKey(Phaser.Keyboard.S);
	skipGame.onDown.add(function () {

		if(allow_restart){
			wait_screen();
			console.log("pressed");
			allow_restart=false;
		}else{
			//console.log(allow_restart);
		}

	}, this);

	if(Math.random()>p[round]){
		var velo = 0;
	}else{
		var velo = 1000;
	}
//
	function moveright() {
		player.body.velocity.x = velo;
		player.frame= 6;
		console.log(allow_restart);
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


			choiceLabel = game.add.text(w / 2, h - 440, 'You got the painting! How much do you like it?', {
				font: '30px Arial',
				fill: '#fff'
			});
			choiceLabel.anchor.setTo(.5, .5);
			choiceLabel.wordWrap = true;
			choiceLabel.wordWrapWidth = 400;
			optionlabelInst = game.add.text(w / 4, h - 180, 'Please click on a number below', {
				font: '30px Arial',
				fill: '#fff'
			});
			optionlabel1 = game.add.text(w / 2 - 60, h - 150, '1', {font: '30px Arial', fill: '#fff'});
			optionlabel2 = game.add.text(w / 2 - 30, h - 150, '2', {font: '30px Arial', fill: '#fff'});
			optionlabel3 = game.add.text(w / 2, h - 150, '3', {font: '30px Arial', fill: '#fff'});
			optionlabel4 = game.add.text(w / 2 + 30, h - 150, '4', {font: '30px Arial', fill: '#fff'});
			optionlabel5 = game.add.text(w / 2 + 60, h - 150, '5', {font: '30px Arial', fill: '#fff'});
			//not sure what this does
			//optionlabel1.anchor.setTo(.5,.5);
			//optionlabel2.anchor.setTo(.5,.5);
			//optionlabel3.anchor.setTo(.5,.5);
			//optionlabel4.anchor.setTo(.5,.5);
			//optionlabel5.anchor.setTo(.5,.5);
			painting = stars.create(w / 2 - 100, h / 2 - 100, paint);
			//mond.anchor.setTo(0.5, 0.5);
			painting.scale.setTo(scaleP, scaleP);

			optionlabel1.inputEnabled = true;
			optionlabel2.inputEnabled = true;
			optionlabel3.inputEnabled = true;
			optionlabel4.inputEnabled = true;
			optionlabel5.inputEnabled = true;

			allow_restart = false;


			//need to add a way to record the score.

			optionlabel1.events.onInputUp.add(function () {

				optionlabel1.destroy();

				optionlabel1 = game.add.text(w / 2 - 60, h - 150, '1', {font: '30px Arial', fill: '#000'});


				setTimeout(function () {


					if (round === 8) {
						currentview = new Questionnaire();

					} else {
						clear_text();
						RecreateGame();
					}

				}, 500)

			});


			optionlabel2.events.onInputUp.add(function () {

				optionlabel2.destroy();

				optionlabel2 = game.add.text(w / 2 - 30, h - 150, '2', {font: '30px Arial', fill: '#000'});


				setTimeout(function () {


					if (round === 8) {
						currentview = new Questionnaire();

					} else {
						clear_text();
						RecreateGame();
					}

				}, 500)
			});

			optionlabel3.events.onInputUp.add(function () {


				optionlabel3.destroy();
				optionlabel3 = game.add.text(w / 2, h - 150, '3', {font: '30px Arial', fill: '#000'});


				setTimeout(function () {


					if (round === 8) {
						currentview = new Questionnaire();

					} else {
						clear_text();
						RecreateGame();
					}

				}, 500)

			});

			optionlabel4.events.onInputUp.add(function () {


				optionlabel4.destroy();
				optionlabel4 = game.add.text(w / 2 + 30, h - 150, '4', {font: '30px Arial', fill: '#000'});


				setTimeout(function () {


					if (round === 8) {
						currentview = new Questionnaire();

					} else {
						clear_text();
						RecreateGame();
					}

				}, 500)
			});

			optionlabel5.events.onInputUp.add(function () {

				optionlabel5.destroy();

				optionlabel5 = game.add.text(w / 2 + 60, h - 150, '5', {font: '30px Arial', fill: '#000'});


				setTimeout(function () {


					if (round === 8) {
						currentview = new Questionnaire();

					} else {
						clear_text();
						RecreateGame();
					}

				}, 500)


			});


			//round = round + 1;
			alert(round);







}

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

		switch (round) {
			case 0:
				paint = 'mond';
				scaleP = .25;
				break;
			case 1:
				paint = "poll";
				scaleP = .15;
				break;
			case 2:
				paint = 'mond';
				scaleP = .25;
				break;
			case 3:
				paint = "poll";
				scaleP = .15;
				break;
			case 4:
				paint = 'mond';
				scaleP = .25;
				break;
			case 5:
				paint = "poll";
				scaleP = .15;
				break;
			case 6:
				paint = 'mond';
				scaleP = .25;
				break;
			case 7:
				paint = "poll";
				scaleP = .15;
				break;
			case 8:
				paint = 'mond';
				scaleP = .25;
				break;

		}

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



	}

	function Score_calc(){




		//## Set up new mechanism.




		score_text.destroy();
		score_text =  game.add.text(16, 45, 'Score: $'+score, { fontSize: '32px', fill: '#000' });







		//##########3







		//alert(round);





	}



	function  got_painting(){


		allow_restart=false;
		player.kill();
		star.kill();
		paint_label.destroy();

		score  = score + paintValue;
		wait_screen()
	}

	function  wait_screen(){
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


	}

	function counter(){

		if (time_remaining>0){
			time_remaining = time_remaining -1;
			time_remaining_text.destroy();
			time_remaining_text= game.add.text(16,70,"Time Remaining: "+time_remaining+" seconds", { fontSize: '100px', fill: '#000' });


			setTimeout(function () {
				//alert("repeatingW");
				counter();

			}, 1000);


		}else{

			currentview = new Questionnaire();



		}








	}


}





function playgame2() {




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
		game.load.spritesheet('dude', '/static/assets/dude.png', 32, 48);

		//http://localhost:22362/assets/platform.png

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

	var time_remaining = 15;



	var p= [.9,.9,.9,.9,.9,.9,.1,.2,.8];

	var value = [100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500];



	var paintValue = value.push();


	//var current_value = value.push();


	function create() {


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




		switch (round){
			case 0:
				paint = 'mond';
				scaleP = .25;
				break;
			case 1:
				paint = "poll";
				scaleP = .15;
				break;
			case 2:
				paint = 'mond';
				scaleP = .25;
				break;
			case 3:
				paint = "poll";
				scaleP = .15;
				break;
			case 4:
				paint = 'mond';
				scaleP = .25;
				break;
			case 5:
				paint = "poll";
				scaleP = .15;
				break;
			case 6:
				paint = 'mond';
				scaleP = .25;
				break;
			case 7:
				paint = "poll";
				scaleP = .15;
				break;
			case 8:
				paint = 'mond';
				scaleP = .25;
				break;

		}
		star = stars.create(550, game.world.height - heightStar, paint);
		star.scale.setTo(scaleP,scaleP);






		//  Let gravity do its thing
		//star.body.gravity.y = 300;

		//  This just gives each star a slightly random bounce value
		//star.body.bounce.y = 0;
//    }

		// instructions
		instruct_text = game.add.text(16, 16, 'Press the right arrow key to move', { fontSize: '32px', fill: '#000' });


		score_text =  game.add.text(16, 45, 'Score: $'+score, { fontSize: '32px', fill: '#000' });





		//  Our controls.
		cursors = game.input.keyboard.createCursorKeys();

		allow_restart = true;



	}



	function update() {

		//  Collide the player and the stars with the platforms
		game.physics.arcade.collide(player, platforms);
		game.physics.arcade.collide(stars, platforms);
		game.physics.arcade.collide(platforms, platforms);

		//  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function

		if(allow_restart){
			game.physics.arcade.overlap(player, stars, collectStar,null,this);
		}


		//  Reset the players velocity (movement)
		player.body.velocity.x = 0;

		var flapKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		flapKey.onDown.add(moveright);


		//var skipGame = game.input.keyboard.addKey(Phaser.Keyboard.S);
		//skipGame.onDown.add(function () {
        //
		//	if(allow_restart){
		//		wait_screen();
		//		console.log("pressed");
		//		allow_restart=false;
		//	}else{
		//		//console.log(allow_restart);
		//	}
        //
		//}, this);

		if(Math.random()>p[round]){
			var velo = 0;
		}else{
			var velo = 1000;
		}
//
		function moveright() {
			player.body.velocity.x = velo;
			player.frame= 6;
			console.log(allow_restart);
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


		choiceLabel = game.add.text(w / 2, h - 440, 'How much do you think this paiting is worth?', {
			font: '30px Arial',
			fill: '#fff'
		});
		choiceLabel.anchor.setTo(.5, .5);
		choiceLabel.wordWrap = true;
		choiceLabel.wordWrapWidth = 400;
		optionlabelInst = game.add.text(w / 4, h - 180, 'Please click on a number below', {
			font: '30px Arial',
			fill: '#fff'
		});
		optionlabel1 = game.add.text(w / 2 - 180, h - 150, '$100', {font: '30px Arial', fill: '#fff'});
		optionlabel2 = game.add.text(w / 2 - 90, h - 150, '$200', {font: '30px Arial', fill: '#fff'});
		optionlabel3 = game.add.text(w / 2, h - 150, '$300', {font: '30px Arial', fill: '#fff'});
		optionlabel4 = game.add.text(w / 2 + 90, h - 150, '$400', {font: '30px Arial', fill: '#fff'});
		optionlabel5 = game.add.text(w / 2 + 180, h - 150, '$500', {font: '30px Arial', fill: '#fff'});
		//not sure what this does
		//optionlabel1.anchor.setTo(.5,.5);
		//optionlabel2.anchor.setTo(.5,.5);
		//optionlabel3.anchor.setTo(.5,.5);
		//optionlabel4.anchor.setTo(.5,.5);
		//optionlabel5.anchor.setTo(.5,.5);
		painting = stars.create(w / 2 - 100, h / 2 - 100, paint);
		//mond.anchor.setTo(0.5, 0.5);
		painting.scale.setTo(scaleP, scaleP);

		optionlabel1.inputEnabled = true;
		optionlabel2.inputEnabled = true;
		optionlabel3.inputEnabled = true;
		optionlabel4.inputEnabled = true;
		optionlabel5.inputEnabled = true;

		allow_restart = false;


		//need to add a way to record the score.

		optionlabel1.events.onInputUp.add(function () {

			optionlabel1.destroy();

			optionlabel1 = game.add.text(w / 2 - 180, h - 150, '$100', {font: '30px Arial', fill: '#000'});


			setTimeout(function () {


				if (round === 8) {
					currentview = new Questionnaire2();

				} else {
					clear_text();
					RecreateGame();
				}

			}, 500)

		});


		optionlabel2.events.onInputUp.add(function () {

			optionlabel2.destroy();

			optionlabel2 = game.add.text(w / 2 - 90, h - 150, '$200', {font: '30px Arial', fill: '#000'});


			setTimeout(function () {


				if (round === 8) {
					currentview = new Questionnaire2();

				} else {
					clear_text();
					RecreateGame();
				}

			}, 500)
		});

		optionlabel3.events.onInputUp.add(function () {


			optionlabel3.destroy();
			optionlabel3 = game.add.text(w / 2, h - 150, '$300', {font: '30px Arial', fill: '#000'});


			setTimeout(function () {


				if (round === 8) {
					currentview = new Questionnaire2();

				} else {
					clear_text();
					RecreateGame();
				}

			}, 500)

		});

		optionlabel4.events.onInputUp.add(function () {


			optionlabel4.destroy();
			optionlabel4 = game.add.text(w / 2 + 90, h - 150, '$400', {font: '30px Arial', fill: '#000'});


			setTimeout(function () {


				if (round === 8) {
					currentview = new Questionnaire2();

				} else {
					clear_text();
					RecreateGame();
				}

			}, 500)
		});

		optionlabel5.events.onInputUp.add(function () {

			optionlabel5.destroy();

			optionlabel5 = game.add.text(w / 2 + 180, h - 150, '$500', {font: '30px Arial', fill: '#000'});


			setTimeout(function () {


				if (round === 8) {
					currentview = new Questionnaire2();

				} else {
					clear_text();
					RecreateGame();
				}

			}, 500)


		});


		//round = round + 1;
		alert(round);







	}

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

		switch (round) {
			case 0:
				paint = 'mond';
				scaleP = .25;
				break;
			case 1:
				paint = "poll";
				scaleP = .15;
				break;
			case 2:
				paint = 'mond';
				scaleP = .25;
				break;
			case 3:
				paint = "poll";
				scaleP = .15;
				break;
			case 4:
				paint = 'mond';
				scaleP = .25;
				break;
			case 5:
				paint = "poll";
				scaleP = .15;
				break;
			case 6:
				paint = 'mond';
				scaleP = .25;
				break;
			case 7:
				paint = "poll";
				scaleP = .15;
				break;
			case 8:
				paint = 'mond';
				scaleP = .25;
				break;

		}

		setTimeout(function () {
			allow_restart = true;
		}, 300);

		star = stars.create(550, game.world.height - heightStar, paint);
		star.scale.setTo(scaleP, scaleP);

		paintValue = value.shift();
		//alert(paintValue);
		paint_label.destroy();
		//paint_label = game.add.text(600, 300, '$'+ paintValue, { fontSize: '32px', fill: '#000' });




	}





	function  got_painting(){


		allow_restart=false;
		player.kill();
		star.kill();
		paint_label.destroy();

		score  = score + paintValue;
		wait_screen()
	}












}



/****************
* Questionnaire *
****************/

var Questionnaire = function() {

	var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your HIT. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

	record_responses = function() {

		psiTurk.recordTrialData({'phase':'postquestionnaire', 'status':'submit'});

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
                psiTurk.computeBonus('compute_bonus', function(){finish()}); 
			}, 
			error: prompt_resubmit
		});
	};

	// Load the questionnaire snippet 
	psiTurk.showPage('postquestionnaire.html');
	psiTurk.recordTrialData({'phase':'postquestionnaire', 'status':'begin'});
	
	$("#next").click(function () {
	    record_responses();
		currentview = playgame2();
	    //psiTurk.saveData({
         //   success: function(){
         //       psiTurk.computeBonus('compute_bonus', function() {
         //       	psiTurk.completeHIT(); // when finished saving compute bonus, the quit
         //       });
         //   },
         //   error: prompt_resubmit});
	});
    
	
};

var Questionnaire2 = function() {

	var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your HIT. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

	record_responses = function() {

		psiTurk.recordTrialData({'phase':'postquestionnaire', 'status':'submit'});

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
				psiTurk.computeBonus('compute_bonus', function(){finish()});
			},
			error: prompt_resubmit
		});
	};

	// Load the questionnaire snippet
	psiTurk.showPage('postquestionnaire.html');
	psiTurk.recordTrialData({'phase':'postquestionnaire', 'status':'begin'});

	$("#next").click(function () {
		record_responses();
		//currentview = playgame2();
		psiTurk.saveData({
		   success: function(){
		       psiTurk.computeBonus('compute_bonus', function() {
		       	psiTurk.completeHIT(); // when finished saving compute bonus, the quit
		       });
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
