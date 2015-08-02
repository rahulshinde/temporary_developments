$(document).ready( function() {
    $("#link").on("click", function() {
        $("#content").load("test.html");
    });
});