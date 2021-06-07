$(function () {
   $('.header__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      adaptiveHeight: true,
      autoplaySpeed: 2000,

   });

   $('.comments__slider-img').slick({
      prevArrow: '<button class="slick-btn slick-prev"><img src="images/icon/arrow-prev.png" alt="prev"></button>',
      nextArrow: '<button class="slick-btn slick-next"><img src="images/icon/arrow-next.png" alt="next"></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.comments__slider-text',
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
         {
            breakpoint: 769,
            settings: {
               arrows: false,
               autoplay: false,
            }
         },
      ]
   });

   $('.comments__slider-text').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.comments__slider-img',
      fade: true,
      arrows: false,
   });

   $('.team__items-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
     
   });

   $('.about__img-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,

   });

   $('.menu__btn').on('click', function () {
      $('.menu__list').toggleClass('menu__list--active');
   });

   new WOW().init();

  

});