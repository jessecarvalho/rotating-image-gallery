const images = document.querySelectorAll('.image');
const img_modal = document.querySelector('.modal .content img');
const modal = document.querySelector('.modal');
const btn_close_modal = document.querySelector('#close-modal');
const timer = 3000;

function initFunctions() {
    btn_close_modal.addEventListener("click", closeModal);
    modal.addEventListener("click", closeModal);
    window.addEventListener("resize", resizeScreen);
    initGallery();
    setInterval(rotateGallery, timer)
    for(let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", showModal);
    }
}

function initGallery() {
    for (let i = 0; i < images.length - 1; i++) {
        let image = images[i];
        let imageWidth = window.getComputedStyle(image).width;
        left = parseInt(imageWidth) * i;
        left = left + 'px';
        image.style.left = left;
    }
}

function resizeScreen() {
    initGallery();
}

function rotateGallery() {
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

initFunctions();