$(document).ready(function(){

	$('nav ul li').on('click', function(){
		var scrollAnchor = $(this).attr('data-scroll'),
        	scrollPoint = $('div[data-anchor="' + scrollAnchor + '"]').offset().top - 60;

	  	$('body,html').animate({
	    	scrollTop: scrollPoint
	  	}, 600);

	  	$('nav ul li').removeClass('show_nav');
	  	$('nav').removeClass('show_div');
	  	$('.close').removeClass('show');
	  	$('.hamburger').removeClass('hide');

	return false;
	});

	$('.double-arrow').on('click', function(){
		$('body,html').animate({
			scrollTop: $('div[data-anchor="about"').offset().top - 60},
			'slow');
		});

	$('.hamburger').click(function(){
		$('nav').addClass('show_div');
		$('.navbar li:not(:first-child)').addClass('show_nav');
		$(this).toggleClass('hide');
		$('.close').toggleClass('show');
	});
	$('.close').click(function(){
		$('nav').removeClass('show_div');
		$(this).removeClass('show');
		$('.navbar li:not(:first-child)').removeClass('show_nav');
		$('.hamburger').removeClass('hide');
	});

	$(window).scroll(function(){
		var windscroll = $(window).scrollTop();

		console.log(windscroll);

		if (windscroll > 130) {
			$('nav').addClass('nav-fixed');
		}
		else {
			$('nav').removeClass('nav-fixed');
		}

		if (windscroll > 1028) {
			$('.html_bar').addClass('html');
			$('.css_bar').addClass('css');
			$('.jquery_bar').addClass('jquery');
			$('.ui_bar').addClass('ui');
			$('.responsive_bar').addClass('responsive');
		}
	});
});
