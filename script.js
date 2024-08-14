const sliderContainer = document.querySelector(".slider-container");
const slide = document.querySelectorAll(".slide");
const dots = document.querySelector(".dots");
let currentSlide = 0;
let maxSlide = slide.length;
// log

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
  activateDot(currentSlide);
});
btnLeft.addEventListener("click", function () {
  //Previous slide =
  //if (currentSlide === 0) {
  //   currentSlide = maxSlide - 1;
  // } else {
  //   currentSlide--;
  // }
  // slide.forEach(
  //(s, i) => (s.style.transform = `translateX(${100 * (i - slider)}%)`));
  prevSlide(currentSlide);
  activateDot(currentSlide);
});

slide.forEach((item, index) => {
  let html = `<button class="dot" data-index=${index}></button>`;
  dots.insertAdjacentHTML("beforeend", html);
});
const dot = document.querySelectorAll(".dot");
console.log(document.querySelector("[data-index='2']"));

function activateDot(slide) {
  dot.forEach(function (item) {
    item.classList.remove("active");
  });
  document.querySelector(`.dot[data-index='${slide}']`).classList.add("active");
}
activateDot(0);

dots.addEventListener("click", (e) => {
  activateDot(e.target.dataset.index);
  goToSlide(e.target.dataset.index);
});
