$(document).ready( function() {
	var width,
		height;

	init();


	function init() {
		 width = $(iframe).width();

    	height = width * 2/3;

    	$(iframe).height(height);
	}

    $(window).resize(function() {
        updateDimensions();
    });

    function updateDimensions() {
    	var width = $(iframe).width();
    	var height = width * 72/108;
    	$(iframe).height(height);
    }

    
});