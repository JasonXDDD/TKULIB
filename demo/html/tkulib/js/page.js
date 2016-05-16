
$('.XD-item').hover(
	function() {
		$(this).css('backgroundColor', 'red');
		$(this).find('.XD-content').css('display', 'block');
	},
	function() {
		$(this).css('backgroundColor', 'yellow');
		$(this).find('.XD-content').css('display', 'none');
	})


