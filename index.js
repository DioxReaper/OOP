let animationInterval;
let x = 0;
let y = 0;
let directionX = 5; // this creates a direction for the image to move based on x and y
let directionY = 5; 

// retrieving the objects for use
const movingImage = document.getElementById("movingImage");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

//this is the event listener to make the click create the function
startButton.addEventListener("click", () => {
  if (!animationInterval) {
    animationInterval = setInterval(moveImage, 10);
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(animationInterval);
  animationInterval = null;
});

//this is the variables for each function in use along with the function itself
function moveImage() {
  const playground = document.getElementById("playground");
  const playgroundWidth = playground.clientWidth;
  const playgroundHeight = playground.clientHeight;
  const imageWidth = movingImage.clientWidth;
  const imageHeight = movingImage.clientHeight;

  // this moves the image
  x += directionX;
  y += directionY;

  // This makes sure it stays on the screen
  if (x + imageWidth >= playgroundWidth || x <= 0) {
    directionX *= -1; // Reverse direction
  }
  if (y + imageHeight >= playgroundHeight || y <= 0) {
    directionY *= -1; // Reverse direction
  }

  // Moves the image
  movingImage.style.left = `${x}px`;
  movingImage.style.top = `${y}px`;
}
