$(document).ready( function() {
    
    var width = $(iframe).width();
    console.log(width);

    var height = width * 3/4;
    console.log(height);

    $(iframe).height(height);
});