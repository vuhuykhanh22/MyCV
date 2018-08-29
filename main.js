$(document).ready(function(){
    $('.arrow_top').click(function() {
		$('body,html').animate({scrollTop:0});
		
	});
	 new WOW().init();
})

