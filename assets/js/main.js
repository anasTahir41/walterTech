'use strict';

$(document).ready(function () {
    $('.js-main-banner').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: '.js-slick-dots',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
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

    $('.slider__wrapper').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
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

    $('.carousel__wrapper').slick({
        dots: true,
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
                    infinite: true,
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

    $('#list-view').click(function(){
        if ($('.c-products .c-products__list').hasClass('grid-view')) {
            $('.c-products .c-products__list').removeClass('grid-view');
            $('.c-products .c-products__list').addClass('list-view');
        }
    });
    $('#grid-view').click(function(){
        if ($('.c-products .c-products__list').hasClass('list-view')) {
            $('.c-products .c-products__list').removeClass('list-view');
            $('.c-products .c-products__list').addClass('grid-view');
        }
    });

    function searchSuggestionsShow() {
        var searchSuggestions = $('#js-search-suggestions');
        $(document).on('click', '.js-search-suggestions-field', function () {
            searchSuggestions.show();
            $('.c-site-header').addClass('search-active');
            $('.js-search-input').focus();
        });
        $(document).on('mouseup', function (e) {
            if (!searchSuggestions.is(e.target) && searchSuggestions.has(e.target).length === 0) {
                searchSuggestions.hide();
                $('.c-site-header').removeClass('search-active');
                $('.js-search-input').val('');
            }
        });
    }

    searchSuggestionsShow();
});
