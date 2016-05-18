

(function() {
	$('#bg').css({
		background: 'url(img/show-bg.jpg) center center',
		backgroundSize: "cover",
	});
})();

$(document).ready(function(){
  $("#show").owlCarousel({

		autoPlay: 3000, //Set AutoPlay to 3 seconds
		items : 5,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [700, 1]
	});
});
