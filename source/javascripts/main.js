$(function() {
	var titleHeight = parseFloat($('.latest-post h2').css('height'));
	var titleHeightHalf = titleHeight / 2;
	console.log(titleHeightHalf);

	$('.latest-post h2').css('margin-top', -titleHeightHalf);
});