'use strict';

$(document).ready(function () {
    $('.product-carousel__wrapper').slick({
        dots: false,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });

    $('.slider-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-thumb'
    });
    $('.slider-thumb').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-content',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true
    });

    // Get the slide count of the content slider
    var slideCount = $('.slider-content').slick('getSlick').slideCount;
    console.log('Count' + slideCount);

    // Set the updated slidesToShow value for the thumbnail slider
    $('.slider-thumb').slick('slickSetOption', 'slidesToShow', slideCount - 1, true);
});
