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
        prevArrow: $('.js--individual-product-slider__prev'),
        nextArrow: $('.js--individual-product-slider__next'),
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

    // Слайдер в комлекте
    $('.js--product-kit-slider__project').slick({
        infinite: false,
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
        arrows: false,
        swipe: false,
        speed: 700,
        fade: true,
        prevArrow: $('.js--product-kit-slider__prev'),
        nextArrow: $('.js--product-kit-slider__next'),
        asNavFor: '.js--product-kit-slider__nav',
    });
    $('.js--product-kit-slider__nav').slick({
        infinite: false,
        slidesToShow: 4,
        dots: false,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,
        focusOnSelect: true,
        asNavFor: '.js--product-kit-slider__project',
        responsive: [
          {
            breakpoint: 769,
            settings: 'unslick'
          },
        ]
    });

    // Слайдер вакансий
    $('.js--vacancies-slider').slick({
        infinite: false,
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
        arrows: false,
    });

    // Слайдер практики и стажировки
    $('.js--practice-internship-slider').slick({
        infinite: false,
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
        arrows: false,
    });
    // Слайдер истории
    $('.js--history-slider').slick({
        infinite: false,
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.js--history-slider__prev'),
        nextArrow: $('.js--history-slider__next'),
    });
    $(".history-timeline__list-item").click(function(e){
      e.preventDefault();

      if(!$(this).hasClass('active')) {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
      }

      slideIndex = $(this).index();
      $('.js--history-slider').slick('slickGoTo', parseInt(slideIndex));
    });

    // counter
    function plusCounter(element){
      let input = $(element).closest('div').find('input');
      input.val(parseInt(input.val())+1);
      input.change();
    }
    
    function minusCounter(element){
        let input = $(element).closest('.counter').find('input');
        if (parseInt(input.val()) > 1) {
            input.val(parseInt(input.val())-1);
            input.change();
        }
    }
    
    $(document).on('click','.counter__more', function() {
        plusCounter(this);
        return false;
    });
    
    $(document).on('click','.counter__less', function() {
        minusCounter(this);
        return false;
    });

    // Раскрывашки в вакансиях
    $(".vacancies-list-item__detail").click(function(e){
      if(!$(this).closest('.vacancies-list-item').hasClass('active')) {
        $(this).closest('.vacancies-list-item').siblings().removeClass('active');
        $(this).closest('.vacancies-list-item').addClass('active');
      }
    });
    $(".vacancies-list-item__close a").click(function(e){
      $(this).closest('.vacancies-list-item').removeClass('active');
    });

    // Поиск в хедере
    $('.js--header-search').on('click', function(){
        $(this).toggleClass('active');
    });

    // Развернуть заказ в оформлении
    $('.js--order-table-opener').on('click', function(){
        $('.js--order-table-wrapper').toggleClass('active');
    });

    // Открывашка сайд-меню на мобилке
    $('.js--aside-nav__show-nav').on('click', function(){
        $('.js--aside-nav').toggleClass('active');
    });

    // Переключатели в оформлении заказа
    $('.js--formalization-delivery-switch').on('click', function(){
        if($('.js--formalization-delivery-switch input').prop('checked')) {
          $('.js--formalization-delivery').addClass('active');
        } else {
          $('.js--formalization-delivery').removeClass('active');
        }
    });


    $('.js--formalization-storage-switch').on('click', function(){

        if($('.js--formalization-storage-switch input').prop('checked')) {
          $('.js--formalization-storage').addClass('active');

          // Слайдер даты в оформлении заказа
          $('.js--formalization-of-order-storage__slider').slick({
            infinite: false,
            slidesToShow: 16,
            dots: false,
            slidesToScroll: 1,
            prevArrow: $('.js--formalization-of-order-storage__slider-prev'),
            nextArrow: $('.js--formalization-of-order-storage__slider-next'),
            responsive: [
              {
                breakpoint: 1281,
                settings: {
                  slidesToShow: 14
                }
              },
              {
                breakpoint: 1201,
                settings: {
                  slidesToShow: 12
                }
              },
              // Виснет страница, если добавлять больше брейкпоинтов. Пока не нашёл решение
              // {
              //   breakpoint: 880,
              //   settings: {
              //     slidesToShow: 10
              //   }
              // },
              // {
              //   breakpoint: 780,
              //   settings: {
              //     slidesToShow: 8
              //   }
              // },
            ]
          });
        } else {
          $('.js--formalization-storage').removeClass('active');
          $('.js--formalization-of-order-storage__slider').slick('unslick');
        }
    });

    // MMenu
    let $menu = $("#mobile-burger-menu").mmenu({
        "navbars": [
            {
                "position": "top",
                "content": [
                    `<div class="mobile-menu__header">
                        <a class="mobile-menu__logo" href="index.html">
                            <img src="assets/img/logo.png" alt="Логотип ПТЖБ">
                        </a>
                        <a class="mobile-menu__header-close js--mobile-menu__header-close" href="javascript:;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                        </a>
                    </div>`
                ]
            }
        ],
        "extensions": [
            "fullscreen",
            "position-front",
            "position-top",
            "border-full"
        ],
        "navbar": {
          title: "Меню"
        }
    });


    let $icon = $(".js--burger");
    let API = $menu.data("mmenu");
    $(document).on('click','.js--mobile-menu__header-close',function(){
        API.close();
    });

    $icon.on("click", function () {
        API.open();
    });


    API.bind("opened", function () {
        setTimeout(function () {
            $icon.addClass("is-active");
        }, 10);
        $icon.on("click", function () {
            API.close();
        });
    });

    API.bind("closed", function () {
        setTimeout(function () {
            $icon.removeClass("is-active");
        }, 10);
        $icon.on("click", function () {
            API.open();
        });
    });

    // Инициализация селектов
    $('.js--select-search').select2();

    // Инициализация тултипов в продукте
    tippy('[data-tippy-content]');
});