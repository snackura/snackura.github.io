$(document).ready(function() {



	// making homepage navbar responsive
	let startingPercent = 90

	$('#arrow1').click(function() {
		startingPercent = (startingPercent + 0.5)
		while (startingPercent <= 105) {
			startingPercent = (startingPercent + 0.5);
			$('#homepage-navbar').css('top', startingPercent + '%');
		}

	});


	// arrow scroollll  
	$('#arrow1').click( function() {
				$(window).scrollTop(800);
   		});
	// edit the above is Not Working and i wanna Scream but ya know its Okay i h  A te this 

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


	// i haven't made the comics page l0l
	$(".speciallink").click(function() {
		alert("I haven't made this page yet......lol I'm sorry");
	});


	// reviews page !!!
	new TypeIt("#typeit", {
		strings: ['<span class="quote">Here are some reviews I have received as an individual, showing that I am hardworking and accomplished</span>', 
		'<span class="quote">Maybe :)</span>',
		'<span class="quote">5starts; I laughed so hard my innards fell out</span> <span class="source">-Daily Californian University News Editor Francesca Munsayac</span>',
		'<span class="quote">You are a solid 3</span> <span class="source">- my older sister Sumer</span>',
		'<span class="quote">You cook such good noodles that now I have standards for noodles</span> <span class="source sarah">- my roommate</span>',
		'<span class="quote">snac</span> <span class="source">- Daily Californian City News Editor Jessíca Jiménez</span>',
		'<span class="quote">Please put on some pants</span> <span class="source">- my other roommate</span>',
		'<span class="quote">hot thot tater tot</span> <span class="source">- ¯\_(ツ)_/¯ </span>',
		],
		speed: 60,
		breakLines: false,
		loop: true,
		lifeLike: true,
		pause: 500,
		nextStringDelay: [1000,2000]
	});

	
});
