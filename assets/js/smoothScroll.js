$(document).ready(function () {
    var docEl = $(document),
        headerEl = $('.navbar-tabs--sticky'),
        linkScroll = $('.navbar-tabs__item > a'),
        headerHeight = $('header.c-site-header').innerHeight();

    docEl.on('scroll', function () {
        if (docEl.scrollTop() > 60) {
            headerEl.addClass('fixed-to-top');
        } else {
            headerEl.removeClass('fixed-to-top');
        }
    });

    linkScroll.click(function (e) {
        e.preventDefault();
        var scrollVal = $(this.hash).offset().top - headerHeight;
        $('body, html').animate({
            scrollTop: scrollVal
        }, 500);
    });

    $(window).on('scroll', function () {
        var windowTop = $(window).scrollTop();

        $('.stickthatnav-group').each(function (i) {
            if (windowTop > $(this).offset().top - headerHeight - 10 &&
                windowTop < $(this).offset().top + $(this).outerHeight(true)
            ) {
                linkScroll.removeClass('active');
                $('.navbar-tabs li').eq(i).find('a').addClass('active');
            }
        });
    });
});
