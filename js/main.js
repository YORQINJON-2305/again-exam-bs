const elHeader = document.querySelector(".site-header");
const elBurger = document.querySelector(".burger-btn");
const elHero = document.querySelector(".hero");
const elWatchBtn = document.querySelector(".hero-link-btn");
const elWatchCloseBtn = document.querySelector(".iframe-close")


elBurger.addEventListener("click", function (){
    elHeader.classList.toggle("active");
})

elWatchBtn.addEventListener("click", function (){
    elHero.classList.add("active");
})

elWatchCloseBtn.addEventListener("click", function (){
    elHero.classList.remove("active");
})



$(function () {
    $('.customer-list').slick({
        infinite: true,
        slidesToShow: 3,
        lazyLoad: 'ondemand',
        slidesToScroll: 1,
        prevArrow: "<span><img src='../images/left-arrow.svg' alt='Left arrow'></span>",
        nextArrow: "<span><img src='../images/right-arrow.svg' alt='Right arrow'></span>",
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 1,
                    prevArrow: false,
                    nextArrow: false,
                }
            }
        ]
      });
});