$(document).ready(function () {

	slide = $('.slide');
	move = 4500;
	bg = $('.bg-inner');
	width1 = $('html').width();
	width = width1;
	tl = new TimelineLite();

$(".slide .submit button").on("click", function(){

	// if($('input[name=option]').is('checked')) { 
		// alert('asd')
		$(".slide .submit").each(function() {

	   		tl 	
	   			.to(bg, .1, {x: -move})
	   			.to(slide, 1, {x: -width, autoAlpha: 1});

	    });

	    move += 1000;

	    width += width1;

	// }else{

	// 	$('.modal').addClass('show');
	// 	$('.modal').css('display', 'block');


	// }

});

$(".slide .finish").on("click", function(){
	tl.pause();
});

});