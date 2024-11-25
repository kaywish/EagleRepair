(function($) {
	
	"use strict";
	
	
	//1.Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}	
	
	//2.Update header style + Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			if (windowpos >= 150) {
				$('.main-header').addClass('fixed-header');
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.main-header').removeClass('fixed-header');
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}	
	headerStyle();

	
	//3.Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').click('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').click('click', function(e) {
			e.preventDefault();
		});
	}

	//5.Search Toggle Btn
    if($('.toggle-search').length){
        $('.toggle-search').click('click', function() {
            $('.header-search').slideToggle(300);
        });

    }	

	//21 Price Ranger 
	function priceFilter() {
	    if ($('.price-ranger').length) {
	        $('.price-ranger #slider-range').slider({
	            range: true,
	            min: 12,
	            max: 50,
	            values: [12, 30],
	            slide: function(event, ui) {
	                $('.price-ranger .ranger-min-max-block .min').val('$' + ui.values[0]);
	                $('.price-ranger .ranger-min-max-block .max').val('$' + ui.values[1]);
	            }
	        });
	        $('.price-ranger .ranger-min-max-block .min').val('$' + $('.price-ranger #slider-range').slider('values', 0));
	        $('.price-ranger .ranger-min-max-block .max').val('$' + $('.price-ranger #slider-range').slider('values', 1));
	    };
	}	
	
	//7.Mixitup Gallery
	if($('.mixitup-gallery').length){
		$('.mixitup-gallery').mixItUp({});
	}	
	
	//8.Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : 0 
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').click(function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.bind('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.click('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}	
	enableMasonry();	

   //9.Gallery masonary style
	if ($('.item-container').length) {
	   $('.item-container').isotope({
	   layoutMode:'masonry'
	   });
	}

	//10.Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").click('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}

	//11.PieChart RoundCircle
	function expertizeRoundCircle () {
		var rounderContainer = $('.piechart');
		if (rounderContainer.length) {
			rounderContainer.each(function () {
				var Self = $(this);
				var value = Self.data('value');
				var size = Self.parent().width();
				var color = Self.data('fg-color');

				Self.find('span').each(function () {
					var expertCount = $(this);
					expertCount.appear(function () {
						expertCount.countTo({
							from: 1,
							to: value*100,
							speed: 3000
						});
					});

				});
				Self.appear(function () {					
					Self.circleProgress({
						value: value,
						size: 142,
						thickness: 10,
						emptyFill: '#24c4f4',
						animation: {
							duration: 3000
						},
						fill: {
							color: color
						}
					});
				});
			});
		};
	}

	//12.progressBarConfig
	function progressBarConfig () {
	  var progressBar = $('.progress');
	  if(progressBar.length) {
	    progressBar.each(function () {
	      var Self = $(this);
	      Self.appear(function () {
	        var progressValue = Self.data('value');

	        Self.find('.progress-bar').animate({
	          width:progressValue+'%'           
	        }, 100);

	        Self.find('span.value').countTo({
	          from: 0,
	            to: progressValue,
	            speed: 100
	        });
	      });
	    })
	  }
	}

    //13.Fact Counter
	function CounterNumberChanger () {
	 var timer = $('.timer');
	 if(timer.length) {
	  timer.appear(function () {
	   timer.countTo();
	  })
	 }
	}

	//15.testimonials
    $(document).ready(function() {

	    var sync1 = $("#sync1");
	    var sync2 = $("#sync2");
	    var slidesPerPage = 3; //globaly define number of elements per page
	    var syncedSecondary = true;

	    sync1.owlCarousel({
	        items : 1,
	        slideSpeed : 2000,
		    nav: false,
		    autoplay: true,
		    dots: false,
		    loop: true,
		    responsiveRefreshRate : 200,
		    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
		}).on('changed.owl.carousel', syncPosition);

		sync2
		    .on('initialized.owl.carousel', function () {
		      sync2.find(".owl-item").eq(0).addClass("current");
		    })
		    .owlCarousel({
		    items : 3,
		    dots: false,
		    nav: false,
		    smartSpeed: 200,
		    slideSpeed : 500,
		    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
		    responsiveRefreshRate : 100
		}).on('changed.owl.carousel', syncPosition2);

		function syncPosition(el) {
		    //if you set loop to false, you have to restore this next line
		    //var current = el.item.index;
		    
		    //if you disable loop you have to comment this block
		    var count = el.item.count-1;
		    var current = Math.round(el.item.index - (el.item.count/2) - .3);
		    
		    if(current < 0) {
		      current = count;
		    }
		    if(current > count) {
		      current = 0;
		    }
		    
		    //end block

		    sync2
		      .find(".owl-item")
		      .removeClass("current")
		      .eq(current)
		      .addClass("current");
		    var onscreen = sync2.find('.owl-item.active').length - 1;
		    var start = sync2.find('.owl-item.active').first().index();
		    var end = sync2.find('.owl-item.active').last().index();
		    
		    if (current > end) {
		      sync2.data('owl.carousel').to(current, 100, true);
		    }
		    if (current < start) {
		      sync2.data('owl.carousel').to(current - onscreen, 100, true);
		    }
		}
		  
		function syncPosition2(el) {
		    if(syncedSecondary) {
		      var number = el.item.index;
		      sync1.data('owl.carousel').to(number, 100, true);
		    }
		}
		  
		sync2.on("click", ".owl-item", function(e){
		    e.preventDefault();
		    var number = $(this).index();
		    sync1.data('owl.carousel').to(number, 300, true);
		});
	});

	// Fact Counter
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .counter-column.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
				
			});
		}
	}

	//15.Accordion Box
	if ($('.accordion-box').length) {
        $('.accordion-box .acc-btn').click('click', function() {
            if ($(this).hasClass('active') !== true) {
                $('.accordion-box .acc-btn').removeClass('active');
            }

            if ($(this).next('.acc-content').is(':visible')) {
                $(this).removeClass('active');
                $(this).next('.acc-content').slideUp(500);
            } else {
                $(this).addClass('active');
                $('.accordion-box .acc-content').slideUp(500);
                $(this).next('.acc-content').slideDown(500);
            }
        });
    }
	
	//16.Sponsors Slider
	if ($('.sponsors-slider').length) {
		$('.sponsors-slider').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 400,
			autoplay: 4000,
			navText: [],
			responsive:{
				300:{
					items:1
				},
				400:{
					items:2
				},
				800:{
					items:3
				},
				1200:{
					items:5
				}
			}
		});    		
	}	

	//17.Four Column Carousel Slider
	if ($('.four-column-carousel').length) {
		$('.four-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1070:{
					items:4
				}
			}
		});    		
	}
	
	//18.Three Column Carousel Slider
	if ($('.three-column-carousel').length) {
		$('.three-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				}
			}
		});    		
	}
	
	//19.Two Column Carousel Slider
	if ($('.two-column-carousel').length) {
		$('.two-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				1200:{
					items:2
				}
			}
		});    		
	}	
	
	//20.Single Item Slider
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 700,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}

	//Jquery Tabs Box
	if($('.service-tab-box').length){
		//Tabs
		$('.service-tab-box .tab-buttons .tab-btn').click(function(e) {
			
			e.preventDefault();
			var target = $($(this).attr('href'));
			
			target.parents('.service-tab-box').children('.tab-buttons').children('.tab-btn').removeClass('active-btn');
			$(this).addClass('active-btn');
			target.parents('.service-tab-box').children('.tab-content').children('.tab').fadeOut(0);
			target.parents('.service-tab-box').children('.tab-content').children('.tab').removeClass('active-tab');
			$(target).fadeIn(300);
			$(target).addClass('active-tab');
		});
	}	
	
	//22.LightBox / Fancybox
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}

	if ($("a.video-fancybox").length) {
        $("a.video-fancybox").on('click', function() {
            $.fancybox({
                'padding': 0,
                'autoScale': false,
                'transitionIn': 'none',
                'transitionOut': 'none',
                'title': this.title,
                'width': 680,
                'height': 495,
                'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
                'type': 'swf',
                openEffect: 'elastic',
                closeEffect: 'elastic',
                helpers: {
                    media: {}
                },
                'swf': {
                    'wmode': 'transparent',
                    'allowfullscreen': 'true'
                }
            });

            return false;
        });
    };
	
	//Contact Form Validation
	if($('#contact_form').length){
		$("#contact_form").validate({
		    submitHandler: function(form) {
		      var form_btn = $(form).find('button[type="submit"]');
		      var form_result_div = '#form-result';
		      $(form_result_div).remove();
		      form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
		      var form_btn_old_msg = form_btn.html();
		      form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
		      $(form).ajaxSubmit({
		        dataType:  'json',
		        success: function(data) {
		          if( data.status == 'true' ) {
		            $(form).find('.form-control').val('');
		          }
		          form_btn.prop('disabled', false).html(form_btn_old_msg);
		          $(form_result_div).html(data.message).fadeIn('slow');
		          setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
		        }
		      });
		    }
		});
	}
	
	//26.Gallery Popup Hide / Show
	if($('.has-gallery-popup').length){
		
		//Show Gallery Popup
		$('.has-gallery-popup').click('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('body').addClass('popup-visible');
			$(target).addClass('now-visible');
		});
		
		//Show Gallery Popup
		$('.gallery-box .btn-close,.gallery-box .bg-fade-layer').click('click', function() {
			$('.gallery-box').removeClass('now-visible');
			$('body').removeClass('popup-visible');
		});		
	}

	//27.Gallery Popup Slider / Vertical Gallery Slider
	if($('.vertical-slider').length) {
		var slider = new MasterSlider();
		slider.setup('masterslider' , {
			width:850,
			height:470,
			space:10,
			view:'basic',
			dir:'v'
		});
		slider.control('arrows');	
		slider.control('scrollbar' , {dir:'v'});	
		slider.control('circletimer' , {color:"#FFFFFF" , stroke:9});
		slider.control('thumblist' , {autohide:false ,dir:'v'});
	}	
	
	//28.Appointment Calendar
	if($('#appoinment_calendar').length) {
		$('#appoinment_calendar').monthly();
	}

	//29.Select menu 
	function selectDropdown() {
	    if ($(".selectmenu").length) {
	        $(".selectmenu").selectmenu();

	        var changeSelectMenu = function(event, item) {
	            $(this).trigger('change', item);
	        };
	        $(".selectmenu").selectmenu({ change: changeSelectMenu });
	    };
	}	

	// Date picker
	function datepicker () {
	    if ($('#datepicker').length) {
	        $('#datepicker').datepicker();
	    };
	}

	// Time picker
	function timepicker () {
	    $('input[name="time"]').ptTimeSelect();
	}
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	jQuery(document).on('ready', function () {
		(function ($) {
			// add your functions
			expertizeRoundCircle();
			enableMasonry();
		})(jQuery);
	});
/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		CounterNumberChanger();
		headerStyle();
		factCounter();
		priceFilter();
	});
	
/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		progressBarConfig();
		datepicker();
		timepicker();
	});

	

})(window.jQuery);