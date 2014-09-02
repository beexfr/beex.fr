/**
 * Global variables
 *
 * @author Jonathan Path
 */

// Remove NavBar from iOS
if( !window.location.hash && window.addEventListener ){
    window.addEventListener( "load",function() {
        setTimeout(function(){
            window.scrollTo(0, 0);
        }, 0);
    });
    window.addEventListener( "orientationchange",function() {
        setTimeout(function(){
            window.scrollTo(0, 0);
        }, 0);
    });
}


(function($){

    // Smooth Scroll Ancor
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top - ($('#l-header').height()/1.3)
                }, 1000);
                return false;
            }
        }
    });

            // console.log($('#l-header').attr('class','header-small').height()/1.3);

    // Sentences
    
    //Start ajax request
    $.ajax({
        url: "src/js/data.json",
        dataType: 'text ',
        success: function(data) {
            //data downloaded so we call parseJSON function and pass it downloaded data
            var json = $.parseJSON(data),
                div = $('#sentences_wrapper'),
                r,
                sentence,
                animationDuration = 2500;

            function changeSentence () {
                r = Math.round(Math.random() * (json.sentences.length - 1));
                var randomTitle = json.sentences[r],
                    randomText = randomTitle.texts[Math.round(Math.random() * (randomTitle.texts.length - 1))];

                sentence = randomTitle.title + ' ' + randomText.text;
                div.empty().append($('<span>').css('display','none').text(randomTitle.title).addClass('title'))
                         .append($('<span>').text(randomText.text).addClass('text'));
                $(div).find('.title')
                    .velocity('transition.slideRightBigIn', { 
                        display: 'block', 
                        duration: animationDuration
                    })
                    // .velocity('reverse', { display: 'none' });
                $(div).find('.text')
                    .blast({ delimiter: "word" })
                    .velocity('transition.fadeIn', {
                        // display: 'block',
                        // duration: animationDuration,
                            delay: animationDuration,
                            duration: animationDuration,
                            stagger: 150,
                        complete : function () {
                            $(div).find('span').velocity('transition.fadeOut', { duration: animationDuration/2 })
                        }
                    })
            }

            changeSentence();

            setInterval(changeSentence, animationDuration * 3);
        }
    });
      
})(jQuery);

// Animated Header
var cbpAnimatedHeader = (function() {
 
    var docElem = document.documentElement,
        header = $('#l-header'),
        contact_link = $('#l-header nav a'),
        contact_link_before = $('#l-header nav a::before'),
        didScroll = false,
        changeHeaderOn = 300;
 
    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }
 
    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            header.addClass('header-small');
        }
        else {
            header.removeClass('header-small');
        }
        didScroll = false;
    }
 
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
 
    init();

    //Add Class on Click
    $('a').mouseenter(function() {
      $('nav > a').removeClass('clicked');
    })

    //Remove Class on Hover
    $('a').click(function() {
      $("nav > a").removeClass('clicked');
      $(this).toggleClass('clicked');
    })
     
})();

var menu_item = $('#nav').children();
var contact_child = $('#contact').children();
menu_item.click(function () {
    contact_child.addClass('is-focused');
})


    












