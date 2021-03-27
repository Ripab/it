(function($){
	"use strict";
	// START MEAN MENU JS CODE
    jQuery(document).ready(function () {
        jQuery('.menu-area').meanmenu();
    });
	// START MEAN MENU JS CODE

	// PRELOADER JS CODE
    jQuery(window).on('load',function(){
        jQuery(".loader-box").fadeOut(500);
    });
	// END PRELOADER JS CODE
	
	$(document).on('ready', function(){
		
		// START MENU JS CODE
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.main-menu-area').addClass('menu-shrink');
			} else {
				$('.main-menu-area').removeClass('menu-shrink');
			}
		});
		// END MENU JS CODE

		$('.menu-area ul li a').on('click', function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1000);
			e.preventDefault();
        });

        // START WOW ACTIVE JS CODE
		new WOW().init();
		// END WOW ACTIVE JS CODE

		// START POPUP YOUTUBE JS CODE
        $('.popup-youtube').magnificPopup({
            type: 'iframe'
        });
		// END POPUP YOUTUBE JS CODE

		// START COUNT JS CODE
        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
		// END COUNT JS CODE
		
		// START PROJECT SLIDER JS CODE
		$(".sliders").slick({
			autoplay:true,
			autoplaySpeed:10000,
			speed:600,
			slidesToShow:1,
			slidesToScroll:1,
			pauseOnHover:false,
			dots:true,
			pauseOnDotsHover:true,
			cssEase:'linear',
			nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="icofont-rounded-right"></i></div>',
			prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="icofont-rounded-left"></i></div>',
		});
		// END PROJECT SLIDER JS CODE

		// START POPPUP GALLERY JS CODE
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image'
		});
		// END POPPUP GALLERY JS CODE

		// START CUSTOMER LOGOS SLIDER JS CODE
		$('.customer-logos').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1000,
			arrows: false,
			dots: false,
			pauseOnHover: false,
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 4
				}
			  }, {
				breakpoint: 520,
				settings: {
					slidesToShow: 3
				}
			}]
		});
		// END CUSTOMER LOGOS SLIDER JS CODE

		// START TESTIMONIAL SLIDER JS CODE
		$(".testimonial").slick({
			autoplay:false,
			autoplaySpeed:10000,
			speed:600,
			slidesToShow:2,
			slidesToScroll:1,
			pauseOnHover:false,
			dots:true,
			pauseOnDotsHover:true,
			cssEase:'linear',
			nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="icofont-rounded-right"></i></div>',
			prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="icofont-rounded-left"></i></div>',
			
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			  }, {
				breakpoint: 520,
				settings: {
					slidesToShow: 1
				}
			}]
		});
		// END TESTIMONIAL SLIDER JS CODE

		// TOP BUTTON JS CODE
		$('body').append('<div id="toTop" class="top-arrow"><i class="fas fa-caret-up"></i></div>');
		$(window).on('scroll', function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
			$('#toTop').fadeOut();
			}
		}); 
		$('#toTop').on('click', function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		// END TOP BUTTON JS CODE
	});

    
}(jQuery));
