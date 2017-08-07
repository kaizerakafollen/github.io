$(document).ready(function(){

	var show=true;
	$(window).on('scroll', function(){

		if(!show) return false;

		var w_top = $(window).scrollTop();
		var e_top = $("#counts").offset().top;

		console.log(w_top + 500 + " " + e_top);

		if(w_top + 500 >= e_top){
			$('.spincrement').spincrement({
				duration: 2000
			});

			show = false;

		}
	})
});











	