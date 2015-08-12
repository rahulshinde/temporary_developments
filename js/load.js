$(document).ready( function() {
	$("#content").load("about.html");

    enquire.register("screen and (min-width: 659px)", {
        setup : function() {
            $("#nav").hide();
        },    
        match : function() {
            $("#nav").show();

            $("#about-link").on("click", function() {
                $("#content").load("about.html");
                $('.link').removeClass('active');
                $(this).addClass('active');

                //mobile
                $('.site-position').removeClass('mobile-active');
                $('.about-mob').addClass('mobile-active');
            });

            $("#logo-link").on("click", function() {
                $("#content").load("logo.html");
                $('.link').removeClass('active');
                $(this).addClass('active');

                //mobile
                $('.site-position').removeClass('mobile-active');
                $('.logo-mob').addClass('mobile-active');
            });

            $("#invite-link").on("click", function() {
                $("#content").load("invite.html");
                $('.link').removeClass('active');
                $(this).addClass('active');

                //mobile
                $('.site-position').removeClass('mobile-active');
                $('.invite-mob').addClass('mobile-active');
            }); 
        
            $("#mes-link").on("click", function() {
                $("#content").load("mes.html");
                $('.link').removeClass('active');
                $(this).addClass('active');

                //mobile
                $('.site-position').removeClass('mobile-active');
                $('.mes-mob').addClass('mobile-active');
            });

            $("#4d-link").on("click", function() {
                $("#content").load("4d.html");
                $('.link').removeClass('active');
                $(this).addClass('active');

                //mobile
                $('.site-position').removeClass('mobile-active');
                $('.4d-mob').addClass('mobile-active');
            });

            $("#td-link").on("click", function() {
                $("#content").load("td.html");
                $('.link').removeClass('active');
                $(this).addClass('active');

                //mobile
                $('.site-position').removeClass('mobile-active');
                $('.td-mob').addClass('mobile-active');
            });

        },  

        unmatch : function() {
           $("#nav").hide();
        }
    });

    enquire.register("screen and (max-width: 649px)", {
        setup : function() {
            $("#nav-open").hide();
            $(".mobile-nav").hide();
        },    
        match : function() {
            $("#nav-open").show();

            $("#about-link-mob").on("click", function() {
                $("#content").load("about.html");
                $('.site-position').removeClass('mobile-active');
                $('.about-mob').addClass('mobile-active');

                //desktop
                $('.link').removeClass('active');
                $('#about-link').addClass('active');
                
            });

            $("#logo-link-mob").on("click", function() {
                $("#content").load("logo.html");
                $('.site-position').removeClass('mobile-active');
                $('.logo-mob').addClass('mobile-active');

                //desktop
                $('.link').removeClass('active');
                $('#logo-link').addClass('active');
                
            });

            $("#invite-link-mob").on("click", function() {
                $("#content").load("invite.html");
                $('.site-position').removeClass('mobile-active');
                $('.invite-mob').addClass('mobile-active');

                //desktop
                $('.link').removeClass('active');
                $('#invite-link').addClass('active');
                
            });

            $("#mes-link-mob").on("click", function() {
                $("#content").load("mes.html");
                $('.site-position').removeClass('mobile-active');
                $('.mes-mob').addClass('mobile-active');

                //desktop
                $('.link').removeClass('active');
                $('#mes-link').addClass('active');
                
            });
        },  
        unmatch : function() {
            $("#nav-open").hide();
            $(".mobile-nav").hide();
        }
    });

});