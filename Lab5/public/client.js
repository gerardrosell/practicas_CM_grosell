/**
 * Created by boyander on 11/10/16.
 */
$(document).ready(function(){

    $('.img-rounded').mouseenter(function() {
    	$(this).fadeTo("slow", 0.3);
        $(this).parent().addClass("selected");
    });
    $('.img-rounded').mouseout(function() {
    	$(this).fadeTo("slow", 1);
        $(this).parent().removeClass("selected");
    });
});
