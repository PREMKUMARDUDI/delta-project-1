const lat = listing.geometry.coordinates[1];
const lng = listing.geometry.coordinates[0];

var map = L.map('map').setView([lat, lng], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([lat, lng],
    {alt: 'Kyiv'}).addTo(map) // "Kyiv" is the accessible name of this marker
    .bindPopup(`<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`);

    