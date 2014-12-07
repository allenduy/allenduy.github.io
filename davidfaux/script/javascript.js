$( document ).ready(function() {
	


// insert menu code
	$('#navMenu').load('menu/menuLevelOne.html');
	$('#navMenu').load('../menu/menuLevelTwo.html');
	$('#navMenu').load('../../menu/menuLevelThree.html');


// contentMenu height
	setInterval(function(){
		var heightValue = $('#content').height();
		$('#contentMenu').css('height', heightValue+5);
	}, 300);


// fade in on page load		
	$('#container').hide();
	$('.listMenu').hide();
	// $('#mainContent').hide();
			
		
	setTimeout(function() {
		$('#container').fadeIn(1200/*, function() {
			$('#mainContent').show('clip', 1500);
		}*/);
	}, 300);


// fade out on page redirect
	$('.listMenu a, #base a, #footer a, #mainContent a').click(function() {
		event.preventDefault();

		newLocation = this.href;

		$('#container').fadeOut(1000, redirectPage);
	});

	function redirectPage() {
		window.location = newLocation;
	}
	

// toggle menu expand
	$('#navMenu').toggle(function() {
		
		$(this).animate({
			height: '+=16.5em'
		}, 1200);
		
		$('.listMenu').fadeIn(1200);
		
	}, function() {
		
		$('.listMenu').fadeOut(670);
		
		$(this).animate({
			height: '-=16.5em'
		}, 700)
		
	});
	


});