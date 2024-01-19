// Kaltsios + Chatzopoulos

const images = document.querySelectorAll(".banner-carousel-img");
let index = 1;
let previousIndex = index - 1;

// Home carousel
setInterval(changeCarouselImg, 7000);

function changeCarouselImg() {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");

    // If index is small than the total images the go to the next one, 
    // else got to the first
    index = index < images.length-1 ? index + 1 : index = 0;
    previousIndex = index == 0 ? images.length-1 : index-1;
}