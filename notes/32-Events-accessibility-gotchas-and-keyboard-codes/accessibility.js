const randomPic = document.querySelector('.randomPic');

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('You clicked the random pic');
  }
}

randomPic.addEventListener('click', handlePhotoClick);
randomPic.addEventListener('keyup', handlePhotoClick);
