
var bgTag = $('#bg');

var bgsrc = [
	"http://img.chinatimes.com/newsphoto/2014-12-30/656/20141230003739.jpg",
	"http://img.chinatimes.com/newsphoto/2014-12-29/656/20141229004769.jpg",
	"https://uploads.mimoshow.com.au/wp-content/uploads/2013/12/162.jpg"
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
				'background': 'url(' + bgsrc[a%bgsrc.length] + ') center center',
				'background-size': 'cover'
			});
		}, 2000 + a*3000);
	
	}
})();