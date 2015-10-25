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
	"instructions/instruct-ready.html",
	"stage.html",
	"postquestionnaire.html"
];

psiTurk.preloadPages(pages);

var instructionPages = [ // add as a list as many pages as you like
	"instructions/instruct-1.html",
	"instructions/instruct-2.html",
	"instructions/instruct-3.html",
	"instructions/instruct-ready.html"
];

var round = 0;

function playgame() {

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
	psiTurk.showPage('stage.html');

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
var score = 0;
var scoreText;



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

//    //  Now let's create two ledges
//    var ledge = platforms.create(Math.random() * (game.world.width - 300), game.world.height - 100, 'ground');
//	ledge.scale.setTo(.1, 1);
//	//ledge.body.gravity.y = 300;
//	ledge.body.immovable = true;
//	//
//	var ledge = platforms.create(Math.random() * (game.world.width - 300), game.world.height - 100, 'ground');
//	ledge.scale.setTo(.1, 1);
//	ledge.body.immovable = true;
//
//	var ledge = platforms.create(Math.random() * (game.world.width - 300), game.world.height - 100, 'ground');
//	ledge.scale.setTo(.1, 1);
//	ledge.body.immovable = true;
//
//	var ledge = platforms.create(Math.random() * (game.world.width - 300), game.world.height - 100, 'ground');
//	ledge.scale.setTo(.1, 1);
//	ledge.body.immovable = true;




//
//    ledge = platforms.create(-150, 250, 'ground');
//    ledge.body.immovable = true;

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
	var star = stars.create(550, game.world.height - 500, 'star');

	//  Let gravity do its thing
	star.body.gravity.y = 300;

	//  This just gives each star a slightly random bounce value
	star.body.bounce.y = 0;
//    }

	//  The score
	//scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

	//  Our controls.
	cursors = game.input.keyboard.createCursorKeys();

}

function update() {

	//  Collide the player and the stars with the platforms
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(stars, platforms);
	game.physics.arcade.collide(platforms, platforms);

	//  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
	game.physics.arcade.overlap(player, stars, collectStar, null, this);

	//  Reset the players velocity (movement)
	player.body.velocity.x = 0;

	var flapKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	flapKey.onDown.add(moveright);
//
	function moveright() {
		player.body.velocity.x = Math.random()*1000;
		player.frame= 6;
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

	//  Allow the player to jump if they are touching the ground.
	if (cursors.up.isDown && player.body.touching.down)
	{
		player.body.velocity.y = -605;
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

	////  Add and update the score
     //               score += 10;
     //               scoreText.text = 'Score: ' + score;

	//game.paused = true;

	var w = 800, h = 600;

	// Then add the menu
	//menu = game.add.sprite(w/2, h/2, 'menu');
	//menu.anchor.setTo(0.5, 0.5);

	// And a label to illustrate which menu item was chosen. (This is not necessary)

	if(round==0){

		choiseLabel = game.add.text(w/2, h-450, 'You have the chance to buy this painting! How much do you want to bid?', { font: '30px Arial', fill: '#fff' });
		choiseLabel.anchor.setTo(.5,.5);
		choiseLabel.wordWrap = true;
		choiseLabel.wordWrapWidth = 400;
		optionlabel = game.add.text(w/2, h-150, '$300      $400       $500', { font: '30px Arial', fill: '#fff' });
		optionlabel.anchor.setTo(.5,.5);
		mond = game.add.sprite(w/2, h/2, 'mond');
		mond.anchor.setTo(0.5, 0.5);
		mond.scale.setTo(0.25,0.25);

		optionlabel.inputEnabled = true;
		optionlabel.events.onInputUp.add(function () {

			currentview = new playgame();

		});

		round = round +1;


	}else {
		choiseLabel = game.add.text(w / 2, h - 450, 'You found this painting! How much would you like to sell it for?', {
			font: '30px Arial',
			fill: '#fff'
		});
		choiseLabel.anchor.setTo(.5, .5);
		choiseLabel.wordWrap = true;
		choiseLabel.wordWrapWidth = 400;
		optionlabel = game.add.text(w / 2, h - 150, '$300      $400       $500', {font: '30px Arial', fill: '#fff'});
		optionlabel.anchor.setTo(.5, .5);
		mond = game.add.sprite(w / 2, h / 2, 'poll');
		mond.anchor.setTo(0.5, 0.5);
		mond.scale.setTo(0.15, 0.15);

		optionlabel.inputEnabled = true;
		optionlabel.events.onInputUp.add(function () {

			currentview = new Questionnaire();


		});
	}








	//$("body").unbind("keydown", response_handler); // Unbind keys




}

	//psiTurk.showPage('stage.html');
}


	/********************
* HTML manipulation
*
* All HTML files in the templates directory are requested 
* from the server when the PsiTurk object is created above. We
* need code to get those pages from the PsiTurk object and 
* insert them into the document.
*
********************/

/********************
* STROOP TEST       *
********************/
var StroopExperiment = function() {


	var wordon, // time word is presented
	    listening = false;

	// Stimuli for a basic Stroop experiment
	var stims = [
			["SHIP", "red", "unrelated"],
			["MONKEY", "green", "unrelated"],
			["ZAMBONI", "blue", "unrelated"],
			["RED", "red", "congruent"],
			["GREEN", "green", "congruent"],
			["BLUE", "blue", "congruent"],
			["GREEN", "red", "incongruent"],
			["BLUE", "green", "incongruent"],
			["RED", "blue", "incongruent"]
		];

	stims = _.shuffle(stims);

	var next = function() {
		if (stims.length===0) {
			finish();
		}
		else {
			stim = stims.shift();
			show_word( stim[0], stim[1] );
			wordon = new Date().getTime();
			listening = true;
			d3.select("#query").html('<p id="prompt">Type "R" for Red, "B" for blue, "G" for green.</p>');
		}
	};

	var response_handler = function(e) {
		if (!listening) return;

		var keyCode = e.keyCode,
			response;

		switch (keyCode) {
			case 82:
				// "R"
				response="red";
				break;
			case 71:
				// "G"
				response="green";
				break;
			case 66:
				// "B"
				response="blue";
				break;
			default:
				response = "";
				break;
		}
		if (response.length>0) {
			listening = false;
			var hit = response == stim[1];
			var rt = new Date().getTime() - wordon;

			psiTurk.recordTrialData({'phase':"TEST",
                                     'word':stim[0],
                                     'color':stim[1],
                                     'relation':stim[2],
                                     'response':response,
                                     'hit':hit,
                                     'rt':rt}
                                   );
			remove_word();
			next();
		}
	};

	var finish = function() {
	    $("body").unbind("keydown", response_handler); // Unbind keys
	    currentview = new Questionnaire();
	};

	var show_word = function(text, color) {
		d3.select("#stim")
			.append("div")
			.attr("id","word")
			.style("color",color)
			.style("text-align","center")
			.style("font-size","150px")
			.style("font-weight","400")
			.style("margin","20px")
			.text(text);
	};

	var remove_word = function() {
		d3.select("#word").remove();
	};


	// Load the stage.html snippet into the body of the page
	psiTurk.showPage('stage.html');

	// Register the response handler that is defined above to handle any
	// key down events.
	$("body").focus().keydown(response_handler);

	// Start the test
	next();
};


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
