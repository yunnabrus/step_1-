$(document).ready(function(){
    $('.item').mouseenter(function() {
        $('.submenu', this).slideDown(300);
    });
    $('.item').mouseleave(function() {
        $('.submenu', this).slideUp(600);
    });
    $('.group-item').mouseenter(function() {
        $('.group-submenu', this).slideDown('slow');
        $('.group-submenu', this).addClass('active');
        $('.group-submenu', this).next.removeClass('active');
    });
    $('.group-item').mouseleave(function() {
        $('.group-submenu', this).slideUp(200);
    });
});