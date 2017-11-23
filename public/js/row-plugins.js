/* ===================== write your custom javascript here ========================= */
(function($) {
    "use strict";
    // background image
    var pageSection = $(".bg-img");
    pageSection.each(function(indx){
        
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // Menu function

    $(".toggle-bar").on('click', function(e) {
    	e.preventDefault();
    	$(this).toggleClass('exit');
    	$(".atom-menu").toggleClass('show-menu');
    });

    $(".atom-menu a").click(function(e) {
    	e.preventDefault();
        $(".page-section").fadeOut('slow');
    	$("#content-preloader").fadeIn('fast').delay(1000).fadeOut('slow');
    	$(this).parent('li').siblings().removeClass('active');
	    $(this).parent('li').addClass('active');
    	var pageLink = $(this).attr('href');
    	setTimeout(function(){
            $(".page-section").removeClass('active');
	    	$(pageLink).addClass('active').delay(500).fadeIn('slow');
    	}, 1000);
    });


})(jQuery);