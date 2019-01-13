// JavaScript Document
$(document).ready(function(){
 /* Timer */

	$('.clock').countdown('2020/10/10', function(event) {
	  $(this).html(event.strftime('%H:%M:%S'));
	});
	$('.j-order').click(function() {
		var $form = $(".form").offset().top;
		$("html, body").animate({scrollTop : $form}, 666);
		return false;
	});
	var places_left = 17;
	var myVar = setInterval(function(){ myTimer() }, 15000);
	function myTimer() {
		places_left -=1
		$('.j-left').text(places_left);
		if (places_left < 10) {
			myStopFunction();
		};
	}
	function myStopFunction() {
		clearInterval(myVar);
	}
	$('.owl-carousel').owlCarousel({
		loop:true,
		items:1,
		nav: true,
		pagination: true
	});
});
