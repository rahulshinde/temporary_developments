$(document).ready( function() {
	$("#content").load("about.html");

    // mobile nav loading

    $("#nav-open").on("click", function() {
        $("#nav-open").fadeToggle("fast", function() {});
        $(".mobile-nav").slideToggle("fast", function() {});       
    });

    $("#close").on("click", function() {
        $(".mobile-nav").slideToggle("fast", function() {});
        $("#nav-open").fadeToggle("slow", function() {});
    });

    enquire.register("screen and (min-width: 650px)", {
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

                //scroll
                $('body,html').animate({scrollTop: 0 ,}, 0);
            });

            $("#logo-link").on("click", function() {
                $("#content").load("logo.html");
                $('.link').removeClass('active');
                $(this).addClass('active');

                //mobile
                $('.site-position').removeClass('mobile-active');
                $('.logo-mob').addClass('mobile-active');

                //scroll
                $('body,html').animate({scrollTop: 0 ,}, 0);
            });

            $("#invite-link").on("click", function() {
                $("#content").load("invite.html");
                $('.link').removeClass('active');
                $(this).addClass('active');

                //mobile
                $('.site-position').removeClass('mobile-active');
                $('.invite-mob').addClass('mobile-active');

                //scroll
                $('body,html').animate({scrollTop: 0 ,}, 0);
            }); 
        
            $("#mes-link").on("click", function() {
                $("#content").load("mes.html");
                $('.link').removeClass('active');
                $(this).addClass('active');

                //mobile
                $('.site-position').removeClass('mobile-active');
                $('.mes-mob').addClass('mobile-active');

                //scroll
                $('body,html').animate({scrollTop: 0 ,}, 0);
            });

            $("#4d-link").on("click", function() {
                $("#content").load("4d.html");
                $('.link').removeClass('active');
                $(this).addClass('active');

                //mobile
                $('.site-position').removeClass('mobile-active');
                $('.4d-mob').addClass('mobile-active');

                //scroll
                $('body,html').animate({scrollTop: 0 ,}, 0);
            });

            $("#td-link").on("click", function() {
                $("#content").load("td.html");
                $('.link').removeClass('active');
                $(this).addClass('active');

                //mobile
                $('.site-position').removeClass('mobile-active');
                $('.td-mob').addClass('mobile-active');

                //scroll
                $('body,html').animate({scrollTop: 0 ,}, 0);
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
                
                //scroll
                $('body,html').animate({scrollTop: 0 ,}, 0);
            });

            $("#logo-link-mob").on("click", function() {
                $("#content").load("logo.html");
                $('.site-position').removeClass('mobile-active');
                $('.logo-mob').addClass('mobile-active');

                //desktop
                $('.link').removeClass('active');
                $('#logo-link').addClass('active');
                
                //scroll
                $('body,html').animate({scrollTop: 0 ,}, 0);
            });

            $("#invite-link-mob").on("click", function() {
                $("#content").load("invite.html");
                $('.site-position').removeClass('mobile-active');
                $('.invite-mob').addClass('mobile-active');

                //desktop
                $('.link').removeClass('active');
                $('#invite-link').addClass('active');
                
                //scroll
                $('body,html').animate({scrollTop: 0 ,}, 0);
            });

            $("#mes-link-mob").on("click", function() {
                $("#content").load("mes.html");
                $('.site-position').removeClass('mobile-active');
                $('.mes-mob').addClass('mobile-active');

                //desktop
                $('.link').removeClass('active');
                $('#mes-link').addClass('active');
                
                //scroll
                $('body,html').animate({scrollTop: 0 ,}, 0);
            });

            $("#4d-link-mob").on("click", function() {
                $("#content").load("4d.html");
                $('.site-position').removeClass('mobile-active');
                $('.4d-mob').addClass('mobile-active');

                //desktop
                $('.link').removeClass('active');
                $('#4d-link').addClass('active');

                //scroll
                $('body,html').animate({scrollTop: 0 ,}, 0);
            });

            $("#td-link-mob").on("click", function() {
                $("#content").load("td.html");
                $('.site-position').removeClass('mobile-active');
                $('.td-mob').addClass('mobile-active');

                //desktop
                $('.link').removeClass('active');
                $('#td-link').addClass('active');

                //scroll
                $('body,html').animate({scrollTop: 0 ,}, 0);  
            });
        },  
        unmatch : function() {
            $("#nav-open").hide();
            $(".mobile-nav").hide();
        }
    });

});