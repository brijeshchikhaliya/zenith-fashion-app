const swiper = new Swiper(".service-blog-swiper", {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  // pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    // when window width is >= 320px
    767: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
  },
});
