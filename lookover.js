$(document).ready(function () {
    $('.navmenu').click(function(){
        $('.navbar-nav, .navbar-links').toggleClass('toggleNav');
    });
    $('#navBody').click(function(){
        $('.navbar-nav, .navbar-links').removeClass('toggleNav');
    });
    if ($(".navbar").hasClass("sticky")) {
        $("main").addClass("stickyBody");
    } else {
        $("main").removeClass("stickyBody");
    }
});