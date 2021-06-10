function rockPaper(type) {
   var what = type.toLowerCase();
   var types=['rock', 'paper', 'scissors'];
   var i = types[Math.floor(Math.random(10) * types.length)];
   if (what == i) {
     return ("Draw!");
   } else if (what == 'paper') {
      if (i == 'scissors') {
	     return ("You Lost!");
	  } else if (i == 'rock'){
	     return ("You Won!");
	  }
   } else if (what == 'scissors') {
      if (i == 'paper') {
	     return ("You Won!");
	  } else if (i == 'rock'){
	     return ("You Lost!");
	  } else if (what == 'rock') {
         
      if (i == 'scissors') {
	     return ("You Won!");
	  } else if (i == 'paper'){
	    return ("You Lost!");
	  }
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
if (ans) {var t = application.displayDialog(message, {
buttons: ["Ok"],
defaultButton: "Ok",
defaultAnswer:ans
});
return t;
} else {
var application = Application.currentApplication();
application.includeStandardAdditions = true
var t = application.displayDialog(message, {
buttons: ["Ok"],
defaultButton: "Ok",
defaultAnswer:""
});
return t;
}
}

function run() {
   var rockpaperscissors = prompt('Rock Paper Scissors!');
   alert(rockPaper(rockpaperscissors.textReturned));
   var f = confirm("Do you wan't to play again?");
   if (f) {
    run();
   }
}
