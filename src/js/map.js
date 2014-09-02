google.maps.event.addDomListener(window, 'load', init);
  var map;
  
    function init() {
      var mapOptions = {
          center: new google.maps.LatLng(48.85096,2.37986),
          zoom: 17,
          zoomControl: true,
          zoomControlOptions: {
              style: google.maps.ZoomControlStyle.DEFAULT,
          },
          disableDoubleClickZoom: false,
          mapTypeControl: false,
          scaleControl: false,
          scrollwheel: false,
          panControl: false,
          streetViewControl: false,
          draggable : true,
          overviewMapControl: false,
          overviewMapControlOptions: {
              opened: false,
          },
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [
              {
                featureType: "landscape",
                elementType:"all",
                stylers: [
                  { saturation: -50 },
                  { lightness: 25 },
                  { hue: "#113e5c" },
                  { visibility: "on" }
                ]
              },{
                featureType: "poi",
                elementType:"all",
                stylers: [
                  { saturation: -100 },
                  { lightness: 51 },
                  { visibility: "off" }
                ]
              },{
                featureType: "road",
                elementType:"all",
                stylers: [
                  { saturation: -100 },
                ]
              },{
                featureType: "administrative",
                elementType:"all",
                stylers: [
                  { visibility: "off" }
                ]
              }
          ],
      }
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
          // icon: '../img/beex_marker.png',
          position: new google.maps.LatLng(48.85096,2.37986),
          map: map,
      });
    }