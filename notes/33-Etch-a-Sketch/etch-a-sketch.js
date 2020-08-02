// ! Select canvas
const canvas = document.querySelector('#etch-a-sketch');

// canvas is the element, but the place where we do our drawing is the context (in our case it's a 2d context)
const ctx = canvas.getContext('2d');

// set constant move amount
const MOVE_AMOUNT = 10;

// ! select shake button
const shakeButton = document.querySelector('.shake');

// ! Setup our canvas for drawing

// generate random x and y as starting points on canvas
const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// ensures we get a smooth drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

// set random color for drawing
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

// start the drawing
ctx.beginPath();

// makes an invisible line
ctx.moveTo(x, y);
ctx.lineTo(x, y);

// draw a line from where you started to where you moved to
ctx.stroke();

// ! Write a draw function
function draw({ key }) {
  console.log(key);
  // increment the hue
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;

  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move our x and y values depending on what the user did
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;

    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// ! Write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

// ! Clear or shake function
function clearCanvas() {
  // add shake animation
  canvas.classList.add('shake');

  // clear the all canvas (from top left to bottom right)
  ctx.clearRect(0, 0, width, height);

  // remove animation event
  canvas.addEventListener(
    'animationend',
    function() {
      console.log('done the shakiiiing');
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

// ! Listen for arrow keys
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);
