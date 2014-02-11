$(function() {
	$("#menu-btn").on("click", function() {
		$(".sidebar").animate({left: "0"}, 200, function() {
			// $('#menu-btn').attr("id", "close-menu");
		});

		$(".main-wrapper").animate({left: "300"}, 200, function() {
			// animation done
		});
	});

	$("#close-menu").on("click", function() {
		alert("wow!");
		// $(".sidebar").animate({left: "-300"}, 500, function() {
		// 	$("#close-menu").attr("id", "menu-btn");
		// });

		// $(".main-wrapper").animate({left: "0"}, 500, function() {
		// 	// animation done
		// });	
	});	
});	