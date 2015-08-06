var large,
    med,
    small;

var largeText,
    medText,
    smallText;

init();

function init() {
    large = Math.floor(Math.random() * 5) + 1 
    largeText = '<img class="logo-large" src="img/about/logo-large/logo' + large +'.jpg" alt="SOPH logo"/>'

    placeImg();
}

function placeImg() {
    enquire.register("screen and (min-width: 750px)", {
        setup : function() {
            $('#load-large').append(largeText);
        },    
        match : function() {
            $('#load-large').fadeIn('slow', function () {} );
        },  
        unmatch : function() {
            $('#load-large').fadeOut('fast', function () {} );
        }
    });
}