$(document).ready(function() {

	//arrow click = scroll!//
	$("#arrow1").click(function() {
		$(window).scrollTop(800);
	});  //turning this off just to see if the below works out 

	//option 2: $("#arrow1").onclick($("#fullscreen").fullpage({}));

	/* option 3 $('#arrow1').onclick(function() {
		$("#fullscreen").scrollTo("#about-page"[800]);
	}); */

	/* $("#arrow1").click(function() {
		$(window).animate({scrollTop:$("#about-page").offset().bottom}, 1000);
	}); */
	// whats wrong with ALL OF THE SE E E 

	//how the fuck do i install the above .fullpage ???????

	//good good slideshow coding!!!//
	const distanceToNextImage = -350;
	let currentImageNumber = 0;

	$("#slideshow-strip").setInterval(function () {
		currentImageNumber = (currentImageNumber + 1) % 6;
		$("#slideshow-strip").css("left", + currentImageNumber * distanceToNextImage + "px");
	}, 1000);

	// to get the scrollbars onto firefox and internet explorer


	// reviews page !!!
	$(document).ready(function() {
		$
	});
	
});
