$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-150
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
	
	
//responsive navigation menu
	
	$("#nav").addClass("js").before('<div id="menu">&#9776;</div>').css('z-index','20').css('float','right');
	$("#menu").click(function(){
		$("#nav").toggle();
	});
	$(window).resize(function(){
		if(window.innerWidth > 768) {
			$("#nav").removeAttr("style");
		}
	});
	
});