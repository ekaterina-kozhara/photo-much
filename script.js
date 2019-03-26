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
	  $( ".blinkingCircle2" ).css( {"opacity": "0"} )
	  $( ".blinkingCircle" ).css( {"opacity": "0"} )
	  $( ".blinkingCircle2, .blinkingCircle" ).css( {"transition": "1s"} )
  }, 6000);

	setTimeout(function(){
		$( ".first" ).css( {"opacity": "0"} )
		$( ".first" ).css( {"transition": "3s"} )
	}, 900);

	setTimeout(function(){
		$( ".tracker" ).css( {"width": "110vw"} )
	}, 3000);

	setTimeout(function(){
		$( ".miniLogo" ).css( {"margin-right": "10%"} )
		$( ".miniLogo" ).css( {"margin-top": "70px"} )
		$( ".miniLogo" ).css( {"letter-spacing": "0.1em"} )
		$( ".miniLogo" ).css( {"font-family": "Sansation_Bold"} )
		$( ".miniLogo" ).css( {"z-index": "4"} )
		$( ".miniLogo" ).css( {"transition": "1s"} )
	}, 3000);

	setTimeout(function(){
		$( ".concert, .food, .piano, .send, .jump, .redbaloon, .waterfall, .water, .football, .feet, .backetball" ).css( {"opacity": "1"} )
		$( ".concert, .food, .piano, .send, .jump, .redbaloon, .waterfall, .water, .football, .feet, .backetball" ).css( {"transition": "5s"} )
	}, 5000);
	setTimeout(function(){
	  $( ".concert, .food, .piano, .send, .jump, .redbaloon, .waterfall, .water, .football, .feet, .backetball" ).css( {"opacity": "0"} )
		$( ".concert, .food, .piano, .send, .jump, .redbaloon, .waterfall, .water, .football, .feet, .backetball" ).css( {"transition": "3s"} )
	}, 16000);

	setTimeout(function(){
		$( ".second" ).css( {"display": "block"} )
		$( ".tracker" ).css( {"width": "60vw"} )
		$( ".last" ).css( {"margin-top": "0%"} )
		$( ".last" ).css( {"transition": "5s"} )


	}, 14000);
})
