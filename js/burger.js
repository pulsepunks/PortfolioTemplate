$(document).ready(function() {
	$('.menu__icon').click(function(event) {
		$('.icon-menu, .menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});