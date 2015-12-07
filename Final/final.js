$(document).ready(function() {
    $('.hovertext').hide();
    $('.hoverfade').animate({
        opacity:1

    });

    $('.hoverfade').hover(function() {
        $(this).stop().animate({opacity:.5},200);
        $('.hovertext').fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.hovertext').fadeOut();
    });


});
