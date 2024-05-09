const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
