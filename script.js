$( ".blinkingCircle" ).click(function() {
	$(function(){
		$( ".blinkingCircle" ).css( {"animation": "none"} )
		$("#blinkingCircle").hide();
		setTimeout(function(){$("#blinkingCircle").show();setInterval(function(){$("#blinkingCircle").toggle();},250)},1000);
	});

	setTimeout(function() {
		console.log("test");
		$( "body" ).css( {"background-color": "#FFE3E3"} )
	}, 3500)

	setTimeout(function(){
	  $( ".blinkingCircle2" ).css( {"display": "block"} )
	  $( ".blinkingCircle2" ).css( "width", "3000" )
		$( ".blinkingCircle2" ).css( {"transition": "1s"} )
		$( ".blinkingCircle2" ).css( "height", "3000" )
		$( ".blinkingCircle2" ).css( {"transition": "1s"} )
		$( ".blinkingCircle2" ).css( {"background-color": "#FFE3E3"} )
	}, 3000);

	setTimeout(function(){
		$( ".blinkingCircle2" ).remove()
		$( ".blinkingCircle" ).remove()
		$( ".blinkingCircle2, .blinkingCircle" ).css( {"transition": "1s"} )
  }, 6000);
	// setTimeout(function(){
	// 		$( ".toCenter" ).css( {"margin-bottom": "500px" } )
	// 		$( ".toCenter" ).css( {"transition": "1s"} )
	// 		// $( ".line" ).css( {"z-index": "2" } )
	// 		// $( ".first" ).css( {"transition": "3s"} )
	// }, 8000);

	setTimeout(function(){
			$( ".tracker" ).css( {"width": "110vw"} )
	}, 3000);

	// setTimeout(function(){
	// 		$( ".miniLogo" ).css( {"z-index": "4" } )
	// }, 4000);

	setTimeout(function(){
	    $( ".first" ).css( {"display": "none"} )
			$( ".first" ).css( {"transition": "3s"} )
	}, 3000);

	setTimeout(function(){
			$( ".miniLogo" ).css( {"margin-right": "350px"} )
			$( ".miniLogo" ).css( {"margin-top": "70px"} )
			$( ".miniLogo" ).css( {"letter-spacing": "0.1em"} )
			$( ".miniLogo" ).css( {"font-family": "Sansation_Bold"} )
			$( ".miniLogo" ).css( {"z-index": "4"} )
			$( ".miniLogo" ).css( {"transition": "1s"} )
	}, 3000);

	setTimeout(function(){
			$( ".concert, .food, .piano, .send, .jump, .redbaloon, .waterfall, .water, .football, .feet, .backetball" ).css( {"opacity": "1"} )
			$( ".concert, .food, .piano, .send, .jump, .redbaloon, .waterfall, .water, .football, .feet, .backetball" ).css( {"transition": "6s"} )
	}, 5000);
	 // document.body.style.overflowX = "visible"
})

// $( ".concert" ).click(function() {
// 	$( ".concert" ).css( {"display": "none"} )
// 	$( ".concert" ).css( {"transition": "0.5s"} )
// 	$( ".circle1" ).css( {"display": "block"} )
// 	$( ".circle1" ).css( {"z-index": "100"} )
// 	$( ".circleWords" ).css( {"display": "block"} )
// 	$( ".circleWords" ).css( {"z-index": "100"} )
// 	$( ".circleDown" ).css( {"display": "block" } )
// 	$( ".circleDown" ).css( {"z-index": "100"} )
// 	$( ".logo" ).css( {"display": "block"} )
// 	$( ".logo" ).css( {"z-index": "400"} )
//
//
// })

// $( ".send, .piano, .food" ).click(function() {
// 	$( ".send, .piano, .food" ).css( {"display": "none"} )
// 	$( ".send, .piano, .food" ).css( {"transition": "0.5s"} )
// 	$( ".circle2" ).css( {"display": "block"} )
// 	$( ".circle2" ).css( {"z-index": "100"} )
// 	$( ".circleWords2" ).css( {"display": "block"} )
// 	$( ".circleWords2" ).css( {"z-index": "100"} )
// 	$( ".circleUp" ).css( {"display": "block"} )
// 	$( ".circleUp" ).css( {"z-index": "200"} )
// })

// anime({
//   targets: '.path',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutSine',
//   duration: 1000,
//   delay: 8000,
//   direction: 'alternate',
//   // loop: true
// });

// setTimeout(function(){
// 	$( ".concert" ).css( {"z-index": "3" } )
// 	$( ".concert" ).css( {"transition": "1s"} )
// }, 6000);
