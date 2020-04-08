$(function(){

    $(".rate-star").rateYo({
        ratihg: 5,
        starWidth: "12px",
        normalFill: "#ffa726",
        readOnly: true

    });

    $('.products-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    var mixer = mixitup('.products__inner-box');

   
    
});