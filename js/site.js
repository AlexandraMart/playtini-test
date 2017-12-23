$( document ).ready(function() {
/*$('.active a.clickable').on("click", function (e) {
    if ($(this).hasClass('panel-collapsed')) {
        $(this).parents('.active').find('.collapsein').slideDown();
        $(this).removeClass('panel-collapsed');
        $(this).find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
    }
    else {
        $(this).parents('.active').find('.collapsein').slideUp();
        $(this).addClass('panel-collapsed');
        $(this).find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
    }
});*/

$('.btn-navbar').click(function(e) {
        $(this).toggleClass('active');
        $('.menu-main ul').toggleClass('active');
 
        e.preventDefault();

});

$('.menu-main li a').click(function(e) {
        e.preventDefault();

});


});