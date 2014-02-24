$(function() {
#	var titleHeight = parseFloat($('.latest-post h2').css('height'));
	var titleHeightHalf = titleHeight / 2;
	console.log(titleHeightHalf);

	$('.latest-post h2').css('margin-top', -titleHeightHalf);

	var img = new Image();
	img.onload = function() {
		var blendImg = new Image();
		blendImg.onload = function() {
			Pixastic.process(img, "blend", 
				{
					amount : 1, 
					mode : "multiply", 
					image : blendImg
				}
			);
		}
		blendImg.src = "header-logo.png";
	}
	img.src = "myimage.jpg";
});
