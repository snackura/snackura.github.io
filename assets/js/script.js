$(document).ready(function() {



	// making homepage navbar responsive
	let startingPercent = 90

	$("#arrow1").click(function() {
		startingPercent = (startingPercent + 0.5)
		while (startingPercent <= 105) {
			startingPercent = (startingPercent + 0.5);
			$("#homepage-navbar").css("top", startingPercent + "%");
		}

	});


	// arrow scroollll 
	$("#arrow1").on("click", function(event) {
   		if (this.hash !== "") {
      		event.preventDefault();
      		var hash = this.hash;
				$(window).animate({scrollTop: 700}, 800, function(){
        			window.location.hash = this.hash;
      			});
   		} 
	});


	//good good slideshow coding!!! THIS ONE WORKS DONT
	const distanceToNextImage = -350;
	let currentImageNumber = 5;

	setInterval(function () {
		currentImageNumber = (currentImageNumber - 1);
		$(".img" + currentImageNumber).fadeIn(1000);
		$(".img" + (currentImageNumber + 1)).fadeOut(1000);
		if (currentImageNumber <= 0) {
			currentImageNumber = 5;
			$(".img" + currentImageNumber).fadeIn(1000);
			$(".img" + (currentImageNumber + 1)%6).fadeOut(1000);
		}
	}, 5000);
	 // shrug

	

	// to get the scrollbars onto firefox and internet explorer
		//shrug


	// reviews page !!!
	new TypeIt("#typeit", {
		strings: ['<span class="title">Here are some reviews I have as an individual, that show that I am a hardworking and accomplished individual</span>', 
		'<span class="quote">:)</span>',
		'<span class="quote">5starts; I laughed so hard my innards fell out</span> <span class="source">-Daily Californian University News Editor Francesca Munsayac</span>',
		'<span class="quote">You are a solid 3</span> <span class="source">- my older sister Sumer</span>',
		'<span class="quote">You cook such good noodles that now I have standards for noodles</span> <span class="source">- my roommate</span>',
		'<span class="quote">snac</span> <span class="source">- Daily Californian City News Editor Jessíca Jiménez</span>',
		'<span class="quote">Please put on some pants</span> <span class="source">- my other roommate</span>',
		'<span class="quote">hot thot tater tot</span> <span class="source">- my friend</span>',
		],
		speed: 60,
		breakLines: false,
		loop: true,
		lifeLike: true,
		pause: 500,
		nextStringDelay: [1000,2000]
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
