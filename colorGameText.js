var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector ("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var modeButtons = document.getElementById("mode");

//  Changing the RGB Span to reflect the name of the RGB Auto Selected
colorDisplay.textContent = pickedColor;

for (let i = 0; i < modeButtons.length; i++) {

	modeButtons[i].addEventListener("click", function () {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
	});
	
};


})
// The game that is being played and the Winning and Try Again Sections. 

for (let i = 0; i < squares.length; i++) {
	// style square
	squares[i].style.backgroundColor = colors[i];
	// Click listener to Square
	squares[i].addEventListener("click", function () {
		// variable for selected square
		var clickedColor = this.style.backgroundColor;
		//  if the square chosen is the clicked on color
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



// // Easy Option to show 3 squares only
// easyButton.addEventListener("click", function () {

// 	var clickedColor = this.style.backgroundColor;

// 	easyButton.classList.add("selected");

// 	hardButton.classList.remove("selected");

// 	colors = generateRandomColors(numSquares);
// 	numSquares = 3;

// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
	
// 	for (let i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		};
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


// Reset and New Colors Button 
resetButton.addEventListener("click", function () {
	// Creating the variable to selected the correct chosen color
	h1.style.backgroundColor = "steelblue";
	// generate new colors
	colors = generateRandomColors(numSquares);
	// pick new random color
	pickedColor = pickColor();
	// change Color display to match picked color
	colorDisplay.textContent = pickedColor;
	// Blanks the Message
	messageDisplay.textContent = "";

	// change colors of all squares
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	};

	this.textContent = "New Colors";

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


