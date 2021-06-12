/**
 * Ceated by Original Author (Lapide)
 * the debugger isn't fixed yet, you can try to fix it if you wan't! :D
 */


function rockPaperHard(type) {
	var what = type.toLowerCase();
	var types = ['1', 'rock', 'paper', 'scissors'];
	var i = types[Math.floor(Math.random() * types.length + 1)];
	if (what == i) {
		return ("Draw!");
	} else if (what == 'paper') {
		if (i == 'scissors') {
			return ("You Lost!");
		} else if (i == 'rock') {
			return ("You Won!");
			//win();
		} else {
			return "You Lost!";
		}
	} else if (what == 'scissors') {
		if (i == 'paper') {
			return ("You Won!");
			//win();
		} else if (i == 'rock') {
			return ("You Lost!");
		} else {
			return "You Lost!";
		}
	} else if (what == 'rock') {

		if (i == 'scissors') {
			return ("You Won!");
			//win();
		} else if (i == 'paper') {
			return ("You Lost!");
		} else {
			return "You Lost!";
		}
	} else {
		return 'Unknown type! Please use:\nrock\npaper\nscissors\n\nFor it to work!'
		console.log('Unknown type! Please use:\nrock\npaper\nscissors\n\nFor it to work!');
	}
}

function rockPaperNormal(type) {
	var what = type.toLowerCase();
	var types = ['rock', 'paper', 'scissors'];
	var i = types[Math.floor(Math.random() * types.length + 2 - 1)];
	if (what == i) {
		return ("Draw!");
	} else if (what == 'paper') {
		if (i == 'scissors') {
			return ("You Lost!");
		} else if (i == 'rock') {
			return ("You Won!");
			//win()
		} else {
			return "You Lost!";
		}
	} else if (what == 'scissors') {
		if (i == 'paper') {
			return ("You Won!");
			//win();
		} else if (i == 'rock') {
			return ("You Lost!");
		} else {
			return "You Lost!";
		}
	} else if (what == 'rock') {

		if (i == 'scissors') {
			return ("You Won!");
			//win();
		} else if (i == 'paper') {
			return ("You Lost!");
		} else {
			return "You Lost!";
		}
	} else {
		return 'Unknown type! Please use:\nrock\npaper\nscissors\n\nFor it to work!'
		console.log('Unknown type! Please use:\nrock\npaper\nscissors\n\nFor it to work!');
	}
}


function rockPaperImpossible(type) {
	var what = type.toLowerCase();
	var types = ['rock', '1', '1', '1', '1', '1', '1', 'paper', 'scissors'];
	var i = types[Math.floor(Math.random() * types.length + 1 / 2)];
	if (what == i) {
		return ("Draw!");
	} else if (what == 'paper') {
		if (i == 'scissors') {
			return ("You Lost!");
		} else if (i == 'rock') {
			return ("You Won!");
			//win()
		} else {
			return "You Lost!";
		}
	} else if (what == 'scissors') {
		if (i == 'paper') {
			return ("You Won!");
			//win()
		} else if (i == 'rock') {
			return ("You Lost!");
		} else {
			return "You Lost!";
		}
	} else if (what == 'rock') {

		if (i == 'scissors') {
			return ("You Won!");
			//win()
		} else if (i == 'paper') {
			return ("You Lost!");
		} else {
			return "You Lost!";
		}
	} else {
		return 'Unknown type! Please use:\nrock\npaper\nscissors\n\nFor it to work!'
		console.log('Unknown type! Please use:\nrock\npaper\nscissors\n\nFor it to work!');
	}
}

function rockPaperEasy(type) {
	var what = type.toLowerCase();
	var types = ['rock', 'paper', 'scissors'];
	var i = types[Math.floor(Math.random() * types.length)];
	if (what == i) {
		return ("Draw!");
	} else if (what == 'paper') {
		//win()
		if (i == 'scissors') {
			return ("You Lost!");
		} else if (i == 'rock') {
			return ("You Won!");
			//win()
		} else {
			return "You Lost!";
		}
	} else if (what == 'scissors') {
		if (i == 'paper') {
			return ("You Won!");
			//win()
		} else if (i == 'rock') {
			return ("You Lost!");
		} else {
			return "You Lost!";
		}
	} else if (what == 'rock') {

		if (i == 'scissors') {
			return ("You Won!");
			//win()
		} else if (i == 'paper') {
			return ("You Lost!");
		} else {
			return "You Lost!";
		}
	} else {
		return 'Unknown type! Please use:\nrock\npaper\nscissors\n\nFor it to work!'
		console.log('Unknown type! Please use:\nrock\npaper\nscissors\n\nFor it to work!');
	}
}

function confirm(message) {
	var application = Application.currentApplication();
	application.includeStandardAdditions = true
	var t = application.displayDialog(message, {
		buttons: ["Ok", "Cancel"],
		defaultButton: "Ok"
	});

	return t;
}

function alert(message) {
	var application = Application.currentApplication();
	application.includeStandardAdditions = true
	var t = application.displayDialog(message, {
		buttons: ["Ok"],
		defaultButton: "Ok",
	});
	return t;
}

function prompt(message, ans) {
	var application = Application.currentApplication();
	application.includeStandardAdditions = true
	if (ans) {
		var t = application.displayDialog(message, {
			buttons: ["Ok"],
			defaultButton: "Ok",
			defaultAnswer: ans
		});
		return t.textReturned;
	} else {
		var application = Application.currentApplication();
		application.includeStandardAdditions = true
		var t = application.displayDialog(message, {
			buttons: ["Ok"],
			defaultButton: "Ok",
			defaultAnswer: ""
		});
		return t.textReturned;
	}
}
var doN = true;
var doN1 = true;

function gotoDebugger() {
	var i = prompt(prefix + "help for commands.", prefix + 'help');
	ExecuteCommand(i);
	var l = confirm("Do you wan't to run another command or go back?");
	if (l) {
		gotoDebugger();
	} else {
		run()
	}
}

function run() {
	if (doN) {
		this.difficulty = prompt("Choose a difficulty:\nimpossible\nhard\nnormal\neasy");
		if (difficulty == 'hard' || difficulty == 'normal' || difficulty == 'easy' || difficulty == 'impossible' || difficulty == 'debugger') {
			doN1 = false;
			doN = false
		}
	}
	if (difficulty == 'hard' || difficulty == 'normal' || difficulty == 'easy' || difficulty == 'debugger' || difficulty == 'impossible') {
		if (!difficulty == 'debugger') var rockpaperscissors = prompt(`Rock Paper Scissors!`);
		if (difficulty == 'easy') alert(rockPaperEasy(rockpaperscissors));
		if (difficulty == 'hard') alert(rockPaperHard(rockpaperscissors));
		if (difficulty == 'impossible') alert(rockPaperImpossible(rockpaperscissors));
		if (difficulty == 'normal') alert(rockPaperNormal(rockpaperscissors));
		if (difficulty == 'debugger') gotoDebugger();
		if (!difficulty == 'debugger') var f = confirm("Do you wan't to play again?");
		if (f) {
			run();
		}
	} else {
		if (doN1) {
			var b = confirm("Please choose a difficulty!");
			if (b) {
				run()
			}
		}
	}
}

function ExecuteJavascript(js) {
	return eval(js);
}

var prefix = '';

function ExecuteCommand(command) {
	var cmd = command.toLowerCase().substring(prefix.length).split(" ");

	// The code is simple, if command is: "help" it'll execute something, such as help commands.

	switch (cmd[0]) {
		case "help":
			return String.raw`
		    ${prefix}help : Shows help commands
            ${prefix}system js : Execute javascript
		  `
			break;
		case "system":
			switch (cmd[1]) {
				case "js":
					return "Executed Javascript:\n" + ExecuteJavascript(cmd.replace(`${prefix}system js `, ''));
					break;
			}
			break;
	}
}
