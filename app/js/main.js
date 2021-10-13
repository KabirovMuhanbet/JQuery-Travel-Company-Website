$(function () {
   $('.banner__slider').slick({
      prevArrow: '<button class="slick-btn slick-prev"><span class="icon-arrow-left"></span></button>',
      nextArrow: '<button class="slick-btn slick-next"><span class="icon-arrow-right"></span></button>',
      responsive:[
         {
            breakpoint: 760,
            settings: {
              arrows: false,
              autoplay: true,
              autoplaySpeed: 2000,
            }
         },
      ]
   });
   
   $('.header__menu').on('click', function(){
      this.classList.toggle('header__opened');
      this.setAttribute('aria-expanded', this.classList.contains('header__opened'))
   })

   $('.header__menu').on('click', function(){
      $('.header__burger').toggleClass('burger__show');
   })

   $('.dropdown').on('click', function(){
      $('.dropdown__list').toggleClass('active');
      $('.arrow-down').toggleClass('d-none');
   });
    $('.dropdown__list-box').on('click', function(){
       let int = $(this).text();
       $('.dropdown__select-current').text(int);
    });

    $('.destinations__slider-inner').slick({
      autoplay: true,
      autoplaySpeed: 1000,
      slidesToShow: 3,
      arrows: false,
      dots: false,
      responsive:[{
            breakpoint: 768,
               settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               },
            breakpoint: 440,
               settings:{
                  slidesToShow: 1,
                  slidesToScroll: 1,
               }
         }]
    });

    $('.places__box-btn').on('click', function(){
      if($(this).text()!='-'){
         $(this).text('-');
      } else {
         $(this).text('+');
      }
    });

    $('.customers__slider-inner').slick({
      arrows: false,
      dots: true
    })
})