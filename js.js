

function moveMapToBerlin(map){
    //map.setCenter();
    map.setZoom(14);
  }
  
  /**
   * Boilerplate map initialization code starts below:
   */
  
  //Step 1: initialize communication with the platform
  // In your own code, replace variable window.apikey with your own apikey
  var platform = new H.service.Platform({
    apikey: "xL2DfERhQw0gNNgcTAT1SjLDedq9z3W_yiTfo5E9Zy8"
  });
  var defaultLayers = platform.createDefaultLayers();
  //<!-- ... (rest of the code remains the same) ... -->
  
  
    // ... (rest of the code remains the same) ...
  
    // Step 4: Get the user's current position
    var positioning = new H.geo.Positioning(map);
    positioning.getCurrentPosition({
      //timeout: 10000, // 10 seconds timeout
    }, (position) => {
      // Add a marker to the map at the current location
      var marker = new H.map.Marker({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      map.addObject(marker);
      map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
      map.setZoom(15);
    }, (error) => {
      console.error('Error getting current position:', error);
    });
  
  //Step 2: initialize a map - this map is centered over Europe
  var map = new H.Map(document.getElementById('map'),
    defaultLayers.vector.normal.map,{
    //center: {lat:50, lng:5},
    zoom: 4,
    pixelRatio: window.devicePixelRatio || 1
  });
  // add a resize listener to make sure that the map occupies the whole container
  window.addEventListener('resize', () => map.getViewPort().resize());
  
  //Step 3: make the map interactive
  // MapEvents enables the event system
  // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  
  // Create the default UI components
  var ui = H.ui.UI.createDefault(map, defaultLayers);
  
  // Now use the map as required...
  window.onload = function () {
    moveMapToBerlin(map);
  }