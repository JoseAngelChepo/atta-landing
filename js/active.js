/* ===================== active your plugin here ========================= */

(function($) {
    "use strict";


    /* ==========================================================================
   window laod function
   ========================================================================== */
    
    $(window).load(function() {
        $(window).trigger("scroll");
        $(window).trigger("resize");
        $("#content-preloader").fadeOut('fast');
        $("#atom-preloader").fadeOut("slow");
    });


    /* ==========================================================================
   document ready function
   ========================================================================== */
    
    $(document).ready(function() {

        $(window).trigger("resize");
        // STARS
          $("#star").each(function() {
            postars($('.cover')[0]).init();
          });
        // Countdown
          // To change date, simply edit: var endDate = "Feb 26, 2017 20:39:00";
          $(function() {
            var endDate = "Feb 26, 2017 20:39:00";
            $('.atom-countdown').countdown({
              date: endDate,
              render: function(data) {
                $(this.el).html('<div><div><span>' + (parseInt(this.leadingZeros(data.years, 2)*365) + parseInt(this.leadingZeros(data.days, 2))) + '</span><span>días</span></div><div><span>' + this.leadingZeros(data.hours, 2) + '</span><span>horas</span></div></div><div class="atom-countdown-ms"><div><span>' + this.leadingZeros(data.min, 2) + '</span><span>minutos</span></div><div><span>' + this.leadingZeros(data.sec, 2) + '</span><span>segundos</span></div></div>');
              }
            });
          });

           /* Typed
          ================================================== */
          $(".element").each(function(){
              var $this = $(this);
              $this.typed({
              strings: $this.attr('data-elements').split(','),
              typeSpeed: 100, // typing speed
              backDelay: 5000, // pause before backspacing
              });
          });

          // nicescroll 
          $("html, .page-section, .main-wrapper").niceScroll({
              cursorcolor: "#3b3b3b",
              cursorborder: "3px solid #3b3b3b",
              autohidemode: true,
              bouncescroll: true,
              mousescrollstep: 80, // scrolling speed with mouse wheel (pixel)
          });

           // Progress bars
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx){
                $(this).css("width", $(this).attr("aria-valuenow") + "%");
            });
          // popup gallery 
          $(".popup-gallery").magnificPopup({
            delegate: "a",
            type: "image",
            fixedContentPos: true,
            fixedBgPos: true,
            tLoading: "Loading image #%curr%...",
            removalDelay: 600,
            closeBtnInside: true,
            zoom: {
                enabled: true,
                duration: 700
            },
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [ 0, 1 ]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        });

        // ajax mail Chimp
        $('#atom-mc-form').ajaxChimp({
                language: 'tr98',
                url: 'http://hasib-rahman.us8.list-manage2.com/subscribe/post?u=74e8ba57153fb3b7bae403d34&id=514058c103'                
            });


          // Mailchimp translation
            //
            // Defaults:
            //'submit': 'Submitting...',
            //  0: 'We have sent you a confirmation email',
            //  1: 'Please enter a value',
            //  2: 'An email address must contain a single @',
            //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
            //  4: 'The username portion of the email address is invalid (the portion before the @: )',
            //  5: 'This email address looks fake or invalid. Please enter a real email address'

            $.ajaxChimp.translations.tr98 = {
              'submit': 'Submitting...',
              0: '<p> We will be in touch soon!</p>',
              1: '<p> Please enter a value.</p>',
              2: '<p> E-mail address is not valid.</p>',
              3: '<p> E-mail address is not valid.</p>',
              4: '<p> E-mail address is not valid.</p>',
              5: '<p> E-mail address is not valid.</p>'
            };
         
    });


})(jQuery);