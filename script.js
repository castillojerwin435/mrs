const photos = [
  'couple1.jpg',
  'couple2.jpg',
  'couple3.jpg',
  'couple4.jpg',
  'couple5.jpg'
];

let current = 0;

function showPhoto(index) {
  const img = document.getElementById('slideshow');
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = photos[index];
    img.style.opacity = 1;
  }, 300);
}

function nextPhoto() {
  current = (current + 1) % photos.length;
  showPhoto(current);
}

function prevPhoto() {
  current = (current - 1 + photos.length) % photos.length;
  showPhoto(current);
}
