
var colors = generateRandomColors(numSquares);
var numSquares = 6;
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector ("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var modeButtons = document.getElementsByClassName("mode");

//  Changing the RGB Span to reflect the name of the RGB Auto Selected
colorDisplay.textContent = pickedColor;

init()

function init() {
   // mode buttons
   setupModeButtons ();
   setupSquares();
   reset();
}

function setupModeButtons() {
   for (let i = 0; i < modeButtons.length; i++) {
      modeButtons[i].addEventListener("click", function () {

         modeButtons[0].classList.remove("selected");
         modeButtons[1].classList.remove("selected");
         this.classList.add("selected");
         if (this.textContent === "Easy") {
            numSquares = 3
         } else {

            numSquares = 6;
         };
         reset();
      });
   };
};

function setupSquares() {
   for (let i = 0; i < squares.length; i++) {
      // style square
      squares[i].addEventListener("click", function () {

         var clickedColor = this.style.backgroundColor;

         if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
         } else {
            //  If the color clicked is not the RGB generated
            this.style.backgroundColor = "#0D0E11";
            messageDisplay.textContent = "Try Again"
         }
      });

   };
};

function reset() {
   
   colors = generateRandomColors(numSquares);
   // pick new random color
   pickedColor = pickColor();
   // change Color display to match picked color
   colorDisplay.textContent = pickedColor;
   // Blanks the Message
   resetButton.textContent = "New Colors";
   messageDisplay.textContent = "";

   // change colors of all squares
   for (let i = 0; i < squares.length; i++) {
      if (colors[i]) {
         squares[i].style.display = "block";
         squares[i].style.backgroundColor = colors[i];
      } else {
         squares[i].style.display = "none";
      }
   
   };
   h1.style.backgroundColor = "steelblue";

};

// Reset and New Colors Button 
resetButton.addEventListener("click", function () {
	reset();

});


// Function created to generate the random color Selection using 
// The function Random Color
function generateRandomColors(num) {
	// Array
	var array = [];
	for (let i = 0; i < num; i++) {
		array.push(randomColor());		
	}
	return array;
}

// The function that auto generates the Ramdon RGB using Math.Random
// from 1 to 255 with a floor to remove the decimal
function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

// The function created to pick the random Color RGB Index within the list of 6
// Using the Random Color Generate Function 
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function changeColors(color) {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color
	}
}

// Easy Option to show 3 squares only
// easyButton.addEventListener("click", function () {

// 	var clickedColor = this.style.backgroundColor
// 	easyButton.classList.add("selected");
// 	hardButton.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for (let i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
//          squares[i].style.display = "block"; 
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	};
// 	h1.style.backgroundColor = clickedColor

// });

// // Hard  Option to show 6 squares only
// hardButton.addEventListener("click", function () {
// 	var clickedColor = this.style.backgroundColor
// 	hardButton.classList.add("selected");
// 	easyButton.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();

// 	colorDisplay.textContent = pickedColor;

// 	for (let i = 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	};

// 	h1.style.backgroundColor = clickedColor
// });

