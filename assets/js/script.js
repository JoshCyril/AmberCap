!(function ($) {
    "use strict";
    // Porfolio isotope and filter
    $(window).on('load', function () {
        var blogIsotope = $('.blog-container').isotope({
            itemSelector: '.blog-item'
        });

        $('.blog-flt li').on('click', function () {
            $(".blog-flt li").removeClass('filter-active');
            $(this).addClass('filter-active');

            blogIsotope.isotope({
                filter: $(this).data('filter')
            });
        });
    });
})(jQuery);