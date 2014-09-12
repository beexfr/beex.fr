// Avoid `console` errors in browsers that lack a console.
// if (!(window.console && console.log)) {
//     (function() {
//         var noop = function() {};
//         var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
//         var length = methods.length;
//         var console = window.console = {};
//         while (length--) {
//             console[methods[length]] = noop;
//         }
//     }());
// }

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

// Place any jQuery/helper plugins in here.

/*!
* Velocity.js: Accelerated JavaScript animation.
* @version 0.11.2
* @docs http://VelocityJS.org
* @license Copyright 2014 Julian Shapiro. MIT License: http://en.wikipedia.org/wiki/MIT_License
*/
!function(e){"function"==typeof define&&define.amd?window.Velocity?define(e):define(["jquery"],e):e("object"==typeof exports?window.Velocity?void 0:require("jquery"):window.jQuery)}(function(e){return function(t,r,a,o){function i(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var o=e[t];o&&a.push(o)}return a}function n(e){var t=$.data(e,p);return null===t?o:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,t){var r=e;return y.isString(e)?v.Easings[e]||(r=!1):r=y.isArray(e)&&1===e.length?s.apply(null,e):y.isArray(e)&&2===e.length?x.apply(null,e.concat([t])):y.isArray(e)&&4===e.length?S.apply(null,e):!1,r===!1&&(r=v.Easings[v.defaults.easing]?v.defaults.easing:f),r}function u(e){if(e)for(var t=(new Date).getTime(),r=0,a=v.State.calls.length;a>r;r++)if(v.State.calls[r]){var i=v.State.calls[r],s=i[0],l=i[2],p=i[3];p||(p=v.State.calls[r][3]=t-16);for(var d=Math.min((t-p)/l.duration,1),f=0,g=s.length;g>f;f++){var m=s[f],S=m.element;if(n(S)){var x=!1;l.display&&"none"!==l.display&&b.setPropertyValue(S,"display",l.display),l.visibility&&"hidden"!==l.visibility&&b.setPropertyValue(S,"visibility",l.visibility);for(var V in m)if("element"!==V){var P=m[V],w,C=y.isString(P.easing)?v.Easings[P.easing]:P.easing;if(w=1===d?P.endValue:P.startValue+(P.endValue-P.startValue)*C(d),P.currentValue=w,b.Hooks.registered[V]){var T=b.Hooks.getRoot(V),k=n(S).rootPropertyValueCache[T];k&&(P.rootPropertyValue=k)}var E=b.setPropertyValue(S,V,P.currentValue+(0===parseFloat(w)?"":P.unitType),P.rootPropertyValue,P.scrollData);b.Hooks.registered[V]&&(n(S).rootPropertyValueCache[T]=b.Normalizations.registered[T]?b.Normalizations.registered[T]("extract",null,E[1]):E[1]),"transform"===E[0]&&(x=!0)}l.mobileHA&&n(S).transformCache.translate3d===o&&(n(S).transformCache.translate3d="(0px, 0px, 0px)",x=!0),x&&b.flushTransformCache(S)}}l.display&&"none"!==l.display&&(v.State.calls[r][2].display=!1),l.visibility&&"hidden"!==l.visibility&&(v.State.calls[r][2].visibility=!1),l.progress&&l.progress.call(i[1],i[1],d,Math.max(0,p+l.duration-t),p),1===d&&c(r)}v.State.isTicking&&(v.mock?u(!0):h(u))}function c(e,t){if(!v.State.calls[e])return!1;for(var r=v.State.calls[e][0],a=v.State.calls[e][1],i=v.State.calls[e][2],s=v.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||i.loop||("none"===i.display&&b.setPropertyValue(p,"display",i.display),"hidden"===i.visibility&&b.setPropertyValue(p,"visibility",i.visibility)),($.queue(p)[1]===o||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&n(p)){n(p).isAnimating=!1,n(p).rootPropertyValueCache={};var d=!1;$.each(n(p).transformCache,function(e,t){var r=/^scale/.test(e)?1:0;new RegExp("^\\("+r+"[^.]").test(t)&&(d=!0,delete n(p).transformCache[e])}),i.mobileHA&&(d=!0,delete n(p).transformCache.translate3d),d&&b.flushTransformCache(p),b.Values.removeClass(p,"velocity-animating")}if(!t&&i.complete&&!i.loop&&u===c-1)try{i.complete.call(a,a)}catch(f){setTimeout(function(){throw f},1)}s&&i.loop!==!0&&s(a),i.loop!==!0||t||v.animate(p,"reverse",{loop:!0,delay:i.delay}),i.queue!==!1&&$.dequeue(p,i.queue)}v.State.calls[e]=!1;for(var g=0,m=v.State.calls.length;m>g;g++)if(v.State.calls[g]!==!1){l=!0;break}l===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var p="velocity",d=400,f="swing",g=function(){if(a.documentMode)return a.documentMode;for(var e=7;e>4;e--){var t=a.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return o}(),m=function(){var e=0;return r.webkitRequestAnimationFrame||r.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),h=r.requestAnimationFrame||m,y={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==o&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||r.Zepto&&r.Zepto.zepto.isZ(e))},isSVG:function(e){return r.SVGElement&&e instanceof SVGElement},isEmptyObject:function(e){var t;for(t in e)return!1;return!0}},$;if(e&&e.fn!==o?$=e:r.Velocity&&r.Velocity.Utilities&&($=r.Velocity.Utilities),!$)throw new Error("Velocity: Either jQuery or Velocity's jQuery shim must first be loaded.");if(t.Velocity!==o&&t.Velocity.Utilities==o)throw new Error("Velocity: Namespace is occupied.");if(7>=g){if(e)return void(e.fn.velocity=e.fn.animate);throw new Error("Velocity: For IE<=7, Velocity falls back to jQuery, which must first be loaded.")}if(8===g&&!e)throw new Error("Velocity: For IE8, Velocity requires jQuery proper to be loaded; Velocity's jQuery shim does not work with IE8.");var v={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:r.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:a.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Sequences:{},Easings:{},Promise:r.Promise,defaults:{queue:"",duration:d,easing:f,begin:null,complete:null,progress:null,display:null,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,p,{isSVG:y.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},animate:function(){},hook:function(e,t,r){var a=o;return y.isWrapped(e)&&(e=[].slice.call(e)),$.each(y.isNode(e)?[e]:e,function(e,i){if(n(i)===o&&v.init(i),r===o)a===o&&(a=v.CSS.getPropertyValue(i,t));else{var s=v.CSS.setPropertyValue(i,t,r);"transform"===s[0]&&v.CSS.flushTransformCache(i),a=s}}),a},mock:!1,version:{major:0,minor:11,patch:2},debug:!1};r.pageYOffset!==o?(v.State.scrollAnchor=r,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=a.documentElement||a.body.parentNode||a.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop");var S=function(){function e(e,t){return 1-3*t+3*e}function t(e,t){return 3*t-6*e}function r(e){return 3*e}function a(a,o,i){return((e(o,i)*a+t(o,i))*a+r(o))*a}function o(a,o,i){return 3*e(o,i)*a*a+2*t(o,i)*a+r(o)}return function(e,t,r,i){function n(t){for(var i=t,n=0;8>n;++n){var s=o(i,e,r);if(0===s)return i;var l=a(i,e,r)-t;i-=l/s}return i}if(4!==arguments.length)return!1;for(var s=0;4>s;++s)if("number"!=typeof arguments[s]||isNaN(arguments[s])||!isFinite(arguments[s]))return!1;return e=Math.min(e,1),r=Math.min(r,1),e=Math.max(e,0),r=Math.max(r,0),function(o){return e===t&&r===i?o:a(n(o),t,i)}}}(),x=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var o={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:o.v,dv:e(o)}}function r(r,a){var o={dx:r.v,dv:e(r)},i=t(r,.5*a,o),n=t(r,.5*a,i),s=t(r,a,n),l=1/6*(o.dx+2*(i.dx+n.dx)+s.dx),u=1/6*(o.dv+2*(i.dv+n.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,o){var i={x:-1,v:0,tension:null,friction:null},n=[0],s=0,l=1e-4,u=.016,c,p,d;for(e=parseFloat(e)||500,t=parseFloat(t)||20,o=o||null,i.tension=e,i.friction=t,c=null!==o,c?(s=a(e,t),p=s/o*u):p=u;;)if(d=r(d||i,p),n.push(1+d.x),s+=16,!(Math.abs(d.x)>l&&Math.abs(d.v)>l))break;return c?function(e){return n[e*(n.length-1)|0]}:s}}();!function(){v.Easings.linear=function(e){return e},v.Easings.swing=function(e){return.5-Math.cos(e*Math.PI)/2},v.Easings.spring=function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)},v.Easings.ease=S(.25,.1,.25,1),v.Easings["ease-in"]=S(.42,0,1,1),v.Easings["ease-out"]=S(0,0,.58,1),v.Easings["ease-in-out"]=S(.42,0,.58,1);var e={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,r){e[r]=function(e){return Math.pow(e,t+2)}}),$.extend(e,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,r=4;e<((t=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((3*t-2)/22-e,2)}}),$.each(e,function(e,t){v.Easings["easeIn"+e]=t,v.Easings["easeOut"+e]=function(e){return 1-t(1-e)},v.Easings["easeInOut"+e]=function(e){return.5>e?t(2*e)/2:1-t(-2*e+2)/2}})}();var b=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<b.Lists.colors.length;e++)b.Hooks.templates[b.Lists.colors[e]]=["Red Green Blue Alpha","255 255 255 1"];var t,r,a;if(g)for(t in b.Hooks.templates){r=b.Hooks.templates[t],a=r[0].split(" ");var o=r[1].match(b.RegEx.valueSplit);"Color"===a[0]&&(a.push(a.shift()),o.push(o.shift()),b.Hooks.templates[t]=[a.join(" "),o.join(" ")])}for(t in b.Hooks.templates){r=b.Hooks.templates[t],a=r[0].split(" ");for(var e in a){var i=t+a[e],n=e;b.Hooks.registered[i]=[t,n]}}},getRoot:function(e){var t=b.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return b.RegEx.valueUnwrap.test(t)&&(t=t.match(b.Hooks.RegEx.valueUnwrap)[1]),b.Values.isCSSNullValue(t)&&(t=b.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=b.Hooks.registered[e];if(r){var a=r[0],o=r[1];return t=b.Hooks.cleanRootPropertyValue(a,t),t.toString().match(b.RegEx.valueSplit)[o]}return t},injectValue:function(e,t,r){var a=b.Hooks.registered[e];if(a){var o=a[0],i=a[1],n,s;return r=b.Hooks.cleanRootPropertyValue(o,r),n=r.toString().match(b.RegEx.valueSplit),n[i]=t,s=n.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return b.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(b.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},opacity:function(e,t,r){if(8>=g)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=g||v.State.isGingerbread||(b.Lists.transformsBase=b.Lists.transformsBase.concat(b.Lists.transforms3D));for(var e=0;e<b.Lists.transformsBase.length;e++)!function(){var t=b.Lists.transformsBase[e];b.Normalizations.registered[t]=function(e,r,a){switch(e){case"name":return"transform";case"extract":return n(r)===o||n(r).transformCache[t]===o?/^scale/i.test(t)?1:0:n(r).transformCache[t].replace(/[()]/g,"");case"inject":var i=!1;switch(t.substr(0,t.length-1)){case"translate":i=!/(%|px|em|rem|vw|vh|\d)$/i.test(a);break;case"scal":case"scale":v.State.isAndroid&&n(r).transformCache[t]===o&&1>a&&(a=1),i=!/(\d)$/i.test(a);break;case"skew":i=!/(deg|\d)$/i.test(a);break;case"rotate":i=!/(deg|\d)$/i.test(a)}return i||(n(r).transformCache[t]="("+a+")"),n(r).transformCache[t]}}}();for(var e=0;e<b.Lists.colors.length;e++)!function(){var t=b.Lists.colors[e];b.Normalizations.registered[t]=function(e,r,a){switch(e){case"name":return t;case"extract":var i;if(b.RegEx.wrappedValueAlreadyExtracted.test(a))i=a;else{var n,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(a)?n=s[a]!==o?s[a]:s.black:b.RegEx.isHex.test(a)?n="rgb("+b.Values.hexToRgb(a).join(" ")+")":/^rgba?\(/i.test(a)||(n=s.black),i=(n||a).toString().match(b.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=g||3!==i.split(" ").length||(i+=" 1"),i;case"inject":return 8>=g?4===a.split(" ").length&&(a=a.split(/\s+/).slice(0,3).join(" ")):3===a.split(" ").length&&(a+=" 1"),(8>=g?"rgb":"rgba")+"("+a.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(g||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var o;if(o=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),y.isString(v.State.prefixElement.style[o]))return v.State.prefixMatches[e]=o,[o,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,t,a,i){function s(e,t){function a(){u&&b.setPropertyValue(e,"display","none")}var l=0;if(8>=g)l=$.css(e,t);else{var u=!1;if(/^(width|height)$/.test(t)&&0===b.getPropertyValue(e,"display")&&(u=!0,b.setPropertyValue(e,"display",b.Values.getDisplayType(e))),!i){if("height"===t&&"border-box"!==b.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(b.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(b.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(b.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(b.getPropertyValue(e,"paddingBottom"))||0);return a(),c}if("width"===t&&"border-box"!==b.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(b.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(b.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(b.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(b.getPropertyValue(e,"paddingRight"))||0);return a(),p}}var d;d=n(e)===o?r.getComputedStyle(e,null):n(e).computedStyle?n(e).computedStyle:n(e).computedStyle=r.getComputedStyle(e,null),(g||v.State.isFirefox)&&"borderColor"===t&&(t="borderTopColor"),l=9===g&&"filter"===t?d.getPropertyValue(t):d[t],(""===l||null===l)&&(l=e.style[t]),a()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(t)){var f=s(e,"position");("fixed"===f||"absolute"===f&&/top|left/i.test(t))&&(l=$(e).position()[t]+"px")}return l}var l;if(b.Hooks.registered[t]){var u=t,c=b.Hooks.getRoot(u);a===o&&(a=b.getPropertyValue(e,b.Names.prefixCheck(c)[0])),b.Normalizations.registered[c]&&(a=b.Normalizations.registered[c]("extract",e,a)),l=b.Hooks.extractValue(u,a)}else if(b.Normalizations.registered[t]){var p,d;p=b.Normalizations.registered[t]("name",e),"transform"!==p&&(d=s(e,b.Names.prefixCheck(p)[0]),b.Values.isCSSNullValue(d)&&b.Hooks.templates[t]&&(d=b.Hooks.templates[t][1])),l=b.Normalizations.registered[t]("extract",e,d)}return/^[\d-]/.test(l)||(l=n(e)&&n(e).isSVG&&b.Names.SVGAttribute(t)?/^(height|width)$/i.test(t)?e.getBBox()[t]:e.getAttribute(t):s(e,b.Names.prefixCheck(t)[0])),b.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+t+": "+l),l},setPropertyValue:function(e,t,a,o,i){var s=t;if("scroll"===t)i.container?i.container["scroll"+i.direction]=a:"Left"===i.direction?r.scrollTo(a,i.alternateValue):r.scrollTo(i.alternateValue,a);else if(b.Normalizations.registered[t]&&"transform"===b.Normalizations.registered[t]("name",e))b.Normalizations.registered[t]("inject",e,a),s="transform",a=n(e).transformCache[t];else{if(b.Hooks.registered[t]){var l=t,u=b.Hooks.getRoot(t);o=o||b.getPropertyValue(e,u),a=b.Hooks.injectValue(l,a,o),t=u}if(b.Normalizations.registered[t]&&(a=b.Normalizations.registered[t]("inject",e,a),t=b.Normalizations.registered[t]("name",e)),s=b.Names.prefixCheck(t)[0],8>=g)try{e.style[s]=a}catch(c){v.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else n(e)&&n(e).isSVG&&b.Names.SVGAttribute(t)?e.setAttribute(t,a):e.style[s]=a;v.debug>=2&&console.log("Set "+t+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(b.getPropertyValue(e,t))}var r="";if((g||v.State.isAndroid&&!v.State.isChrome)&&n(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(n(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var o,i;$.each(n(e).transformCache,function(t){return o=n(e).transformCache[t],"transformPerspective"===t?(i=o,!0):(9===g&&"rotateZ"===t&&(t="rotate"),void(r+=t+o+" "))}),i&&(r="perspective"+i+" "+r)}b.setPropertyValue(e,"transform",r)}};b.Hooks.register(),b.Normalizations.register(),v.animate=function(){function e(){return p?C.promise||null:f}function t(){function e(e){function d(e,r){var a=o,i=o,n=o;return y.isArray(e)?(a=e[0],!y.isArray(e[1])&&/^[\d-]/.test(e[1])||y.isFunction(e[1])||b.RegEx.isHex.test(e[1])?n=e[1]:(y.isString(e[1])&&!b.RegEx.isHex.test(e[1])||y.isArray(e[1]))&&(i=r?e[1]:l(e[1],s.duration),e[2]!==o&&(n=e[2]))):a=e,r||(i=i||s.easing),y.isFunction(a)&&(a=a.call(t,V,x)),y.isFunction(n)&&(n=n.call(t,V,x)),[a||0,i,n]}function f(e,t){var r,a;return a=(t||0).toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=b.Values.getUnitType(e)),[a,r]}function g(){var e={myParent:t.parentNode||a.body,position:b.getPropertyValue(t,"position"),fontSize:b.getPropertyValue(t,"fontSize")},o=e.position===N.lastPosition&&e.myParent===N.lastParent,i=e.fontSize===N.lastFontSize;N.lastParent=e.myParent,N.lastPosition=e.position,N.lastFontSize=e.fontSize;var s=100,l={};if(i&&o)l.emToPx=N.lastEmToPx,l.percentToPxWidth=N.lastPercentToPxWidth,l.percentToPxHeight=N.lastPercentToPxHeight;else{var u=n(t).isSVG?a.createElementNS("http://www.w3.org/2000/svg","rect"):a.createElement("div");v.init(u),e.myParent.appendChild(u),v.CSS.setPropertyValue(u,"position",e.position),v.CSS.setPropertyValue(u,"fontSize",e.fontSize),v.CSS.setPropertyValue(u,"overflow","hidden"),v.CSS.setPropertyValue(u,"overflowX","hidden"),v.CSS.setPropertyValue(u,"overflowY","hidden"),v.CSS.setPropertyValue(u,"boxSizing","content-box"),v.CSS.setPropertyValue(u,"paddingLeft",s+"em"),v.CSS.setPropertyValue(u,"minWidth",s+"%"),v.CSS.setPropertyValue(u,"maxWidth",s+"%"),v.CSS.setPropertyValue(u,"width",s+"%"),v.CSS.setPropertyValue(u,"minHeight",s+"%"),v.CSS.setPropertyValue(u,"maxHeight",s+"%"),v.CSS.setPropertyValue(u,"height",s+"%"),l.percentToPxWidth=N.lastPercentToPxWidth=(parseFloat(b.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=N.lastPercentToPxHeight=(parseFloat(b.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=N.lastEmToPx=(parseFloat(b.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===N.remToPx&&(N.remToPx=parseFloat(b.getPropertyValue(a.body,"fontSize"))||16),null===N.vwToPx&&(N.vwToPx=parseFloat(r.innerWidth)/100,N.vhToPx=parseFloat(r.innerHeight)/100),l.remToPx=N.remToPx,l.vwToPx=N.vwToPx,l.vhToPx=N.vhToPx,v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),t),l}if(s.begin&&0===V)try{s.begin.call(m,m)}catch(P){setTimeout(function(){throw P},1)}if("scroll"===T){var w=/^x$/i.test(s.axis)?"Left":"Top",k=parseFloat(s.offset)||0,E,F,A;s.container?y.isWrapped(s.container)||y.isNode(s.container)?(s.container=s.container[0]||s.container,E=s.container["scroll"+w],A=E+$(t).position()[w.toLowerCase()]+k):s.container=null:(E=v.State.scrollAnchor[v.State["scrollProperty"+w]],F=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===w?"Top":"Left")]],A=$(t).offset()[w.toLowerCase()]+k),c={scroll:{rootPropertyValue:!1,startValue:E,currentValue:E,endValue:A,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:w,alternateValue:F}},element:t},v.debug&&console.log("tweensContainer (scroll): ",c.scroll,t)}else if("reverse"===T){if(!n(t).tweensContainer)return void $.dequeue(t,s.queue);"none"===n(t).opts.display&&(n(t).opts.display="block"),"hidden"===n(t).opts.visibility&&(n(t).opts.visibility="visible"),n(t).opts.loop=!1,n(t).opts.begin=null,n(t).opts.complete=null,S.easing||delete s.easing,S.duration||delete s.duration,s=$.extend({},n(t).opts,s);var j=$.extend(!0,{},n(t).tweensContainer);for(var L in j)if("element"!==L){var z=j[L].startValue;j[L].startValue=j[L].currentValue=j[L].endValue,j[L].endValue=z,y.isEmptyObject(S)||(j[L].easing=s.easing),v.debug&&console.log("reverse tweensContainer ("+L+"): "+JSON.stringify(j[L]),t)}c=j}else if("start"===T){var j;n(t).tweensContainer&&n(t).isAnimating===!0&&(j=n(t).tweensContainer),$.each(h,function(e,t){if(RegExp("^"+b.Lists.colors.join("$|^")+"$").test(e)){var r=d(t,!0),a=r[0],i=r[1],n=r[2];if(b.RegEx.isHex.test(a)){for(var s=["Red","Green","Blue"],l=b.Values.hexToRgb(a),u=n?b.Values.hexToRgb(n):o,c=0;c<s.length;c++)h[e+s[c]]=[l[c],i,u?u[c]:u];delete h[e]}}});for(var M in h){var R=d(h[M]),q=R[0],B=R[1],O=R[2];M=b.Names.camelCase(M);var W=b.Hooks.getRoot(M),X=!1;if(n(t).isSVG||b.Names.prefixCheck(W)[1]!==!1||b.Normalizations.registered[W]!==o){(s.display&&"none"!==s.display||s.visibility&&"hidden"!==s.visibility)&&/opacity|filter/.test(M)&&!O&&0!==q&&(O=0),s._cacheValues&&j&&j[M]?(O===o&&(O=j[M].endValue+j[M].unitType),X=n(t).rootPropertyValueCache[W]):b.Hooks.registered[M]?O===o?(X=b.getPropertyValue(t,W),O=b.getPropertyValue(t,M,X)):X=b.Hooks.templates[W][1]:O===o&&(O=b.getPropertyValue(t,M));var Y,G,I,U=!1;if(Y=f(M,O),O=Y[0],I=Y[1],Y=f(M,q),q=Y[0].replace(/^([+-\/*])=/,function(e,t){return U=t,""}),G=Y[1],O=parseFloat(O)||0,q=parseFloat(q)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(M)?(q/=100,G="em"):/^scale/.test(M)?(q/=100,G=""):/(Red|Green|Blue)$/i.test(M)&&(q=q/100*255,G="")),/[\/*]/.test(U))G=I;else if(I!==G&&0!==O)if(0===q)G=I;else{p=p||g();var D=/margin|padding|left|right|width|text|word|letter/i.test(M)||/X$/.test(M)?"x":"y";switch(I){case"%":O*="x"===D?p.percentToPxWidth:p.percentToPxHeight;break;case"px":break;default:O*=p[I+"ToPx"]}switch(G){case"%":O*=1/("x"===D?p.percentToPxWidth:p.percentToPxHeight);break;case"px":break;default:O*=1/p[G+"ToPx"]}}switch(U){case"+":q=O+q;break;case"-":q=O-q;break;case"*":q=O*q;break;case"/":q=O/q}c[M]={rootPropertyValue:X,startValue:O,currentValue:O,endValue:q,unitType:G,easing:B},v.debug&&console.log("tweensContainer ("+M+"): "+JSON.stringify(c[M]),t)}else v.debug&&console.log("Skipping ["+W+"] due to a lack of browser support.")}c.element=t}c.element&&(b.Values.addClass(t,"velocity-animating"),H.push(c),n(t).tweensContainer=c,n(t).opts=s,n(t).isAnimating=!0,V===x-1?(v.State.calls.length>1e4&&(v.State.calls=i(v.State.calls)),v.State.calls.push([H,m,s,null,C.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,u())):V++)}var t=this,s=$.extend({},v.defaults,S),c={},p;if(n(t)===o&&v.init(t),parseFloat(s.delay)&&s.queue!==!1&&$.queue(t,s.queue,function(e){v.velocityQueueEntryFlag=!0,n(t).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),v.mock===!0)s.duration=1;else switch(s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=d;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}s.easing=l(s.easing,s.duration),s.begin&&!y.isFunction(s.begin)&&(s.begin=null),s.progress&&!y.isFunction(s.progress)&&(s.progress=null),s.complete&&!y.isFunction(s.complete)&&(s.complete=null),s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=v.CSS.Values.getDisplayType(t))),s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():$.queue(t,s.queue,function(t,r){return r===!0?(C.promise&&C.resolver(m),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===$.queue(t)[0]||$.dequeue(t)}var s=arguments[0]&&($.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||y.isString(arguments[0].properties)),p,f,g,m,h,S;if(y.isWrapped(this)?(p=!1,g=0,m=this,f=this):(p=!0,g=1,m=s?arguments[0].elements:arguments[0]),m=y.isWrapped(m)?[].slice.call(m):m){s?(h=arguments[0].properties,S=arguments[0].options):(h=arguments[g],S=arguments[g+1]);var x=y.isArray(m)||y.isNodeList(m)?m.length:1,V=0;if("stop"!==h&&!$.isPlainObject(S)){var P=g+1;S={};for(var w=P;w<arguments.length;w++)!y.isArray(arguments[w])&&/^\d/.test(arguments[w])?S.duration=parseFloat(arguments[w]):y.isString(arguments[w])||y.isArray(arguments[w])?S.easing=arguments[w]:y.isFunction(arguments[w])&&(S.complete=arguments[w])}var C={promise:null,resolver:null,rejecter:null};p&&v.Promise&&(C.promise=new v.Promise(function(e,t){C.resolver=e,C.rejecter=t}));var T;switch(h){case"scroll":T="scroll";break;case"reverse":T="reverse";break;case"stop":$.each(y.isNode(m)?[m]:m,function(e,t){n(t)&&n(t).delayTimer&&(clearTimeout(n(t).delayTimer.setTimeout),n(t).delayTimer.next&&n(t).delayTimer.next(),delete n(t).delayTimer)});var k=[];return $.each(v.State.calls,function(e,t){t&&$.each(y.isNode(t[1])?[t[1]]:t[1],function(t,r){$.each(y.isNode(m)?[m]:m,function(t,a){if(a===r){if(n(a)&&$.each(n(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),S===!0||y.isString(S)){var o=y.isString(S)?S:"";$.each($.queue(a,o),function(e,t){y.isFunction(t)&&t(null,!0)}),$.queue(a,o,[])}k.push(e)}})})}),$.each(k,function(e,t){c(t,!0)}),C.promise&&C.resolver(m),e();default:if(!$.isPlainObject(h)||y.isEmptyObject(h)){if(y.isString(h)&&v.Sequences[h]){var E=S.duration,F=S.delay||0;return S.backwards===!0&&(m=(y.isWrapped(m)?[].slice.call(m):m).reverse()),$.each(m,function(e,t){parseFloat(S.stagger)?S.delay=F+parseFloat(S.stagger)*e:y.isFunction(S.stagger)&&(S.delay=F+S.stagger.call(t,e,x)),S.drag&&(S.duration=parseFloat(E)||(/^(callout|transition)/.test(h)?1e3:d),S.duration=Math.max(S.duration*(S.backwards?1-e/x:(e+1)/x),.75*S.duration,200)),v.Sequences[h].call(t,t,S||{},e,x,m,C.promise?C:o)}),e()}var A="Velocity: First argument ("+h+") was not a property map, a known action, or a registered sequence. Aborting.";return C.promise?C.rejecter(new Error(A)):console.log(A),e()}T="start"}var N={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},H=[];$.each(y.isNode(m)?[m]:m,function(e,r){y.isNode(r)&&t.call(r)});var j=$.extend({},v.defaults,S),L;if(j.loop=parseInt(j.loop),L=2*j.loop-1,j.loop)for(var z=0;L>z;z++){var M={delay:j.delay};z===L-1&&(M.display=j.display,M.visibility=j.visibility,M.complete=j.complete),v.animate(m,"reverse",M)}return e()}},v.State.isMobile||a.hidden===o||a.addEventListener("visibilitychange",function(){a.hidden?(h=function(e){return setTimeout(function(){e(!0)},16)},u()):h=r.requestAnimationFrame||m});var V;return e&&e.fn?V=e:r.Zepto&&(V=r.Zepto),(V||r).Velocity=v,V&&(V.fn.velocity=v.animate,V.fn.velocity.defaults=v.defaults),$.each(["Down","Up"],function(e,t){v.Sequences["slide"+t]=function(e,r,a,o,i,n){var s=$.extend({},r),l={height:null,marginTop:null,marginBottom:null,paddingTop:null,paddingBottom:null,overflow:null,overflowX:null,overflowY:null},u=s.begin,c=s.complete,p=!1;null!==s.display&&(s.display="Down"===t?s.display||"auto":s.display||"none"),s.begin=function(){function r(){l.height=parseFloat(v.CSS.getPropertyValue(e,"height")),e.style.height="auto",parseFloat(v.CSS.getPropertyValue(e,"height"))===l.height&&(p=!0),v.CSS.setPropertyValue(e,"height",l.height+"px")}if("Down"===t){l.overflow=[v.CSS.getPropertyValue(e,"overflow"),0],l.overflowX=[v.CSS.getPropertyValue(e,"overflowX"),0],l.overflowY=[v.CSS.getPropertyValue(e,"overflowY"),0],e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden",r();for(var a in l)if(!/^overflow/.test(a)){var o=v.CSS.getPropertyValue(e,a);"height"===a&&(o=parseFloat(o)),l[a]=[o,0]}}else{r();for(var a in l){var o=v.CSS.getPropertyValue(e,a);"height"===a&&(o=parseFloat(o)),l[a]=[0,o]}e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden"}u&&u.call(e,e)},s.complete=function(e){var r="Down"===t?0:1;p===!0?l.height[r]="auto":l.height[r]+="px";for(var a in l)e.style[a]=l[a][r];c&&c.call(e,e),n&&n.resolver(i||e)},v.animate(e,l,s)}}),$.each(["In","Out"],function(e,t){v.Sequences["fade"+t]=function(e,r,a,o,i,n){var s=$.extend({},r),l={opacity:"In"===t?1:0};if(a!==o-1)s.complete=s.begin=null;else{var u=s.complete;s.complete=function(){u&&u.call(e,e),n&&n.resolver(i||e)}}null!==s.display&&(s.display=s.display||("In"===t?"auto":"none")),v.animate(this,l,s)}}),v}(e||window,window,document)});

/*!
* velocity.ui.js: UI effects pack for Velocity. Load this file after jquery.velocity.js.
* @version 4.1.0
* @docs http://velocityjs.org/#uiPack
* @support <=IE8: Callouts will have no effect, and transitions will simply fade in/out. IE9/Android 2.3: Most effects are fully supported, the rest fade in/out. All other browsers: Full support.
* @license Copyright Julian Shapiro. MIT License: http://en.wikipedia.org/wiki/MIT_License
* @license Indicated portions adapted from Animate.css, copyright Daniel Eden. MIT License: http://en.wikipedia.org/wiki/MIT_License
* @license Indicated portions adapted from Magic.css, copyright Christian Pucci. MIT License: http://en.wikipedia.org/wiki/MIT_License
*/
!function(){var t=window.jQuery||window.Zepto||window;if(!t.Velocity||!t.Velocity.Utilities)return void console.log("Velocity UI Pack: Velocity must be loaded first. Aborting.");if(!t.Velocity.version||t.Velocity.version.major<=0&&t.Velocity.version.minor<=5&&t.Velocity.version.patch<=2){var a="Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";throw alert(a),new Error(a)}t.Velocity.RegisterUI=function(a,e){function r(a,e,r,i){var n=0,s;t.Velocity.Utilities.each(a,function(a,e){i&&(r+=a*i),s=e.parentNode,t.Velocity.Utilities.each(["height","paddingTop","paddingBottom","marginTop","marginBottom"],function(a,r){n+=parseFloat(t.Velocity.CSS.getPropertyValue(e,r))})}),t.Velocity.animate(s,{height:("In"===e?"+":"-")+"="+n},{queue:!1,easing:"ease-in-out",duration:r*("In"===e?.6:1)})}return t.Velocity.Sequences[a]=function(i,n,s,l,o,c){function u(){void 0!==n.display&&"none"!==n.display||!/Out$/.test(a)||t.Velocity.Utilities.each(o,function(a,e){t.Velocity.CSS.setPropertyValue(e,"display","none")}),n.complete&&n.complete.call(o,o),c&&c.resolver(o||i)}for(var f=s===l-1,p=0;p<e.calls.length;p++){var d=e.calls[p],y=d[0],X=n.duration||e.defaultDuration||1e3,g=d[1],m=d[2]||{},Y={};if(Y.duration=X*(g||1),Y.queue=n.queue||"",Y.easing=m.easing||"ease",Y.delay=m.delay||0,0===p){if(Y.delay+=n.delay||0,0===s&&(Y.begin=function(){n.begin&&n.begin.call(o,o);var t=a.match(/(In|Out)$/);n.animateParentHeight&&t&&r(o,t[0],X+Y.delay,n.stagger)}),null!==n.display)if(n.display&&"none"!==n.display)Y.display=n.display;else if(/In$/.test(a)){var O=t.Velocity.CSS.Values.getDisplayType(i);Y.display="inline"===O?"inline-block":O}n.visibility&&"hidden"!==n.visibility&&(Y.visibility=n.visibility)}p===e.calls.length-1&&(Y.complete=function(){if(e.reset){for(var a in e.reset){var r=e.reset[a];("string"==typeof r||"number"==typeof r)&&(e.reset[a]=[e.reset[a],e.reset[a]])}var n={duration:0,queue:!1};f&&(n.complete=u),t.Velocity.animate(i,e.reset,n)}else f&&u()},"hidden"===n.visibility&&(Y.visibility=n.visibility)),t.Velocity.animate(i,y,Y)}},t.Velocity},t.Velocity.RegisterUI.packagedEffects={"callout.bounce":{defaultDuration:550,calls:[[{translateY:-30},.25],[{translateY:0},.125],[{translateY:-15},.125],[{translateY:0},.25]]},"callout.shake":{defaultDuration:800,calls:[[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:0},.125]]},"callout.flash":{defaultDuration:1100,calls:[[{opacity:[0,"easeInOutQuad",1]},.25],[{opacity:[1,"easeInOutQuad"]},.25],[{opacity:[0,"easeInOutQuad"]},.25],[{opacity:[1,"easeInOutQuad"]},.25]]},"callout.pulse":{defaultDuration:825,calls:[[{scaleX:1.1,scaleY:1.1},.5],[{scaleX:1,scaleY:1},.5]]},"callout.swing":{defaultDuration:950,calls:[[{rotateZ:15},.2],[{rotateZ:-10},.2],[{rotateZ:5},.2],[{rotateZ:-5},.2],[{rotateZ:0},.2]]},"callout.tada":{defaultDuration:1e3,calls:[[{scaleX:.9,scaleY:.9,rotateZ:-3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:-3},.1],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],[{scaleX:1,scaleY:1,rotateZ:0},.2]]},"transition.fadeIn":{defaultDuration:500,calls:[[{opacity:[1,0]}]]},"transition.fadeOut":{defaultDuration:500,calls:[[{opacity:[0,1]}]]},"transition.flipXIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateY:[0,-55]}]],reset:{transformPerspective:0}},"transition.flipXOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateY:55}]],reset:{transformPerspective:0,rotateY:0}},"transition.flipYIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateX:[0,-45]}]],reset:{transformPerspective:0}},"transition.flipYOut":{defaultDuration:800,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateX:25}]],reset:{transformPerspective:0,rotateX:0}},"transition.flipBounceXIn":{defaultDuration:900,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateY:[-10,90]},.5],[{opacity:.8,rotateY:10},.25],[{opacity:1,rotateY:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceXOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateY:-10},.5],[{opacity:0,rotateY:90},.5]],reset:{transformPerspective:0,rotateY:0}},"transition.flipBounceYIn":{defaultDuration:850,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateX:[-10,90]},.5],[{opacity:.8,rotateX:10},.25],[{opacity:1,rotateX:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceYOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateX:-15},.5],[{opacity:0,rotateX:90},.5]],reset:{transformPerspective:0,rotateX:0}},"transition.swoopIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["100%","50%"],transformOriginY:["100%","100%"],scaleX:[1,0],scaleY:[1,0],translateX:[0,-700],translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%"}},"transition.swoopOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformOriginX:["50%","100%"],transformOriginY:["100%","100%"],scaleX:0,scaleY:0,translateX:-700,translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%",scaleX:1,scaleY:1,translateX:0}},"transition.whirlIn":{defaultDuration:900,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,0],scaleY:[1,0],rotateY:[0,160]}]]},"transition.whirlOut":{defaultDuration:900,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:0,scaleY:0,rotateY:160}]],reset:{scaleX:1,scaleY:1,rotateY:0}},"transition.shrinkIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,1.5],scaleY:[1,1.5],translateZ:0}]]},"transition.shrinkOut":{defaultDuration:650,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:1.3,scaleY:1.3,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.expandIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,.625],scaleY:[1,.625],translateZ:0}]]},"transition.expandOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:.5,scaleY:.5,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.bounceIn":{defaultDuration:800,calls:[[{opacity:[1,0],scaleX:[1.05,.3],scaleY:[1.05,.3]},.4],[{scaleX:.9,scaleY:.9,translateZ:0},.2],[{scaleX:1,scaleY:1},.5]]},"transition.bounceOut":{defaultDuration:800,calls:[[{scaleX:.95,scaleY:.95},.4],[{scaleX:1.1,scaleY:1.1,translateZ:0},.4],[{opacity:[0,1],scaleX:.3,scaleY:.3},.2]],reset:{scaleX:1,scaleY:1}},"transition.bounceUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[-30,1e3]},.6,{easing:"easeOutCirc"}],[{translateY:10},.2],[{translateY:0},.2]]},"transition.bounceUpOut":{defaultDuration:1e3,calls:[[{translateY:20},.2],[{opacity:[0,"easeInCirc",1],translateY:-1e3},.8]],reset:{translateY:0}},"transition.bounceDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[30,-1e3]},.6,{easing:"easeOutCirc"}],[{translateY:-10},.2],[{translateY:0},.2]]},"transition.bounceDownOut":{defaultDuration:1e3,calls:[[{translateY:-20},.2],[{opacity:[0,"easeInCirc",1],translateY:1e3},.8]],reset:{translateY:0}},"transition.bounceLeftIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[30,-1250]},.6,{easing:"easeOutCirc"}],[{translateX:-10},.2],[{translateX:0},.2]]},"transition.bounceLeftOut":{defaultDuration:750,calls:[[{translateX:30},.2],[{opacity:[0,"easeInCirc",1],translateX:-1250},.8]],reset:{translateX:0}},"transition.bounceRightIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[-30,1250]},.6,{easing:"easeOutCirc"}],[{translateX:10},.2],[{translateX:0},.2]]},"transition.bounceRightOut":{defaultDuration:750,calls:[[{translateX:-30},.2],[{opacity:[0,"easeInCirc",1],translateX:1250},.8]],reset:{translateX:0}},"transition.slideUpIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,20],translateZ:0}]]},"transition.slideUpOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:-20,translateZ:0}]],reset:{translateY:0}},"transition.slideDownIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,-20],translateZ:0}]]},"transition.slideDownOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:20,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,-20],translateZ:0}]]},"transition.slideLeftOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:-20,translateZ:0}]],reset:{translateX:0}},"transition.slideRightIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,20],translateZ:0}]]},"transition.slideRightOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:20,translateZ:0}]],reset:{translateX:0}},"transition.slideUpBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,75],translateZ:0}]]},"transition.slideUpBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:-75,translateZ:0}]],reset:{translateY:0}},"transition.slideDownBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,-75],translateZ:0}]]},"transition.slideDownBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:75,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,-75],translateZ:0}]]},"transition.slideLeftBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:-75,translateZ:0}]],reset:{translateX:0}},"transition.slideRightBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,75],translateZ:0}]]},"transition.slideRightBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:75,translateZ:0}]],reset:{translateX:0}},"transition.perspectiveUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveUpOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveDownOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveLeftIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveLeftOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}},"transition.perspectiveRightIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveRightOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}}};for(var e in t.Velocity.RegisterUI.packagedEffects)t.Velocity.RegisterUI(e,t.Velocity.RegisterUI.packagedEffects[e])}();

/*!
* Blast.js: Blast text apart to make it manipulable.
* @version 0.1.1
* @docs julian.com/research/blast
* @license Copyright 2014 Julian Shapiro. MIT License: http://en.wikipedia.org/wiki/MIT_License
*/
!function($,e,t,n){function a(e){return e=e.replace(g.abbreviations,function(e){return e.replace(/\./g,"{{46}}")}),e=e.replace(g.innerWordPeriod,function(e){return e.replace(/\./g,"{{46}}")})}function i(e){return e.replace(/{{(\d{1,3})}}/g,function(e,t){return String.fromCharCode(t)})}function r(e,n){var a=t.createElement(n.tag);if(a.className=c,n.customClass&&(a.className+=" "+n.customClass,n.generateIndexID&&(a.id=n.customClass+"-"+h.blastedCount)),n.generateValueClass===!0&&("character"===n.delimiter||"word"===n.delimiter)){var i,r=e.data;"word"===n.delimiter&&g.onlyContainsPunctuation.test(r)&&(r=r.replace(g.adjoinedPunctuation,"")),i=c+"-"+n.delimiter+"-"+r.toLowerCase(),a.className+=" "+i}return a.appendChild(e.cloneNode(!1)),a}function s(e,t){var n=-1,l=0;if(3===e.nodeType&&e.data.length){if(h.nodeBeginning&&(e.data="sentence"===t.delimiter?a(e.data):i(e.data),h.nodeBeginning=!1),n=e.data.search(h.delimiterRegex),-1!==n){var d=e.data.match(h.delimiterRegex),o=d[0],c=d[1]||!1;h.blastedCount++,""===o?n++:c&&c!==o&&(n+=o.indexOf(c),o=c);var u=e.splitText(n);u.splitText(o.length),l=1,"sentence"===t.delimiter&&(u.data=i(u.data));var f=r(u,t,h.blastedCount);u.parentNode.replaceChild(f,u),m.generatedElements.push(f)}}else if(1===e.nodeType&&e.hasChildNodes()&&!g.skippedElements.test(e.tagName)&&!g.hasPluginClass.test(e.className))for(var p=0;p<e.childNodes.length;p++)h.nodeBeginning=!0,p+=s(e.childNodes[p],t);return l}function l(e,t){t.debug&&o.time("blast reversal");var n=!1;e.removeClass(c+"-root").removeData(c).find("."+c).each(function(){var e=$(this);if(e.closest("."+c+"-root").length)n=!0;else{var t=this.parentNode;7>=d&&t.firstChild.nodeName,t.replaceChild(this.firstChild,this),t.normalize()}}),t.debug&&(o.log(c+": Reversed Blast"+(e.attr("id")?" on #"+e.attr("id")+".":".")+(n?" Skipped reversal on the children of one or more descendant root elements.":"")),o.timeEnd("blast reversal"))}var d=function(){if(t.documentMode)return t.documentMode;for(var e=7;e>0;e--){var a=t.createElement("div");if(a.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",a.getElementsByTagName("span").length)return a=null,e;a=null}return n}(),o=e.console||{log:function(){}},c="blast",u={latinPunctuation:"–—′’'“″„\"(«.…¡¿′’'”″“\")».…!?",latinLetters:"\\u0041-\\u005A\\u0061-\\u007A\\u00C0-\\u017F\\u0100-\\u01FF\\u0180-\\u027F"},g={abbreviations:new RegExp("[^"+u.latinLetters+"](e\\.g\\.)|(i\\.e\\.)|(mr\\.)|(mrs\\.)|(ms\\.)|(dr\\.)|(prof\\.)|(esq\\.)|(sr\\.)|(jr\\.)[^"+u.latinLetters+"]","ig"),innerWordPeriod:new RegExp("["+u.latinLetters+"].["+u.latinLetters+"]","ig"),onlyContainsPunctuation:new RegExp("[^"+u.latinPunctuation+"]"),adjoinedPunctuation:new RegExp("^["+u.latinPunctuation+"]+|["+u.latinPunctuation+"]+$","g"),skippedElements:/(script|style|select|textarea)/i,hasPluginClass:new RegExp("(^| )"+c+"( |$)","gi")},m={generatedElements:[]},h={};$.fn.blast=function(e){var a=$.extend({},$.fn[c].defaults,e);return this.each(function(){var i=$(this);if(e!==!1){h={delimiterRegex:null,blastedCount:0,nodeBeginning:!1},i.data(c)===n||"search"===i.data(c).delimiter&&a.search||(l(i,a),a.debug&&o.log(c+": Removing element's existing Blast call and re-running.")),i.data(c,{delimiter:a.search?"search":a.delimiter}),m.generatedElements=[];try{t.createElement(a.tag)}catch(r){a.tag="span",a.debug&&o.log(c+": Invalid tag supplied. Defaulting to span.")}if(i.addClass(c+"-root"),a.debug&&o.time("blast"),a.search===!0&&"string"===$.type(a.delimiter)&&$.trim(a.delimiter).length)a.delimiter=a.delimiter.replace(/[-[\]{,}(.)*+?|^$\\\/]/g,"\\$&"),h.delimiterRegex=new RegExp("(?:[^-"+u.latinLetters+"])("+a.delimiter+"('s)?)(?![-"+u.latinLetters+"])","i");else switch("string"===$.type(a.delimiter)&&(a.delimiter=a.delimiter.toLowerCase()),a.delimiter){case"letter":case"char":case"character":h.delimiterRegex=/(\S)/;break;case"word":h.delimiterRegex=/\s*(\S+)\s*/;break;case"sentence":h.delimiterRegex=/(?=\S)(([.]{2,})?[^!?]+?([.…!?]+|(?=\s+$)|$)(\s*[′’'”″“")»]+)*)/;break;case"element":h.delimiterRegex=/(?=\S)([\S\s]*\S)/;break;default:if(!(a.delimiter instanceof RegExp))return o.log(c+": Unrecognized delimiter, empty search string, or invalid custom RegEx. Aborting."),i.blast(!1),!0;h.delimiterRegex=a.delimiter}a.stripHTMLTags&&i.html(i.text()),s(this,a)}else e===!1&&i.data(c)&&l(i,a);a.debug&&(o.timeEnd("blast"),i.find(".blast").each(function(){o.log(c+" ["+a.delimiter+"] "+$(this)[0].outerHTML)}).filter(":even").css("backgroundColor","#f12185").end().filter(":odd").css("backgroundColor","#075d9a"))}),e!==!1&&a.returnGenerated===!0?this.pushStack(m.generatedElements):this}}(jQuery,window,document),$.fn.blast.defaults={returnGenerated:!0,delimiter:"word",tag:"span",search:!1,customClass:"",generateIndexID:!1,generateValueClass:!1,stripHTMLTags:!1,debug:!1};

// Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(window,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;e=n.extend({},n.fn[g].defaults,e);if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.on("load.waypoints",function(){return n[m]("refresh")})})}).call(this);

/*
 * jQuery Clipboard :: Fork of zClip :: Uses ZeroClipboard v1.3.2
 *
 * https://github.com/valeriansaliou/jquery.clipboard
 * http://www.steamdev.com/zclip/
 *
 * Copyright 2014, Valerian Saliou
 * Copyright 2011, SteamDev
 *
 * Released under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Version: v1.3
 * Date: Sat Mar 1, 2014
 */

/* Component: jQuery Clipboard */
(function ($) {
  var $clip = null;
  var $is_loaded = false;

  $.fn.clipboard = function (params) {
    if ((typeof params == 'object' && !params.length) || (typeof params == 'undefined')) {
      var settings = $.extend({
        path: 'jquery.clipboard.swf',
        copy: null,
        beforeCopy: null,
        afterCopy: null,
        clickAfter: true
      }, (params || {}));
      
      return this.each(function () {
        var o = $(this);

        if (o.is(':visible') && (typeof settings.copy == 'string' || $.isFunction(settings.copy))) {
          if ($.isFunction(settings.copy)) {
            o.bind('Clipboard_copy',settings.copy);
          }
          if ($.isFunction(settings.beforeCopy)) {
            o.bind('Clipboard_beforeCopy',settings.beforeCopy);
          }
          if ($.isFunction(settings.afterCopy)) {
            o.bind('Clipboard_afterCopy',settings.afterCopy);
          }

          if($clip === null) {
            ZeroClipboard.config({
              moviePath: settings.path,
              trustedDomains: '*',
              hoverClass: 'hover',
              activeClass: 'active'
            });

            $clip = new ZeroClipboard(null);

            $clip.on('load', function(client) {
              client.on('mouseover', function (client) {
                $(this).trigger('mouseenter');
              });
              
              client.on('mouseout', function (client) {
                $(this).trigger('mouseleave');
              });

              client.on('mousedown', function (client) {
                $(this).trigger('mousedown');
                
                if (!$.isFunction(settings.copy)) {
                   client.setText(settings.copy);
                } else {
                   client.setText($(this).triggerHandler('Clipboard_copy'));
                }                        
                
                if ($.isFunction(settings.beforeCopy)) {
                    $(this).trigger('Clipboard_beforeCopy');                            
                }
              });

              client.on('complete', function (client, args) {
                if ($.isFunction(settings.afterCopy)) {
                  $(this).trigger('Clipboard_afterCopy');
                } else {
                  $(this).removeClass('hover');
                }

                if (settings.clickAfter) {
                  $(this).trigger('click');
                }
              });
            });
          }

          $clip.clip([o[0]]);
        }
      });
    }
  };
})(jQuery);

/* Component: ZeroClipboard */
/*!
* ZeroClipboard
* The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
* Copyright (c) 2014 Jon Rohan, James M. Greene
* Licensed MIT
* http://zeroclipboard.org/
* v1.3.2
*/
(function() {
  "use strict";
  var currentElement;
  var flashState = {
    bridge: null,
    version: "0.0.0",
    disabled: null,
    outdated: null,
    ready: null
  };
  var _clipData = {};
  var clientIdCounter = 0;
  var _clientMeta = {};
  var elementIdCounter = 0;
  var _elementMeta = {};
  var _amdModuleId = null;
  var _cjsModuleId = null;
  var _swfPath = function() {
    var i, jsDir, tmpJsPath, jsPath, swfPath = "ZeroClipboard.swf";
    if (document.currentScript && (jsPath = document.currentScript.src)) {} else {
      var scripts = document.getElementsByTagName("script");
      if ("readyState" in scripts[0]) {
        for (i = scripts.length; i--; ) {
          if (scripts[i].readyState === "interactive" && (jsPath = scripts[i].src)) {
            break;
          }
        }
      } else if (document.readyState === "loading") {
        jsPath = scripts[scripts.length - 1].src;
      } else {
        for (i = scripts.length; i--; ) {
          tmpJsPath = scripts[i].src;
          if (!tmpJsPath) {
            jsDir = null;
            break;
          }
          tmpJsPath = tmpJsPath.split("#")[0].split("?")[0];
          tmpJsPath = tmpJsPath.slice(0, tmpJsPath.lastIndexOf("/") + 1);
          if (jsDir === null) {
            jsDir = tmpJsPath;
          } else if (jsDir !== tmpJsPath) {
            jsDir = null;
            break;
          }
        }
        if (jsDir !== null) {
          jsPath = jsDir;
        }
      }
    }
    if (jsPath) {
      jsPath = jsPath.split("#")[0].split("?")[0];
      swfPath = jsPath.slice(0, jsPath.lastIndexOf("/") + 1) + swfPath;
    }
    return swfPath;
  }();
  var _camelizeCssPropName = function() {
    var matcherRegex = /\-([a-z])/g, replacerFn = function(match, group) {
      return group.toUpperCase();
    };
    return function(prop) {
      return prop.replace(matcherRegex, replacerFn);
    };
  }();
  var _getStyle = function(el, prop) {
    var value, camelProp, tagName, possiblePointers, i, len;
    if (window.getComputedStyle) {
      value = window.getComputedStyle(el, null).getPropertyValue(prop);
    } else {
      camelProp = _camelizeCssPropName(prop);
      if (el.currentStyle) {
        value = el.currentStyle[camelProp];
      } else {
        value = el.style[camelProp];
      }
    }
    if (prop === "cursor") {
      if (!value || value === "auto") {
        tagName = el.tagName.toLowerCase();
        if (tagName === "a") {
          return "pointer";
        }
      }
    }
    return value;
  };
  var _elementMouseOver = function(event) {
    if (!event) {
      event = window.event;
    }
    var target;
    if (this !== window) {
      target = this;
    } else if (event.target) {
      target = event.target;
    } else if (event.srcElement) {
      target = event.srcElement;
    }
    ZeroClipboard.activate(target);
  };
  var _addEventHandler = function(element, method, func) {
    if (!element || element.nodeType !== 1) {
      return;
    }
    if (element.addEventListener) {
      element.addEventListener(method, func, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + method, func);
    }
  };
  var _removeEventHandler = function(element, method, func) {
    if (!element || element.nodeType !== 1) {
      return;
    }
    if (element.removeEventListener) {
      element.removeEventListener(method, func, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + method, func);
    }
  };
  var _addClass = function(element, value) {
    if (!element || element.nodeType !== 1) {
      return element;
    }
    if (element.classList) {
      if (!element.classList.contains(value)) {
        element.classList.add(value);
      }
      return element;
    }
    if (value && typeof value === "string") {
      var classNames = (value || "").split(/\s+/);
      if (element.nodeType === 1) {
        if (!element.className) {
          element.className = value;
        } else {
          var className = " " + element.className + " ", setClass = element.className;
          for (var c = 0, cl = classNames.length; c < cl; c++) {
            if (className.indexOf(" " + classNames[c] + " ") < 0) {
              setClass += " " + classNames[c];
            }
          }
          element.className = setClass.replace(/^\s+|\s+$/g, "");
        }
      }
    }
    return element;
  };
  var _removeClass = function(element, value) {
    if (!element || element.nodeType !== 1) {
      return element;
    }
    if (element.classList) {
      if (element.classList.contains(value)) {
        element.classList.remove(value);
      }
      return element;
    }
    if (value && typeof value === "string" || value === undefined) {
      var classNames = (value || "").split(/\s+/);
      if (element.nodeType === 1 && element.className) {
        if (value) {
          var className = (" " + element.className + " ").replace(/[\n\t]/g, " ");
          for (var c = 0, cl = classNames.length; c < cl; c++) {
            className = className.replace(" " + classNames[c] + " ", " ");
          }
          element.className = className.replace(/^\s+|\s+$/g, "");
        } else {
          element.className = "";
        }
      }
    }
    return element;
  };
  var _getZoomFactor = function() {
    var rect, physicalWidth, logicalWidth, zoomFactor = 1;
    if (typeof document.body.getBoundingClientRect === "function") {
      rect = document.body.getBoundingClientRect();
      physicalWidth = rect.right - rect.left;
      logicalWidth = document.body.offsetWidth;
      zoomFactor = Math.round(physicalWidth / logicalWidth * 100) / 100;
    }
    return zoomFactor;
  };
  var _getDOMObjectPosition = function(obj, defaultZIndex) {
    var info = {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      zIndex: _getSafeZIndex(defaultZIndex) - 1
    };
    if (obj.getBoundingClientRect) {
      var rect = obj.getBoundingClientRect();
      var pageXOffset, pageYOffset, zoomFactor;
      if ("pageXOffset" in window && "pageYOffset" in window) {
        pageXOffset = window.pageXOffset;
        pageYOffset = window.pageYOffset;
      } else {
        zoomFactor = _getZoomFactor();
        pageXOffset = Math.round(document.documentElement.scrollLeft / zoomFactor);
        pageYOffset = Math.round(document.documentElement.scrollTop / zoomFactor);
      }
      var leftBorderWidth = document.documentElement.clientLeft || 0;
      var topBorderWidth = document.documentElement.clientTop || 0;
      info.left = rect.left + pageXOffset - leftBorderWidth;
      info.top = rect.top + pageYOffset - topBorderWidth;
      info.width = "width" in rect ? rect.width : rect.right - rect.left;
      info.height = "height" in rect ? rect.height : rect.bottom - rect.top;
    }
    return info;
  };
  var _cacheBust = function(path, options) {
    var cacheBust = options === null || options && options.cacheBust === true && options.useNoCache === true;
    if (cacheBust) {
      return (path.indexOf("?") === -1 ? "?" : "&") + "noCache=" + new Date().getTime();
    } else {
      return "";
    }
  };
  var _vars = function(options) {
    var i, len, domain, str = [], domains = [], trustedOriginsExpanded = [];
    if (options.trustedOrigins) {
      if (typeof options.trustedOrigins === "string") {
        domains.push(options.trustedOrigins);
      } else if (typeof options.trustedOrigins === "object" && "length" in options.trustedOrigins) {
        domains = domains.concat(options.trustedOrigins);
      }
    }
    if (options.trustedDomains) {
      if (typeof options.trustedDomains === "string") {
        domains.push(options.trustedDomains);
      } else if (typeof options.trustedDomains === "object" && "length" in options.trustedDomains) {
        domains = domains.concat(options.trustedDomains);
      }
    }
    if (domains.length) {
      for (i = 0, len = domains.length; i < len; i++) {
        if (domains.hasOwnProperty(i) && domains[i] && typeof domains[i] === "string") {
          domain = _extractDomain(domains[i]);
          if (!domain) {
            continue;
          }
          if (domain === "*") {
            trustedOriginsExpanded = [ domain ];
            break;
          }
          trustedOriginsExpanded.push.apply(trustedOriginsExpanded, [ domain, "//" + domain, window.location.protocol + "//" + domain ]);
        }
      }
    }
    if (trustedOriginsExpanded.length) {
      str.push("trustedOrigins=" + encodeURIComponent(trustedOriginsExpanded.join(",")));
    }
    if (typeof options.jsModuleId === "string" && options.jsModuleId) {
      str.push("jsModuleId=" + encodeURIComponent(options.jsModuleId));
    }
    return str.join("&");
  };
  var _inArray = function(elem, array, fromIndex) {
    if (typeof array.indexOf === "function") {
      return array.indexOf(elem, fromIndex);
    }
    var i, len = array.length;
    if (typeof fromIndex === "undefined") {
      fromIndex = 0;
    } else if (fromIndex < 0) {
      fromIndex = len + fromIndex;
    }
    for (i = fromIndex; i < len; i++) {
      if (array.hasOwnProperty(i) && array[i] === elem) {
        return i;
      }
    }
    return -1;
  };
  var _prepClip = function(elements) {
    if (typeof elements === "string") throw new TypeError("ZeroClipboard doesn't accept query strings.");
    if (!elements.length) return [ elements ];
    return elements;
  };
  var _dispatchCallback = function(func, context, args, async) {
    if (async) {
      window.setTimeout(function() {
        func.apply(context, args);
      }, 0);
    } else {
      func.apply(context, args);
    }
  };
  var _getSafeZIndex = function(val) {
    var zIndex, tmp;
    if (val) {
      if (typeof val === "number" && val > 0) {
        zIndex = val;
      } else if (typeof val === "string" && (tmp = parseInt(val, 10)) && !isNaN(tmp) && tmp > 0) {
        zIndex = tmp;
      }
    }
    if (!zIndex) {
      if (typeof _globalConfig.zIndex === "number" && _globalConfig.zIndex > 0) {
        zIndex = _globalConfig.zIndex;
      } else if (typeof _globalConfig.zIndex === "string" && (tmp = parseInt(_globalConfig.zIndex, 10)) && !isNaN(tmp) && tmp > 0) {
        zIndex = tmp;
      }
    }
    return zIndex || 0;
  };
  var _deprecationWarning = function(deprecatedApiName, debugEnabled) {
    if (deprecatedApiName && debugEnabled !== false && typeof console !== "undefined" && console && (console.warn || console.log)) {
      var deprecationWarning = "`" + deprecatedApiName + "` is deprecated. See docs for more info:\n" + "    https://github.com/zeroclipboard/zeroclipboard/blob/master/docs/instructions.md#deprecations";
      if (console.warn) {
        console.warn(deprecationWarning);
      } else {
        console.log(deprecationWarning);
      }
    }
  };
  var _extend = function() {
    var i, len, arg, prop, src, copy, target = arguments[0] || {};
    for (i = 1, len = arguments.length; i < len; i++) {
      if ((arg = arguments[i]) !== null) {
        for (prop in arg) {
          if (arg.hasOwnProperty(prop)) {
            src = target[prop];
            copy = arg[prop];
            if (target === copy) {
              continue;
            }
            if (copy !== undefined) {
              target[prop] = copy;
            }
          }
        }
      }
    }
    return target;
  };
  var _extractDomain = function(originOrUrl) {
    if (originOrUrl === null || originOrUrl === "") {
      return null;
    }
    originOrUrl = originOrUrl.replace(/^\s+|\s+$/g, "");
    if (originOrUrl === "") {
      return null;
    }
    var protocolIndex = originOrUrl.indexOf("//");
    originOrUrl = protocolIndex === -1 ? originOrUrl : originOrUrl.slice(protocolIndex + 2);
    var pathIndex = originOrUrl.indexOf("/");
    originOrUrl = pathIndex === -1 ? originOrUrl : protocolIndex === -1 || pathIndex === 0 ? null : originOrUrl.slice(0, pathIndex);
    if (originOrUrl && originOrUrl.slice(-4).toLowerCase() === ".swf") {
      return null;
    }
    return originOrUrl || null;
  };
  var _determineScriptAccess = function() {
    var _extractAllDomains = function(origins, resultsArray) {
      var i, len, tmp;
      if (origins !== null && resultsArray[0] !== "*") {
        if (typeof origins === "string") {
          origins = [ origins ];
        }
        if (typeof origins === "object" && "length" in origins) {
          for (i = 0, len = origins.length; i < len; i++) {
            if (origins.hasOwnProperty(i)) {
              tmp = _extractDomain(origins[i]);
              if (tmp) {
                if (tmp === "*") {
                  resultsArray.length = 0;
                  resultsArray.push("*");
                  break;
                }
                if (_inArray(tmp, resultsArray) === -1) {
                  resultsArray.push(tmp);
                }
              }
            }
          }
        }
      }
    };
    var _accessLevelLookup = {
      always: "always",
      samedomain: "sameDomain",
      never: "never"
    };
    return function(currentDomain, configOptions) {
      var asaLower, allowScriptAccess = configOptions.allowScriptAccess;
      if (typeof allowScriptAccess === "string" && (asaLower = allowScriptAccess.toLowerCase()) && /^always|samedomain|never$/.test(asaLower)) {
        return _accessLevelLookup[asaLower];
      }
      var swfDomain = _extractDomain(configOptions.moviePath);
      if (swfDomain === null) {
        swfDomain = currentDomain;
      }
      var trustedDomains = [];
      _extractAllDomains(configOptions.trustedOrigins, trustedDomains);
      _extractAllDomains(configOptions.trustedDomains, trustedDomains);
      var len = trustedDomains.length;
      if (len > 0) {
        if (len === 1 && trustedDomains[0] === "*") {
          return "always";
        }
        if (_inArray(currentDomain, trustedDomains) !== -1) {
          if (len === 1 && currentDomain === swfDomain) {
            return "sameDomain";
          }
          return "always";
        }
      }
      return "never";
    };
  }();
  var _objectKeys = function(obj) {
    if (obj === null) {
      return [];
    }
    if (Object.keys) {
      return Object.keys(obj);
    }
    var keys = [];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        keys.push(prop);
      }
    }
    return keys;
  };
  var _deleteOwnProperties = function(obj) {
    if (obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          delete obj[prop];
        }
      }
    }
    return obj;
  };
  var _detectFlashSupport = function() {
    var hasFlash = false;
    if (typeof flashState.disabled === "boolean") {
      hasFlash = flashState.disabled === false;
    } else {
      if (typeof ActiveXObject === "function") {
        try {
          if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) {
            hasFlash = true;
          }
        } catch (error) {}
      }
      if (!hasFlash && navigator.mimeTypes["application/x-shockwave-flash"]) {
        hasFlash = true;
      }
    }
    return hasFlash;
  };
  function _parseFlashVersion(flashVersion) {
    return flashVersion.replace(/,/g, ".").replace(/[^0-9\.]/g, "");
  }
  function _isFlashVersionSupported(flashVersion) {
    return parseFloat(_parseFlashVersion(flashVersion)) >= 10;
  }
  var ZeroClipboard = function(elements, options) {
    if (!(this instanceof ZeroClipboard)) {
      return new ZeroClipboard(elements, options);
    }
    this.id = "" + clientIdCounter++;
    _clientMeta[this.id] = {
      instance: this,
      elements: [],
      handlers: {}
    };
    if (elements) {
      this.clip(elements);
    }
    if (typeof options !== "undefined") {
      _deprecationWarning("new ZeroClipboard(elements, options)", _globalConfig.debug);
      ZeroClipboard.config(options);
    }
    this.options = ZeroClipboard.config();
    if (typeof flashState.disabled !== "boolean") {
      flashState.disabled = !_detectFlashSupport();
    }
    if (flashState.disabled === false && flashState.outdated !== true) {
      if (flashState.bridge === null) {
        flashState.outdated = false;
        flashState.ready = false;
        _bridge();
      }
    }
  };
  ZeroClipboard.prototype.setText = function(newText) {
    if (newText && newText !== "") {
      _clipData["text/plain"] = newText;
      if (flashState.ready === true && flashState.bridge) {
        flashState.bridge.setText(newText);
      } else {}
    }
    return this;
  };
  ZeroClipboard.prototype.setSize = function(width, height) {
    if (flashState.ready === true && flashState.bridge) {
      flashState.bridge.setSize(width, height);
    } else {}
    return this;
  };
  var _setHandCursor = function(enabled) {
    if (flashState.ready === true && flashState.bridge) {
      flashState.bridge.setHandCursor(enabled);
    } else {}
  };
  ZeroClipboard.prototype.destroy = function() {
    this.unclip();
    this.off();
    delete _clientMeta[this.id];
  };
  var _getAllClients = function() {
    var i, len, client, clients = [], clientIds = _objectKeys(_clientMeta);
    for (i = 0, len = clientIds.length; i < len; i++) {
      client = _clientMeta[clientIds[i]].instance;
      if (client && client instanceof ZeroClipboard) {
        clients.push(client);
      }
    }
    return clients;
  };
  ZeroClipboard.version = "1.3.2";
  var _globalConfig = {
    swfPath: _swfPath,
    trustedDomains: window.location.host ? [ window.location.host ] : [],
    cacheBust: true,
    forceHandCursor: false,
    zIndex: 999999999,
    debug: true,
    title: null,
    autoActivate: true
  };
  ZeroClipboard.config = function(options) {
    if (typeof options === "object" && options !== null) {
      _extend(_globalConfig, options);
    }
    if (typeof options === "string" && options) {
      if (_globalConfig.hasOwnProperty(options)) {
        return _globalConfig[options];
      }
      return;
    }
    var copy = {};
    for (var prop in _globalConfig) {
      if (_globalConfig.hasOwnProperty(prop)) {
        if (typeof _globalConfig[prop] === "object" && _globalConfig[prop] !== null) {
          if ("length" in _globalConfig[prop]) {
            copy[prop] = _globalConfig[prop].slice(0);
          } else {
            copy[prop] = _extend({}, _globalConfig[prop]);
          }
        } else {
          copy[prop] = _globalConfig[prop];
        }
      }
    }
    return copy;
  };
  ZeroClipboard.destroy = function() {
    ZeroClipboard.deactivate();
    for (var clientId in _clientMeta) {
      if (_clientMeta.hasOwnProperty(clientId) && _clientMeta[clientId]) {
        var client = _clientMeta[clientId].instance;
        if (client && typeof client.destroy === "function") {
          client.destroy();
        }
      }
    }
    var htmlBridge = _getHtmlBridge(flashState.bridge);
    if (htmlBridge && htmlBridge.parentNode) {
      htmlBridge.parentNode.removeChild(htmlBridge);
      flashState.ready = null;
      flashState.bridge = null;
    }
  };
  ZeroClipboard.activate = function(element) {
    if (currentElement) {
      _removeClass(currentElement, _globalConfig.hoverClass);
      _removeClass(currentElement, _globalConfig.activeClass);
    }
    currentElement = element;
    _addClass(element, _globalConfig.hoverClass);
    _reposition();
    var newTitle = _globalConfig.title || element.getAttribute("title");
    if (newTitle) {
      var htmlBridge = _getHtmlBridge(flashState.bridge);
      if (htmlBridge) {
        htmlBridge.setAttribute("title", newTitle);
      }
    }
    var useHandCursor = _globalConfig.forceHandCursor === true || _getStyle(element, "cursor") === "pointer";
    _setHandCursor(useHandCursor);
  };
  ZeroClipboard.deactivate = function() {
    var htmlBridge = _getHtmlBridge(flashState.bridge);
    if (htmlBridge) {
      htmlBridge.style.left = "0px";
      htmlBridge.style.top = "-9999px";
      htmlBridge.removeAttribute("title");
    }
    if (currentElement) {
      _removeClass(currentElement, _globalConfig.hoverClass);
      _removeClass(currentElement, _globalConfig.activeClass);
      currentElement = null;
    }
  };
  var _bridge = function() {
    var flashBridge, len;
    var container = document.getElementById("global-zeroclipboard-html-bridge");
    if (!container) {
      var opts = ZeroClipboard.config();
      opts.jsModuleId = typeof _amdModuleId === "string" && _amdModuleId || typeof _cjsModuleId === "string" && _cjsModuleId || null;
      var allowScriptAccess = _determineScriptAccess(window.location.host, _globalConfig);
      var flashvars = _vars(opts);
      var swfUrl = _globalConfig.moviePath + _cacheBust(_globalConfig.moviePath, _globalConfig);
      var html = '      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="' + swfUrl + '"/>         <param name="allowScriptAccess" value="' + allowScriptAccess + '"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="' + flashvars + '"/>         <embed src="' + swfUrl + '"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="' + allowScriptAccess + '"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="' + flashvars + '"           scale="exactfit">         </embed>       </object>';
      container = document.createElement("div");
      container.id = "global-zeroclipboard-html-bridge";
      container.setAttribute("class", "global-zeroclipboard-container");
      container.style.position = "absolute";
      container.style.left = "0px";
      container.style.top = "-9999px";
      container.style.width = "15px";
      container.style.height = "15px";
      container.style.zIndex = "" + _getSafeZIndex(_globalConfig.zIndex);
      document.body.appendChild(container);
      container.innerHTML = html;
    }
    flashBridge = document["global-zeroclipboard-flash-bridge"];
    if (flashBridge && (len = flashBridge.length)) {
      flashBridge = flashBridge[len - 1];
    }
    flashState.bridge = flashBridge || container.children[0].lastElementChild;
  };
  var _getHtmlBridge = function(flashBridge) {
    var isFlashElement = /^OBJECT|EMBED$/;
    var htmlBridge = flashBridge && flashBridge.parentNode;
    while (htmlBridge && isFlashElement.test(htmlBridge.nodeName) && htmlBridge.parentNode) {
      htmlBridge = htmlBridge.parentNode;
    }
    return htmlBridge || null;
  };
  var _reposition = function() {
    if (currentElement) {
      var pos = _getDOMObjectPosition(currentElement, _globalConfig.zIndex);
      var htmlBridge = _getHtmlBridge(flashState.bridge);
      if (htmlBridge) {
        htmlBridge.style.top = pos.top + "px";
        htmlBridge.style.left = pos.left + "px";
        htmlBridge.style.width = pos.width + "px";
        htmlBridge.style.height = pos.height + "px";
        htmlBridge.style.zIndex = pos.zIndex + 1;
      }
      if (flashState.ready === true && flashState.bridge) {
        flashState.bridge.setSize(pos.width, pos.height);
      }
    }
    return this;
  };
  ZeroClipboard.prototype.on = function(eventName, func) {
    var i, len, events, added = {}, handlers = _clientMeta[this.id] && _clientMeta[this.id].handlers;
    if (typeof eventName === "string" && eventName) {
      events = eventName.toLowerCase().split(/\s+/);
    } else if (typeof eventName === "object" && eventName && typeof func === "undefined") {
      for (i in eventName) {
        if (eventName.hasOwnProperty(i) && typeof i === "string" && i && typeof eventName[i] === "function") {
          this.on(i, eventName[i]);
        }
      }
    }
    if (events && events.length) {
      for (i = 0, len = events.length; i < len; i++) {
        eventName = events[i].replace(/^on/, "");
        added[eventName] = true;
        if (!handlers[eventName]) {
          handlers[eventName] = [];
        }
        handlers[eventName].push(func);
      }
      if (added.noflash && flashState.disabled) {
        _receiveEvent.call(this, "noflash", {});
      }
      if (added.wrongflash && flashState.outdated) {
        _receiveEvent.call(this, "wrongflash", {
          flashVersion: flashState.version
        });
      }
      if (added.load && flashState.ready) {
        _receiveEvent.call(this, "load", {
          flashVersion: flashState.version
        });
      }
    }
    return this;
  };
  ZeroClipboard.prototype.off = function(eventName, func) {
    var i, len, foundIndex, events, perEventHandlers, handlers = _clientMeta[this.id] && _clientMeta[this.id].handlers;
    if (arguments.length === 0) {
      events = _objectKeys(handlers);
    } else if (typeof eventName === "string" && eventName) {
      events = eventName.split(/\s+/);
    } else if (typeof eventName === "object" && eventName && typeof func === "undefined") {
      for (i in eventName) {
        if (eventName.hasOwnProperty(i) && typeof i === "string" && i && typeof eventName[i] === "function") {
          this.off(i, eventName[i]);
        }
      }
    }
    if (events && events.length) {
      for (i = 0, len = events.length; i < len; i++) {
        eventName = events[i].toLowerCase().replace(/^on/, "");
        perEventHandlers = handlers[eventName];
        if (perEventHandlers && perEventHandlers.length) {
          if (func) {
            foundIndex = _inArray(func, perEventHandlers);
            while (foundIndex !== -1) {
              perEventHandlers.splice(foundIndex, 1);
              foundIndex = _inArray(func, perEventHandlers, foundIndex);
            }
          } else {
            handlers[eventName].length = 0;
          }
        }
      }
    }
    return this;
  };
  ZeroClipboard.prototype.handlers = function(eventName) {
    var prop, copy = null, handlers = _clientMeta[this.id] && _clientMeta[this.id].handlers;
    if (handlers) {
      if (typeof eventName === "string" && eventName) {
        return handlers[eventName] ? handlers[eventName].slice(0) : null;
      }
      copy = {};
      for (prop in handlers) {
        if (handlers.hasOwnProperty(prop) && handlers[prop]) {
          copy[prop] = handlers[prop].slice(0);
        }
      }
    }
    return copy;
  };
  var _dispatchClientCallbacks = function(eventName, context, args, async) {
    var handlers = _clientMeta[this.id] && _clientMeta[this.id].handlers[eventName];
    if (handlers && handlers.length) {
      var i, len, func, originalContext = context || this;
      for (i = 0, len = handlers.length; i < len; i++) {
        func = handlers[i];
        context = originalContext;
        if (typeof func === "string" && typeof window[func] === "function") {
          func = window[func];
        }
        if (typeof func === "object" && func && typeof func.handleEvent === "function") {
          context = func;
          func = func.handleEvent;
        }
        if (typeof func === "function") {
          _dispatchCallback(func, context, args, async);
        }
      }
    }
    return this;
  };
  ZeroClipboard.prototype.clip = function(elements) {
    elements = _prepClip(elements);
    for (var i = 0; i < elements.length; i++) {
      if (elements.hasOwnProperty(i) && elements[i] && elements[i].nodeType === 1) {
        if (!elements[i].zcClippingId) {
          elements[i].zcClippingId = "zcClippingId_" + elementIdCounter++;
          _elementMeta[elements[i].zcClippingId] = [ this.id ];
          if (_globalConfig.autoActivate === true) {
            _addEventHandler(elements[i], "mouseover", _elementMouseOver);
          }
        } else if (_inArray(this.id, _elementMeta[elements[i].zcClippingId]) === -1) {
          _elementMeta[elements[i].zcClippingId].push(this.id);
        }
        var clippedElements = _clientMeta[this.id].elements;
        if (_inArray(elements[i], clippedElements) === -1) {
          clippedElements.push(elements[i]);
        }
      }
    }
    return this;
  };
  ZeroClipboard.prototype.unclip = function(elements) {
    var meta = _clientMeta[this.id];
    if (meta) {
      var clippedElements = meta.elements;
      var arrayIndex;
      if (typeof elements === "undefined") {
        elements = clippedElements.slice(0);
      } else {
        elements = _prepClip(elements);
      }
      for (var i = elements.length; i--; ) {
        if (elements.hasOwnProperty(i) && elements[i] && elements[i].nodeType === 1) {
          arrayIndex = 0;
          while ((arrayIndex = _inArray(elements[i], clippedElements, arrayIndex)) !== -1) {
            clippedElements.splice(arrayIndex, 1);
          }
          var clientIds = _elementMeta[elements[i].zcClippingId];
          if (clientIds) {
            arrayIndex = 0;
            while ((arrayIndex = _inArray(this.id, clientIds, arrayIndex)) !== -1) {
              clientIds.splice(arrayIndex, 1);
            }
            if (clientIds.length === 0) {
              if (_globalConfig.autoActivate === true) {
                _removeEventHandler(elements[i], "mouseover", _elementMouseOver);
              }
              delete elements[i].zcClippingId;
            }
          }
        }
      }
    }
    return this;
  };
  ZeroClipboard.prototype.elements = function() {
    var meta = _clientMeta[this.id];
    return meta && meta.elements ? meta.elements.slice(0) : [];
  };
  var _getAllClientsClippedToElement = function(element) {
    var elementMetaId, clientIds, i, len, client, clients = [];
    if (element && element.nodeType === 1 && (elementMetaId = element.zcClippingId) && _elementMeta.hasOwnProperty(elementMetaId)) {
      clientIds = _elementMeta[elementMetaId];
      if (clientIds && clientIds.length) {
        for (i = 0, len = clientIds.length; i < len; i++) {
          client = _clientMeta[clientIds[i]].instance;
          if (client && client instanceof ZeroClipboard) {
            clients.push(client);
          }
        }
      }
    }
    return clients;
  };
  _globalConfig.hoverClass = "zeroclipboard-is-hover";
  _globalConfig.activeClass = "zeroclipboard-is-active";
  _globalConfig.trustedOrigins = null;
  _globalConfig.allowScriptAccess = null;
  _globalConfig.useNoCache = true;
  _globalConfig.moviePath = "ZeroClipboard.swf";
  ZeroClipboard.detectFlashSupport = function() {
    _deprecationWarning("ZeroClipboard.detectFlashSupport", _globalConfig.debug);
    return _detectFlashSupport();
  };
  ZeroClipboard.dispatch = function(eventName, args) {
    if (typeof eventName === "string" && eventName) {
      var cleanEventName = eventName.toLowerCase().replace(/^on/, "");
      if (cleanEventName) {
        var clients = currentElement ? _getAllClientsClippedToElement(currentElement) : _getAllClients();
        for (var i = 0, len = clients.length; i < len; i++) {
          _receiveEvent.call(clients[i], cleanEventName, args);
        }
      }
    }
  };
  ZeroClipboard.prototype.setHandCursor = function(enabled) {
    _deprecationWarning("ZeroClipboard.prototype.setHandCursor", _globalConfig.debug);
    enabled = typeof enabled === "boolean" ? enabled : !!enabled;
    _setHandCursor(enabled);
    _globalConfig.forceHandCursor = enabled;
    return this;
  };
  ZeroClipboard.prototype.reposition = function() {
    _deprecationWarning("ZeroClipboard.prototype.reposition", _globalConfig.debug);
    return _reposition();
  };
  ZeroClipboard.prototype.receiveEvent = function(eventName, args) {
    _deprecationWarning("ZeroClipboard.prototype.receiveEvent", _globalConfig.debug);
    if (typeof eventName === "string" && eventName) {
      var cleanEventName = eventName.toLowerCase().replace(/^on/, "");
      if (cleanEventName) {
        _receiveEvent.call(this, cleanEventName, args);
      }
    }
  };
  ZeroClipboard.prototype.setCurrent = function(element) {
    _deprecationWarning("ZeroClipboard.prototype.setCurrent", _globalConfig.debug);
    ZeroClipboard.activate(element);
    return this;
  };
  ZeroClipboard.prototype.resetBridge = function() {
    _deprecationWarning("ZeroClipboard.prototype.resetBridge", _globalConfig.debug);
    ZeroClipboard.deactivate();
    return this;
  };
  ZeroClipboard.prototype.setTitle = function(newTitle) {
    _deprecationWarning("ZeroClipboard.prototype.setTitle", _globalConfig.debug);
    newTitle = newTitle || _globalConfig.title || currentElement && currentElement.getAttribute("title");
    if (newTitle) {
      var htmlBridge = _getHtmlBridge(flashState.bridge);
      if (htmlBridge) {
        htmlBridge.setAttribute("title", newTitle);
      }
    }
    return this;
  };
  ZeroClipboard.setDefaults = function(options) {
    _deprecationWarning("ZeroClipboard.setDefaults", _globalConfig.debug);
    ZeroClipboard.config(options);
  };
  ZeroClipboard.prototype.addEventListener = function(eventName, func) {
    _deprecationWarning("ZeroClipboard.prototype.addEventListener", _globalConfig.debug);
    return this.on(eventName, func);
  };
  ZeroClipboard.prototype.removeEventListener = function(eventName, func) {
    _deprecationWarning("ZeroClipboard.prototype.removeEventListener", _globalConfig.debug);
    return this.off(eventName, func);
  };
  ZeroClipboard.prototype.ready = function() {
    _deprecationWarning("ZeroClipboard.prototype.ready", _globalConfig.debug);
    return flashState.ready === true;
  };
  var _receiveEvent = function(eventName, args) {
    eventName = eventName.toLowerCase().replace(/^on/, "");
    var cleanVersion = args && args.flashVersion && _parseFlashVersion(args.flashVersion) || null;
    var element = currentElement;
    var performCallbackAsync = true;
    switch (eventName) {
     case "load":
      if (cleanVersion) {
        if (!_isFlashVersionSupported(cleanVersion)) {
          _receiveEvent.call(this, "onWrongFlash", {
            flashVersion: cleanVersion
          });
          return;
        }
        flashState.outdated = false;
        flashState.ready = true;
        flashState.version = cleanVersion;
      }
      break;

     case "wrongflash":
      if (cleanVersion && !_isFlashVersionSupported(cleanVersion)) {
        flashState.outdated = true;
        flashState.ready = false;
        flashState.version = cleanVersion;
      }
      break;

     case "mouseover":
      _addClass(element, _globalConfig.hoverClass);
      break;

     case "mouseout":
      if (_globalConfig.autoActivate === true) {
        ZeroClipboard.deactivate();
      }
      break;

     case "mousedown":
      _addClass(element, _globalConfig.activeClass);
      break;

     case "mouseup":
      _removeClass(element, _globalConfig.activeClass);
      break;

     case "datarequested":
      var targetId = element.getAttribute("data-clipboard-target"), targetEl = !targetId ? null : document.getElementById(targetId);
      if (targetEl) {
        var textContent = targetEl.value || targetEl.textContent || targetEl.innerText;
        if (textContent) {
          this.setText(textContent);
        }
      } else {
        var defaultText = element.getAttribute("data-clipboard-text");
        if (defaultText) {
          this.setText(defaultText);
        }
      }
      performCallbackAsync = false;
      break;

     case "complete":
      _deleteOwnProperties(_clipData);
      break;
    }
    var context = element;
    var eventArgs = [ this, args ];
    return _dispatchClientCallbacks.call(this, eventName, context, eventArgs, performCallbackAsync);
  };
  if (typeof define === "function" && define.amd) {
    define([ "require", "exports", "module" ], function(require, exports, module) {
      _amdModuleId = module && module.id || null;
      return ZeroClipboard;
    });
  } else if (typeof module === "object" && module && typeof module.exports === "object" && module.exports) {
    _cjsModuleId = module.id || null;
    module.exports = ZeroClipboard;
  } else {
    window.ZeroClipboard = ZeroClipboard;
  }
})();
