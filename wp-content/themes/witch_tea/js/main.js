$(document).ready(function() {
	$(".menu").on("click", function() {
		$('.menu_overlay').css("visibility", "visible");
		$(".menu_overlay").on("click", function() {
			$('.menu_overlay').css("visibility", "hidden");
		});
	});
});


