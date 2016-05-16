
var bgTag = $('#bg');

var bgsrc = [
	"../../res/fwd/kungfu2.jpg",
	"../../res/fwd/kungfu3.jpg",
	"../../res/fwd/kungfu4.jpg",
	// "../../res/fwd/kungfu5.jpg",
	"../../res/fwd/kungfu6.jpg"
];

(function() {
	// body...
	console.log(bgTag);
	
	for(let a = 0; a < 10000; a++){
		//fadeout pre
		setTimeout(function() {
			bgTag.attr('class','animated fadeOut');
		}, 1000 + a*3000);

		//fadein this
		setTimeout(function() {
			bgTag.attr('class', 'animated fadeIn');
			bgTag.css({
				'background': 'url(' + bgsrc[a%bgsrc.length] + ') top center',
				'background-repeat': 'no-repeat',
				'background-size': 'cover'
			});
		}, 2000 + a*3000);
	
	}
})();
