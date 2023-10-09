'use strict';

$(document).ready(function (currentSlide) {
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

    $('.js-main-banner').on('afterChange', function(event, slick, currentSlide, nextSlide){
        var CurrentSlideDom = $(slick.$slides.get(currentSlide));
        $('.js-main-banner__video-wrap').each(function () {
            $(this).get(0).pause();
        });
        var currentSlideVideo = CurrentSlideDom.find('.js-main-banner__video-wrap').get(0);
        if (currentSlideVideo) {
            currentSlideVideo.play();
        }
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

    $('#list-view').click(function () {
        if ($('.c-products .c-products__list').hasClass('grid-view')) {
            $('.c-products .c-products__list').removeClass('grid-view');
            $('.c-products .c-products__list').addClass('list-view');
        }
    });
    $('#grid-view').click(function () {
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
        $(document).on('click', '.js-close-btn', function () {
            searchSuggestions.hide();
            $('.c-site-header').removeClass('search-active');
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

    $('.dropdown-menu a.dropdown-toggle').on("click", function (e) {
        $(this).parent('li').siblings().removeClass('show');
        $(this).parent('li').siblings().find('ul').hide();

        $(this).parent('li').toggleClass('show');
        $(this).next('ul').toggle();

        e.stopPropagation();
        e.preventDefault();
    });

    $(document).ready(function () {
        $('.num-in span').click(function () {
            var $input = $(this).parents('.num-block').find('input.in-num');
            if ($(this).hasClass('minus')) {
                var count = parseFloat($input.val()) - 1;
                count = count < 1 ? 1 : count;
                if (count < 2) {
                    $(this).addClass('dis');
                }
                else {
                    $(this).removeClass('dis');
                }
                $input.val(count);
            }
            else {
                var count = parseFloat($input.val()) + 1
                $input.val(count);
                if (count > 1) {
                    $(this).parents('.num-block').find(('.minus')).removeClass('dis');
                }
            }
            $input.change();
            return false;
        });
    });
});

(function () {
    "use strict";

    var cookieAlert = document.querySelector(".cookie-alert");
    var acceptCookies = document.querySelector(".accept-cookies");

    cookieAlert.offsetHeight; // Force browser to trigger reflow

    if (!getCookie("acceptCookies")) {
        cookieAlert.classList.add("show");
    }

    acceptCookies.addEventListener("click", function () {
        setCookie("acceptCookies", true, 60);
        cookieAlert.classList.remove("show");
    });
})();

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}