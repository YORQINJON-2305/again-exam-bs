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
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: "<div><span><svg width=\"17\" height=\"17\" viewBox=\"0 0 17 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" + "<path d=\"M16.1614 7.60133H4.47533L9.84307 2.23359L8.47953 0.879654L0.797607 8.56157L8.47953 16.2435L9.83347 14.8896L4.47533 9.52182H16.1614V7.60133Z\" fill=\"currentColor\"/>\n" + "</svg></span></div>",
        nextArrow: "<div><span><svg width=\"16\" height=\"17\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" + "<path d=\"M7.73514 0.879623L6.38121 2.23356L11.7393 7.6013H0.0532227V9.52178H11.7393L6.38121 14.8895L7.73514 16.2435L15.4171 8.56154L7.73514 0.879623Z\" fill=\"currentColor\"/>\n" + "</svg>\n</span></div>",
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
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 1,
                    prevArrow: false,
                    nextArrow: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow:1,
                    prevArrow: false,
                    nextArrow: false
                }
            }
        ]
    });
});



// $(function () {
//     $('.customer-list').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         prevArrow: "<div><span><svg width=\"17\" height=\"17\" viewBox=\"0 0 17 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
//             "<path d=\"M16.1614 7.60133H4.47533L9.84307 2.23359L8.47953 0.879654L0.797607 8.56157L8.47953 16.2435L9.83347 14.8896L4.47533 9.52182H16.1614V7.60133Z\" fill=\"currentColor\"/>\n" +
//             "</svg></span></div>",
//         nextArrow: "<div><span><svg width=\"16\" height=\"17\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
//             "<path d=\"M7.73514 0.879623L6.38121 2.23356L11.7393 7.6013H0.0532227V9.52178H11.7393L6.38121 14.8895L7.73514 16.2435L15.4171 8.56154L7.73514 0.879623Z\" fill=\"currentColor\"/>\n" +
//             "</svg>\n</span></div>",
//         autoplay: true,
//         dots: true,
//         autoplaySpeed: 3000,
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     centerMode: true,
//                     centerPadding: '0',
//                     slidesToShow: 3
//                 }
//             },
//             {
//                 breakpoint: 992,
//                 settings: {
//                     centerMode: true,
//                     centerPadding: '0',
//                     slidesToShow: 2
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     prevArrow: false,
//                     nextArrow: false,
//                     slidesToShow: 2
//                 }
//             },
//             {
//                 breakpoint: 640,
//                 settings: {
//                     centerMode: true,
//                     centerPadding: '0',
//                     prevArrow: false,
//                     nextArrow: false,
//                     slidesToShow: 1
//                 }
//             },
//             {
//                 breakpoint: 580,
//                 settings: {
//                     centerMode: true,
//                     centerPadding: '0',
//                     prevArrow: false,
//                     nextArrow: false,
//                     slidesToShow: 1
//                 }
//             }
//         ]
//       });
// });