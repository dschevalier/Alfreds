$(document).ready(function () {

    /*---STICKY NAVIGATION---*/
    $('.js-section-meet').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });


    /*---FULL HEADER BUTTONS - SCROLL ON CLICK ---*/
    $('.js-scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js-section-plans').offset().top -60
        }, 1200);
    });

    $('.js-scroll-to-menu').click(function () {
        $('html, body').animate({
            scrollTop: $('.js-section-menu').offset().top -60
        }, 1200);
    });


    /*---SCROLL ON CLICK MAIN/STICKY NAV---*/
    $(document).ready(function () {
        // Add smooth scrolling to all links
        $("a").on('click', function (event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top -60
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });

    /*---ANIMATIONS ON SCROLL---*/
    $('.js-waypoint-1').waypoint(function (direction) {
        $('.js-waypoint-1').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });

    $('.js-waypoint-2').waypoint(function (direction) {
        $('.js-waypoint-2').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });

    $('.js-waypoint-3').waypoint(function (direction) {
        $('.js-waypoint-3').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    $('.js-waypoint-4').waypoint(function (direction) {
        $('.js-waypoint-4').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    /*---MOBILE NAVIGATION---*/
    $('.js-nav-icon, .js-main-nav a, .logo-black').click(function(element){
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i');

        //Gets the class name of the element that triggered the event
        var clicked = element.target.className;

        //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
        if (icon.hasClass('ion-navicon-round') && clicked == 'logo-black')
            return;

        //Opens and closes the menu
        if ($(window).width() < 767){
            nav.slideToggle(200);
        }

        //Changes icon states of the menu button
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

    $(window).resize(function(){
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i');

        if ($(window).width() > 767){
            nav.css("display", "block");
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            nav.css("display", "none");
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });

  });