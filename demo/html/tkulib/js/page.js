
$('.XD-item').hover(
	function() {
		$(this).find('.XD-mask').css('display', 'block');

		$(this).find('.XD-content').css({
			display: 'block',
			color: "pink"
			
		});
		
		$(this).find('.XD-item-btn').css({
			backgroundColor: "pink",
			opacity: 1,
			textDecoration: "none",
			color: "black"
		});

	},
	function() {
		$(this).find('.XD-content').css('display', 'none');
		$(this).find('.XD-mask').css('display', 'none');
		$(this).find('.XD-item-btn').css({
			backgroundColor: "black",
			opacity: 0.5,
			color: "white"
		});
	})


