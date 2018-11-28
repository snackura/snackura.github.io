$(document).ready(function() {


	// arrow scroollll 
	$("#arrow1").on("click", function(event) {
   		if (this.hash !== "") {
      		event.preventDefault();
				$(window).animate({scrollTop: 700}, 800, function(){
        			window.location.hash = this.hash;
      			});
   		} 
	});


	//good good slideshow coding!!!//
	const distanceToNextImage = -350;
	let currentImageNumber = 5;

	setInterval(function () {
		currentImageNumber = (currentImageNumber - 1);
		if (currentImageNumber <= 0)
			currentImageNumber = 5;
		$(".img" + currentImageNumber).fadeIn(1000);
		$(".img" + (currentImageNumber + 1)%6).fadeOut(1000);
	}, 5000);


	// making homepage navbar responsive
	let startingPercent = 90

	$("#arrow1").click(function() {
		startingPercent = (startingPercent + 0.5)
		while (startingPercent < 105) {
			startingPercent = (startingPercent + 0.5);
			$("#homepage-navbar").delay(1000).css("top", startingPercent + "%");
		}
	}); // shrug

	

	// to get the scrollbars onto firefox and internet explorer
		//shrug


	// reviews page !!!
	setInterval(function() {

	});
	
	// stories page sticky bar
	$(window).scroll(function() {
		if (document.body.scrollTop <= 70) {
			$(".story-title").removeClass("titlealt");
			$(".topbar").css("border-bottom","none");
		} else {
			$(".story-title").addClass("titlealt");
			$(".topbar").css("border-bottom"," 3px solid #7CA5C7");
		}

	});
});
