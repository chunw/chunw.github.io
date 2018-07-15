const MIN_WORK_INDEX = 1;
const MAX_WORK_INDEX = 10;
var currentWorkIndex = MIN_WORK_INDEX;

function onclickNext() {
    if (currentWorkIndex < MAX_WORK_INDEX) {
        currentWorkIndex += 1;
    } else {
        currentWorkIndex = MIN_WORK_INDEX;
    }
    skipToWork(currentWorkIndex);
}

function onclickPrev() {
    if (currentWorkIndex > MIN_WORK_INDEX) {
        currentWorkIndex -= 1;
    } else {
        currentWorkIndex = MAX_WORK_INDEX;
    }
    skipToWork(currentWorkIndex);
}

function skipToWork(index) {
    location.href = "#work" + index;
    //$("#current-work").text(index);
}

$(document).ready(function() {
    //$("#current-work").text(MIN_WORK_INDEX);
    //$("#num-works").text(MAX_WORK_INDEX);


	// Header Scroll

	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});


	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});
