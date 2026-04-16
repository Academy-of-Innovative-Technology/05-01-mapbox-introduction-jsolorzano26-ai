
const MAPBOX_ACCESS_TOKEN = // "pk.eyJ1IjoianNvbG9yemFubzI2IiwiYSI6ImNtbzFyZzJlbTBtYTEyb3B1dzJ0aWI4cHMifQ.hDQrk0kII7YUCE3jE0NOLQ"; //
if (typeof MAPBOX_ACCESS_TOKEN === 'undefined') {
    console.error("Mapbox token is missing. Check your env.js file.");
}

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;


const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-74.0060, 40.7128],
    zoom: 10
});


map.addControl(new mapboxgl.NavigationControl());


const popup = new mapboxgl.Popup({ offset: 25 })
    .setText("Hello from NYC!");

new mapboxgl.Marker({ color: "red" })
    .setLngLat([-74.0060, 40.7128])
    .setPopup(popup)
    .addTo(map);
