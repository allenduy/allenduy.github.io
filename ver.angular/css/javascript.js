// fade in on page load
$( document ).ready(function() {
	$('body').hide();
	setTimeout(function() {
		$('body').fadeIn(1200);
	}, 300);
});

$('a').click(function() {
	$('body').fadeOut(1200);
});