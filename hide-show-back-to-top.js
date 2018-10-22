/*  helper function to show back-to-top button only if user navigates up
    and hides otherwise after 2s
*/

function scrollToTop() {
    var lastTop = $(this).scrollTop();
    var scrollTopVisible = false;
    var timeout = null;
    var targetSelector = '#back_to_top';

    $(window).on('scroll', function () {
        var currentTop = $(this).scrollTop();

        if (currentTop > 200 && currentTop + 20 < lastTop && !scrollTopVisible) {
            scrollTopVisible = true;
            $(targetSelector).fadeIn();
            timeout = setTimeout(function () {
                scrollTopVisible = false;
                $(targetSelector).fadeOut();
            }, 2000);
        }
        else if (currentTop < 200 && scrollTopVisible) {
            clearTimeout(timeout);
            scrollTopVisible = false;
            $(targetSelector).fadeOut();
        }
        else if (scrollTopVisible && timeout) {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                scrollTopVisible = false;
                $(targetSelector).fadeOut();
            }, 2000);
        }
        lastTop = currentTop;
    });

    $(targetSelector).click(function (event) {
        event.preventDefault();
        if (timeout) clearTimeout(timeout);
        $('body, html').animate({
            scrollTop: 0
        }, 800, 'swing', function () {
            scrollTopVisible = false;
            $(targetSelector).fadeOut();
        });
    });
}
