const sliderContainer = document.querySelector(".slider-container");
const slide = document.querySelectorAll(".slide");

let currentSlide = 0;
let maxSlide = slide.length;

const goToSlide = function (slider) {
  slide.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slider)}%)`)
  );
};

goToSlide(0);

function nextSlide() {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
}

function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") nextSlide(currentSlide);
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide(currentSlide);
});
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");

btnRight.addEventListener("click", function () {
  nextSlide(currentSlide);
});
btnLeft.addEventListener("click", function () {
  prevSlide(currentSlide);
});
