$(document).ready( function() {
	$("#content").load("intro.html");

    $("#intro-link").on("click", function() {
        $("#content").load("intro.html");
        $('.link').removeClass('active');
		$(this).addClass('active');
    });

    $("#logo-link").on("click", function() {
        $("#content").load("logo.html");
        $('.link').removeClass('active');
		$(this).addClass('active');
    });

    $("#invite-link").on("click", function() {
        $("#content").load("invite.html");
        $('.link').removeClass('active');
		$(this).addClass('active');
    });

    $("#mes-link").on("click", function() {
        $("#content").load("mes.html");
        $('.link').removeClass('active');
		$(this).addClass('active');
    });

    $("#4d-link").on("click", function() {
        $("#content").load("4d.html");
        $('.link').removeClass('active');
		$(this).addClass('active');
    });

    $("#td-link").on("click", function() {
        $("#content").load("td.html");
        $('.link').removeClass('active');
		$(this).addClass('active');
    });
});