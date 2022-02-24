(function ($) {
    "use strict";

    var adaptex = {

        /* ============================================================ */
        /* PRELOADER
        /* ============================================================ */
        preloader: function(){
            $(window).on('load', function() {
                $(".preloader").fadeOut();     
            });
        },
        
        /* ============================================================ */
        /* StickyHeader
        /* ============================================================ */
        sticky_header: function() {
            var fixed_top = $(".header");
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 30) {
                    fixed_top.addClass("sticky");
                } else {
                    fixed_top.removeClass("sticky");
                }
            });
        },

        /* ============================================================ */
        /* Jquery Plugins Calling
        /* ============================================================ */
        onePageFunction: function(){
            $('header .main-menu a[href*="#"]:not([href="#"])').on('click', function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html,body').animate({
                          scrollTop: target.offset().top - 150,
                        }, 100);
                        return false;
                    }
                }
            });
        },

        /* ============================================================ */
        /* Mobile Menu Integration
        /* ============================================================ */
        mobile_menu: function() {
            //Clone Mobile Menu
            function cloneMobileMenu($cloneItem, $mobileLoc) {
                var $combinedmenu = $($cloneItem).clone();
                $combinedmenu.appendTo($mobileLoc);                
            }
            cloneMobileMenu("header .header-bottom .nav-menu", ".mobile-menu .menu");

            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('is-menu-open');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('is-menu-open');
                });
        
                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("is-menu-open");
                        $(selector).removeClass("is-menu-open");
                    }          
                });
            
            };
            mobile_menu('.toggler-menu, .close-menu', '.mobile-menu');
        },

        /* ============================================================ */
        /* Owl Carousel
        /* ============================================================ */
        owlCarousel: function () {
            var $heroBanner = $('.hero-slider');
            if ($heroBanner.length) {
                $heroBanner.owlCarousel({
                    loop: true,
                    items: 1,
                    dots: !1,
                    autoplay: 1,
                    autoplayTimeout: 5000,
                    autoplaySpeed: 700,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                });                
            };
            var $projects = $('.project-carousel');
            if ($projects.length) {
                $projects.owlCarousel({
                    loop: true,
                    items: 1,
                    dots: !1,
                    autoplay: !1,
                    margin: 30,
                    autoplayTimeout: 4000,
                    autoplaySpeed: 700,
                    responsive: {
                        412: {
                            items: 2,
                        },
                        576: {
                            items: 3,
                        },
                        992: {
                            items: 4,
                        }
                    }
                });                
            };
            var $brands = $('.partner-carousel');
            if ($brands.length) {
                $brands.owlCarousel({
                    loop: true,
                    items: 2,
                    dots: !1,
                    autoplay: 1,
                    margin: 30,
                    autoplayTimeout: 5000,
                    autoplaySpeed: 500,
                    responsive: {
                        412: {
                            items: 3,
                        },
                        576: {
                            items: 4,
                        },
                        992: {
                            items: 5,
                        }
                    }
                });                
            };
            
        },

        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append(
                "<a href='#top' title='Scroll Top' id='scroll-top' class='topbutton btn-hide'><i class='flaticon-right-arrow-2'></i></a>"
            );
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    'normal'
                );
                return false;
            });
        },

        
        /* ============================================================ */
        /* Background Image
        /* ============================================================ */
        background_image: function() {
            $("[data-bg-color], [data-bg-image]").each(function() {
                var $this = $(this);               
    
                if(  $this.attr("data-bg-color") !== undefined ){                        
                    $this.css("background-color", $this.attr("data-bg-color") );
                }
                if( $this.attr("data-bg-image") !== undefined ){
                    $this.css("background-image", "url("+ $this.attr("data-bg-image") +")" );    
                    $this.css("background-size", $this.attr("data-bg-size") );
                    $this.css("background-repeat", $this.attr("data-bg-repeat") );
                    $this.css("background-position", $this.attr("data-bg-position") );
                    $this.css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                }
            });
        },


        initialize: function() {
			adaptex.preloader();
			// adaptex.onePageFunction();
			adaptex.mobile_menu();
			// adaptex.scroll_to_top();
			// adaptex.sticky_header();
			adaptex.owlCarousel();
			adaptex.background_image();
		}
    };
    $(function() {
		adaptex.initialize();
	});
})(jQuery);