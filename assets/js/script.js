L.mapbox.accessToken = 'pk.eyJ1IjoibWFoYWRvdWsiLCJhIjoiY2xzOTZhYmFxMDNqZTJqb2p4NjlyNnAwdSJ9.Zz69oouzwA_GtbsLaCHb6A';
var map = L.map('map').setView([7.492846707256218, -5.2813563273975035], 7);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

L.tileLayer(
    'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + L.mapbox.accessToken, {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '© <a href="https://www.mapbox.com/contribute/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);