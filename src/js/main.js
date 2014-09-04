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
        contact_link = $('#nav').find('a'),
        contact_link_before = $('#nav a::before'),
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

var find_txt = $('#find_txt'),
    find_img = $('#find_img'),
    meet_txt = $('#meet_txt'),
    meet_img = $('#meet_img'),
    collaborate_txt = $('#collaborate_txt'),
    collaborate_img = $('#collaborate_img');

//Find Section
$('#find').waypoint(function() {
  find_txt.velocity({
    opacity: [1,0.2],
    duration: 4000
  });
  find_img.velocity('transition.slideRightBigIn', {
    duration: 1000
  });
  $(this).waypoint('disable');
}, { offset: '60%' });

//Meet Section
$('#meet').waypoint(function() {
  meet_txt.velocity({
    opacity: [1,0.2],
    duration: 4000
  });
  meet_img.velocity('transition.slideLeftBigIn', {
    duration: 1000
  });
  $(this).waypoint('disable');
}, { offset: '35%' });

//Collaborate Section
$('#collaborate').waypoint(function() {
  collaborate_txt.velocity({
    opacity: [1,0.2],
    duration: 4000
  });
  collaborate_img.velocity('transition.slideRightBigIn', {
    duration: 1000
  });
  $(this).waypoint('disable');
}, { offset: '35%' });


//ScrollSpy
(function($){

    var sections = [],
        id = false,
        nav = $('#nav'),
        links = $('a', nav);
        

    //We save here all the links of our header in a table previously declared
    links.each(function(){
        sections.push($($(this).attr('href')));
    });

    //We now listen to the user scoll to make it match to half our viewport.
    //Half viewport because this is the point where we choose wether or not to style our links.
    $(window).scroll(function(e){
        var scrollTop = $(this).scrollTop() + ($(window).height() / 2);
        console.log(scrollTop);

        //Now we have to compare the value of the scrollTop to the top distance of our links
        for(var i in sections){
            var section = sections[i];
            //If the top distance of our section is higher than our scrollTop value we aim it
            if (scrollTop > section.offset().top) {
                scrolled_id = section.attr('id');
            } 
        }

        //We only want to style the link if the id changes
        if(scrolled_id !== id){
            //We store in our id variable the scrolled_id value in order to prevent 
            //the function to execute itself over and over even if the id didn't change.
            id = scrolled_id;
            //Now we style the specific element which has the id previously generated
            links.removeClass('clicked');
            $('a[href="#' + id + '"]', nav).addClass('clicked');  
            console.log('Menu change pour : ' + id);
        }
    });
    
})(jQuery);

//Dynamic Year in Footer
$('#year').text(new Date().getFullYear());



    












