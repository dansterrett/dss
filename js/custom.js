jQuery(document).ready(function () {
    "use strict";


    /**
     * =====================================
     * Header Menuzord Plugin
     * =====================================
     */

    $("#menuzord").menuzord({
        align: "right",
		indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
		indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
    });



    /**
     * =====================================
     * Feature Slider List Add/Remove Active Class
     * =====================================
     */


    $(".feature-carousel-list li").on('click', function () {
        $(".feature-carousel-list li").removeClass("active");
        $(this).addClass("active");
    });

    /**
     * =====================================
     * Feature Double Slider
     * =====================================
     */


    $('.feature-carousel-list li').on('click', function () {
        $('.carousel').carousel(parseInt(this.getAttribute('data-to')));
    });


    /**
     * =====================================
     * Accordion Header Active icon (+,-) Add or Remove
     * =====================================
     */

    function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find("i.indicator")
            .toggleClass('ion-minus ion-plus');
    }
    $('#accordion').on('hidden.bs.collapse', toggleChevron);
    $('#accordion').on('shown.bs.collapse', toggleChevron);




    /**
     * =====================================
     * Magnific Popup for Youtube Video
     * =====================================
     */

//    $('.banner-content').magnificPopup({
//        items: {
//            src: 'https://www.youtube.com/watch?v=ZLlJfW0_GtA'
//        },
//        type: 'iframe'
//    });



    /**
     * =====================================
     * Review or Testimonial Slider
     * =====================================
     */

    $(".clients-reviews").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds
        pagination: false,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });


    /**
     * =====================================
     * Counter
     * =====================================
     */

    $('.counter-single').counterUp({
        delay: 10,
        time: 1000
    });



    /**
     * =====================================
     * Page Scroll Navigation Plugin
     * =====================================
     */
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'linear', // the easing function for animation
        scrollTime: 1000, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: 0 // offste (in px) for fixed top navigation
    });



    /**
     * =====================================
     * Function for email address validation
     * =====================================
     */

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    };




    /**
     * ============================
     * CONTACT FORM 2
     * ============================
     */

    // $("#contact-form-2").on('submit', function (e) {
    //     e.preventDefault();
    //     var $this = $(this);
    //     var success = $this.find('.email-success'),
    //         failed = $this.find('.email-failed'),
    //         loader = $this.find('.email-loading'),
    //         postUrl = $this.attr('action');
    //
    //     var data = {
    //         name: $this.find('.contact-name').val(),
    //         email: $this.find('.contact-email').val(),
    //         subject: $this.find('.contact-subject').val(),
    //         message: $this.find('.contact-message').val()
    //     };
    //
    //     if (isValidEmail(data['email']) && (data['message'].length > 1) && (data['name'].length > 1)) {
    //         $.ajax({
    //             type: "POST",
    //             url: postUrl,
    //             data: data,
    //             beforeSend: function () {
    //                 loader.fadeIn(1000);
    //             },
    //             success: function (data) {
    //                 loader.fadeOut(1000);
    //                 success.delay(500).fadeIn(1000);
    //                 failed.fadeOut(500);
    //             },
    //             error: function (xhr) { // if error occured
    //                 loader.fadeOut(1000);
    //                 failed.delay(500).fadeIn(1000);
    //                 success.fadeOut(500);
    //             },
    //             complete: function () {
    //                 loader.fadeOut(1000);
    //             }
    //         });
    //     } else {
    //         loader.fadeOut(1000);
    //         failed.delay(500).fadeIn(1000);
    //         success.fadeOut(500);
    //     }
    //
    //     return false;
    // });

    function getRequestParameter(name){
      if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search)) {
        return decodeURIComponent(name[1]);
      }
    }

    if (getRequestParameter('showThankYou') === '1') {
      $('#thank-you-modal').modal('show');
    }
});

/**
 * ============================
 * Sticky Header Activation
 * ============================
 */

$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('.header').addClass("sticky");
    } else {
        $('.header').removeClass("sticky");
    }
});

/**
 * ============================
 * Color Switcher
 * ============================
 */
var colorSheets = [
    {
        color: "#FF2A40",
        title: "Switch to Default",
        href: "./css/color-red.css"
	},
    {
        color: "#00CDAC",
        title: "Switch to Red",
        href: "./css/color-green.css"
	},
    {
        color: "#FE37A2",
        title: "Switch to Green",
        href: "./css/color-pink.css"
	},
    {
        color: "#03A9F4",
        title: "Switch to Blue",
        href: "./css/color-blue.css"
	}
];

// ColorSwitcher.init(colorSheets);
