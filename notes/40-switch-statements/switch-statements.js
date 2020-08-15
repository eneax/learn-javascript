const turtle = document.querySelector('.turt');

let x = 0;
let y = 0;
const speed = 50;
let flipped = false;
let rotate = 0;

function handleKeyDown(event) {
  // if its not an arrow key, we don't care
  if (!event.key.includes('Arrow')) {
    return;
  }
  switch (event.key) {
    case 'ArrowUp':
      y -= 1;
      rotate = -90;
      break;
    case 'ArrowDown':
      y += 1;
      rotate = 90;
      break;
    case 'ArrowLeft':
      x -= 1;
      rotate = 0;
      flipped = true;
      break;
    case 'ArrowRight':
      x += 1;
      rotate = 0;
      flipped = false;
      break;
    default:
      console.log('That is not a valid move');
      break;
  }

  turtle.setAttribute(
    'style',
    `
      --rotateX: ${flipped ? '180deg' : '0'};
      --x: ${x * speed}px;
      --y: ${y * speed}px;
      --rotate: ${rotate}deg;
    `
  );
}

window.addEventListener('keydown', handleKeyDown);
