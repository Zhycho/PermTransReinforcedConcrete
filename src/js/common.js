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
        arrows: false,
        dots: false,
        slidesToScroll: 1,
        prevArrow: $('.js--individual-product-slider__prev'),
        nextArrow: $('.js--individual-product-slider__next'),
    });


    // Поиск в хедере
    $('.js--header-search').on('click', function(){
        $(this).toggleClass('active');
    });

    // Открывашка сайд-меню на мобилке
    $('.js--aside-nav__show-nav').on('click', function(){
        $('.js--aside-nav').toggleClass('active');
    });



});