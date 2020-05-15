$(document).ready(function() {  
    // Слайдер акций на главной
    $('.js--main-stocks-slider').slick({
        infinite: false,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        slidesToScroll: 1
    });

    // Слайдер продуктов в публикации
    $('.js--products-from-publication').slick({
        infinite: false,
        slidesToShow: 4,
        prevArrow: $('.js--products-from-publication__prev'),
        nextArrow: $('.js--products-from-publication__next'),
        dots: false,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1
              }
            },
          ]
    });

    // Слайдер индивидуальных продуктов
    $('.js--individual-product-slider').slick({
        infinite: false,
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
        prevArrow: $('.js--product-slider__prev'),
        nextArrow: $('.js--product-slider__next'),
    });

    // Слайдер в продукте
    $('.js--product-sliders__project').slick({
        infinite: false,
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
        arrows: false,
        swipe: false,
        speed: 700,
        fade: true,
        prevArrow: $('.js--product-slider__prev'),
        nextArrow: $('.js--product-slider__next'),
        asNavFor: '.js--product-sliders__nav',
    });
    $('.js--product-sliders__nav').slick({
        infinite: false,
        slidesToShow: 5,
        dots: false,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,
        focusOnSelect: true,
        asNavFor: '.js--product-sliders__project',
        responsive: [
          {
            breakpoint: 993,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 769,
            settings: 'unslick'
          },
        ]
    });


    // Поиск в хедере
    $('.js--header-search').on('click', function(){
        $(this).toggleClass('active');
    });

    // Открывашка сайд-меню на мобилке
    $('.js--aside-nav__show-nav').on('click', function(){
        $('.js--aside-nav').toggleClass('active');
    });

    // Инициализация тултипов в продукте
    tippy('[data-tippy-content]');


});