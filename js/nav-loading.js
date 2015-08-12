$(document).ready( function() {

    $("#nav-open").on("click", function() {
        $("#nav-open").fadeToggle("fast", function() {});
        $(".mobile-nav").fadeToggle("slow", function() {});       
    });

    $("#close").on("click", function() {
        $(".mobile-nav").fadeToggle("fast", function() {});
        $("#nav-open").fadeToggle("slow", function() {});
    });

});s