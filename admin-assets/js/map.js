mapboxgl.accessToken = 'pk.eyJ1IjoiZW5haW1hbnN5YWhtaSIsImEiOiJjbGFhaWNmamIwNzA4M25vM2d5cDFrYjFjIn0.ZUhZjJVocvsakOr_nLaufw';
var  map
function mapinit(){
   map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v11',
  center: [102.5,4],
  zoom: 6,
  attributionControl: false,
  logoRequired:false,
  attribution: 'jupem.gov.my'
  });  


  
  feedData() }

  function feedData() {
      fetch('https://kik-jupem-johor-2023-default-rtdb.firebaseio.com/feed.json')
      .then((response) => {
          return response.json()
      })
      .then((data)=>{
          var ids = Object.keys(data)

          for (i=0;i<ids.length;i++){
              // create the popup
    var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    '<p> Kejadian : ' + data[ids[i]].status  + ' <p> Dilapor oleh : ' + data[ids[i]].email+ ' </p> <img src=' + data[ids[i]].image + ' /> <p> Dilapor oleh : ' + data[ids[i]].email + ' </p>'
    );
     
    // create DOM element for the marker
    var el = document.createElement('div');
    el.id = 'marker';
     
    // create the marker
    new mapboxgl.Marker()
    .setLngLat([data[ids[i]].location.longitude, data[ids[i]].location.latitude])
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);
          }
      })

      
  }
