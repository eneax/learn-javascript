const randomPic = document.querySelector('.nice');
randomPic.classList.add('open');
randomPic.classList.remove('cool');
console.log(randomPic);

function toggleRound() {
  randomPic.classList.toggle('round');
  console.log(randomPic.classList.contains('round'));
}

console.log(randomPic.classList.contains('round'));
randomPic.addEventListener('click', toggleRound);
