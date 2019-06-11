let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let displayColor = document.getElementById("display-color");
let messageDisp = document.querySelector("#display-message");
let h1 = document.querySelector("h1");
let header = document.querySelector("#header");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easy-btn");
let hardBtn = document.querySelector("#hard-btn");
let pickedColor = pickRandomColor();

easyBtn.addEventListener("click", function() {
  this.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickRandomColor();
  displayColor.textContent = pickedColor;
  for(let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i]
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function() {
  this.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickRandomColor();
  displayColor.textContent = pickedColor;
  for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function() {
  resetButton.textContent = "Reset";
  // Generate all new colors.
  colors = generateRandomColors(numSquares);
  // Pick a new random color from array.
  pickedColor = pickRandomColor();
  // Change displayColor to match picked color.
  displayColor.textContent = pickedColor;
  // Change colors of squares.
  for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  messageDisp.textContent = "" 
  h1.style.backgroundColor = "steelblue";
})

displayColor.textContent = pickedColor;

for(let i = 0; i < squares.length; i++) {
  // Add colors to squares
  squares[i].style.backgroundColor = colors[i];

  // Add events to squares
  squares[i].addEventListener("click", function() {
    // Store clicked color to a variable
    let clickedColor =  this.style.backgroundColor;

    // Compare clicked color to the color of 
    // pickedColor variable.
    if (clickedColor === pickedColor) {
      // Player wins.
      messageDisp.textContent = "You got it !!"
      h1.style.backgroundColor = clickedColor;
      changeSquareColors(clickedColor);
      resetButton.textContent = "Play Again?"
      // Player guesses wrong.
    } else {
      this.style.backgroundColor = "#232323";
      messageDisp.textContent = "Try again!"
    }
  })
}

// Chnages all the squares to the same color when player wins.
function changeSquareColors(color) {
  for(let i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

// Chooses one color from the colors array (randomly).
function pickRandomColor() {
  let index = Math.floor(Math.random() * colors.length);
  return colors[index]
}

// Generates multiple random colors from the randomColors()  
// and stores random colors in an array.
function generateRandomColors(value) {
  let array = []
  for(let i = 0; i < value; i++) {
    array.push(randomColors());
  }
  return array;
}

// Generates one random color.
function randomColors() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}