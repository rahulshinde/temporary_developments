var large,
    med,
    small;

var largeText,
    medText,
    smallText;

init();

function init() {
    large = Math.floor(Math.random() * 5) + 1 
    largeText = '<img class="logo" src="img/about/logo-large/logo' + large +'.jpg" alt="SOPH logo"/>'

    med = Math.floor(Math.random() * 3) + 1 
    medText = '<img class="logo" src="img/about/logo-med/logo' + med +'.jpg" alt="SOPH logo"/>'

    placeImg();
}

function placeImg() {
    enquire.register("screen and (min-width: 900px)", {
        setup : function() {
            $('#load-large').append(largeText).hide();
        },    
        match : function() {
            $('#load-large').fadeIn('slow', function () {} );
        },  
        unmatch : function() {
            $('#load-large').hide();
        }
    });

    enquire.register("screen and (max-width: 899px)", {
        setup : function() {
            console.log('hello');
            $('#load-med').append(medText).hide();
        },    
        match : function() {
            $('#load-med').fadeIn('slow', function () {} );
        },  
        unmatch : function() {
            $('#load-med').hide();
        }
    });
}