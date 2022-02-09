$(function () {
  $('.slider__items').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slider__control slider__control_prev" href="#" >Наза<br />д</button>',
    nextArrow:
      '<button class="slider__control slider__control_next" href="#" >Впере<br />д</button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  });
});
