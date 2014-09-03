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


// Sentences

(function($){
    
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
                $(div).find('.text')
                    .blast({ delimiter: "word" })
                    .velocity('transition.fadeIn', {
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

//Toggle Velocity Animation When Element Is In Viewport

// var contact_child = $('#contact').children(),
//     find = $('#find'),
//     meet = $('#meet'),
//     collaborate = $('#collaborate');

// find.appear();
// find.on('appear', function() {
//     // console.log('lol');
//     $(this).velocity('transition.slideLeftBigIn', {
//         duration: 600
//     });
// });

var find_txt = $('#find').find('#text-wrapper'),
    find_img = $('#find').find('#image-wrapper'),
    meet_txt = $('#meet').find('#text-wrapper'),
    meet_img = $('#meet').find('#image-wrapper'),
    collaborate_txt = $('#collaborate').find('#text-wrapper'),
    collaborate_img = $('#collaborate').find('#image-wrapper');

//Find Section
$('#l-main').waypoint(function() {
  find_txt.velocity('transition.slideLeftBigIn', {
    duration: 1000,
    delay: 300
  });
  find_img.velocity('transition.slideRightBigIn', {
    duration: 1000,
    delay: 300
  });
  $(this).waypoint('destroy');
});

//Meet Section
$('#find').waypoint(function() {
  meet_txt.velocity('transition.slideRightBigIn', {
    duration: 1000,
    delay: 300
  });
  meet_img.velocity('transition.slideLeftBigIn', {
    duration: 1000,
    delay: 300
  });
  $(this).waypoint('destroy');
});

//Collaborate Section
$('#meet').waypoint(function() {
  collaborate_txt.velocity('transition.slideLeftBigIn', {
    duration: 1000,
    delay: 300
  });
  collaborate_img.velocity('transition.slideRightBigIn', {
    duration: 1000,
    delay: 300
  });
  $(this).waypoint('destroy');
});



    












