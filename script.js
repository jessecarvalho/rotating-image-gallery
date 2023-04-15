
const images = document.querySelectorAll('.image');
let index = 0;
const img_modal = document.querySelector('.modal .content img');
const modal = document.querySelector('.modal');
const btn_close_modal = document.querySelector('#close-modal');

function rotateGallery() {
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  for (let i = 0; i < images.length - 1; i++) {
    let image = images[i];
    let left = window.getComputedStyle(image).left;
    let imageWidth = window.getComputedStyle(image).width;
    left = parseInt(left) + parseInt(imageWidth);
    left = left + 'px';
    if (parseInt(left) >= (parseInt(imageWidth) * (images.length - 1))) {
        left = 0;
     }
    image.style.left = left;
  }
}

function showModal() {
  modal.style.display = "flex";
  img_modal.setAttribute('src', this.dataset.image);
}

function closeModal() {
  modal.style.display = "none";
}

for(let i = 0; i < images.length; i++) {
  images[i].addEventListener("click",
       showModal);
}

btn_close_modal.addEventListener("click",
       closeModal);
modal.addEventListener("click",
       closeModal);

setInterval(rotateGallery, 3000)