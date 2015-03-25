$("document").ready(function() {
	$(".toggle-btn").click(function() {
			if($(this).hasClass("toggle-btn--active")){
				$(this).removeClass("toggle-btn--active")
			}else{
				$(this).addClass('toggle-btn--active');
			}

			$(".menu-top__navigation").slideToggle(300);
	});
});
