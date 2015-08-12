$(document).ready( function() {

    $("#nav-open").on("click", function() {
        $("#nav-open").fadeToggle("fast", function() {});
        $(".mobile-nav").slideToggle("slow", function() {});       
    });

    $("#close").on("click", function() {
        $(".mobile-nav").slideToggle("fast", function() {});
        $("#nav-open").fadeToggle("slow", function() {});
    });

});