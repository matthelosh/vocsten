$(document).ready(function(){
	$(function(){
		$('.dropdown').hover(function() {

			$(this).css('background', 'transparent').addClass('open');
		},
		function() {
			$(this).removeClass('open');
		});
	});

	$(document).on('click', '.navbar-collapse.in', function(e){
		if($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle'){
			$(this).collapse('hide');
		}
	});
	// if(screen.width < 768){
	// 	$(".navbar").removeClass('navbar-default').addClass("navbar-inverse");
	//
	// }else{
	// 	$(".navbar").removeClass("navbar-inverse").addClass("navbar-default");
	// }
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	console.log(wScroll);
});
