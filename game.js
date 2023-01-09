// Set up constants for screen dimensions and ball size
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const ballSize = 50;

// Set up initial position and velocity of ball
let x = Math.random() * (screenWidth - ballSize);
let y = Math.random() * (screenHeight - ballSize);
let vx = 5;
let vy = 5;

// Set up constants for ball properties
const mass = 1;
const speed = 10;
const acceleration = 1;
const bounceForce = 0.7;

// Set up ball element
const ball = document.createElement('div');
ball.style.display = 'none';
ball.style.width = ballSize + 'px';
ball.style.height = ballSize + 'px';
ball.style.backgroundColor = 'red';
ball.style.borderRadius = '50%';
ball.style.position = 'absolute';

// Add ball to page
document.body.appendChild(ball);

// Animate ball by updating its position and velocity
const animateBall = () => {

  ball.style.display = 'block';

  // Update position based on velocity
  x += vx;
  y += vy;

  // Check if ball has reached screen borders and update velocity
  if (x + ballSize >= screenWidth || x <= 0) vx = -vx;
  if (y + ballSize >= screenHeight || y <= 0) vy = -vy;

  // Check for collisions with buttons
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    const buttonRect = button.getBoundingClientRect();
    if (x + ballSize > buttonRect.left && x < buttonRect.right && y + ballSize > buttonRect.top && y < buttonRect.bottom) {
      // Ball is colliding with button, so reverse its velocity
      vx = -vx;
      vy = -vy;
    }
  });

  // Set new position of ball
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';

  // Repeat animation every 10 milliseconds
  setTimeout(animateBall, 10);
};

// Set up play and stop buttons
const playButton = document.getElementById('play-button');
const stopButton = document.getElementById('stop-button');

// Add event listeners to buttons
playButton.addEventListener('click', animateBall);
stopButton.addEventListener('click', () => {
  vx = 0;
  vy = 0;
});

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = screenWidth;
canvas.height = screenHeight; 
const ctx = canvas.getContext('2d');
ctx.drawImage(ball, x, y);
const ballData = ctx.getImageData(x, y, ballSize, ballSize);
const objectData = ctx.getImageData(objectX, objectY, objectWidth, objectHeight);
for (let i = 0; i < ballData.data.length; i += 4) {
  const ballR = ballData.data[i];
  const ballG = ballData.data[i + 1];
  const ballB = ballData.data[i + 2];
  const ballA = ballData.data[i + 3];

  const objectR = objectData.data[i];
  const objectG = objectData.data[i + 1];
  const objectB = objectData.data[i + 2];
  const objectA = objectData.data[i + 3];

  if (ballA > 0 && objectA > 0) {
    // The two objects are colliding, so do something!
  }
}
