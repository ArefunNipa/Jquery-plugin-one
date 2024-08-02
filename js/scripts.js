
$(function(){
	new VenoBox({
		selector: '.venobox',
		numeration: true,
		infinigall: true,
		share: true,
		spinner: 'rotating-plane'
	});

	new VenoBox({
		selector: '.my-video-links',
	});

	var mmmEl = document.querySelector('.mmm');

    var mixer = mixitup(mmmEl);
 });

