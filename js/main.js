$(document).ready(function(){
	
	
	$('#protfolio_items').mixItUp();
	
	$(".carousel_full").owlCarousel({
		items:1,
		pagination:true,
		navigation:true,
		
		
		autoPlay:3000,
		navigationText:["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"]
	});
	
	
	
	
});



