
var bgTag = $('#bg');

var bgsrc = [
	"img/main/1.jpg",
	"img/main/2.jpg",
	"img/main/3.jpg",
	"img/main/4.jpg",
	"img/main/5.jpg"
];



(function() {
	// body...
	console.log(bgTag);
	
	for(let a = 0; a < bgsrc.length; a++){
		//fadeout pre
		setTimeout(function() {
			bgTag.attr('class','animated fadeOut');
		}, 1000 + a*3000);

		//fadein this
		setTimeout(function() {
			bgTag.attr('class', 'animated fadeIn');
			bgTag.css({
				'background': 'url(' + bgsrc[a] + ') top center',
				'background-repeat': 'no-repeat',
				'background-size': 'cover'
			});
		}, 2000 + a*3000);
	
	}

	//show topic 
	setTimeout(function() {
		bgTag.attr('class','animated fadeOut');
	}, 1000 + bgsrc.length*3000);

	setTimeout(function() {
		bgTag.css({'display': 'none'});
		$('.XD-topic').attr('class', 'XD-topic animated fadeIn');
		$('.XD-topic').css({
			'display': 'block',
			'background': 'url(img/main/topic.jpg) center center',
			'background-repeat': 'no-repeat',
			'background-size': 'cover'
		});
		
	}, 2000 + bgsrc.length*3000);
	

})();
