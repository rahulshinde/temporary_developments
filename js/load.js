$(document).ready( function() {
	$("#content").load("intro.html");

    $("#intro-link").on("click", function() {
        $("#content").load("intro.html");
    });

    $("#logo-link").on("click", function() {
        $("#content").load("logo.html");
    });
});