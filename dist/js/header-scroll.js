/*!
 * header-scroll v1.0.0
 * by Alexander Galagutskiy
 *
 * More info:
 * https://github.com/Teinnsei/header-scroll
 *
 * Copyright 2016 Alexander Galagutskiy
 * Released under the MIT license
 * https://github.com/Teinnsei/header-scroll/blob/master/LICENSE
 */

(function($) {
    $.fn.headerScroll = function(options) {
        var opts = $.extend({}, $.fn.headerScroll.defaults, options);
        var position = $(opts.section).eq(opts.sectionShow).offset().top;
        this.css({"top" : position, "display": opts.display, "position": "fixed"});
        if(opts.enableFixedHeader) {
            $(document).on('scroll', function() {
                var position = $(opts.section).eq(opts.sectionShow).offset().top;
                var scroll = $(window).scrollTop();
                if(scroll > position) {
                    $(this).css({"top": 0});
                }
                else {
                    if(scroll > 0) position -= scroll;
                    $(this).css({"top": position});
                }
            }.bind(this));
        }
        if(opts.enableActiveLink) {
            $(document).on('scroll', function() {
                var headerS = this;
                $(opts.section).each(function() {
                    var scroll = $(window).scrollTop();
                    var topSection = $(this).offset().top;
                    var index = $(this).index();
                    if(topSection <= (scroll)) {
                        headerS
                            .find(opts.linkTag)
                            .removeClass(opts.activeLinkClass)
                            .eq(index - 1)
                            .addClass(opts.activeLinkClass);
                    }
                });
            }.bind(this));
        }
        if(opts.enableClickLinkScroll) {
            this.find(opts.linkTag).on('click', function() {
                var index = $(this).index();
                $('html, body').animate({
                    scrollTop: $(opts.section).eq(index).offset().top
                }, opts.durationScroll);
            });
        }
    };
    $.fn.headerScroll.defaults = {
        enableFixedHeader: true,
        section: "section",
        sectionShow: 1,
        display: "block",
        enableActiveLink: true,
        activeLinkClass: 'active',
        linkTag: 'li',
        enableClickLinkScroll: true,
        durationScroll: 500
    };
})(jQuery);
