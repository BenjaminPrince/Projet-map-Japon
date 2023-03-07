// Ajouter un en-tête CORS à la requête
const headers = new Headers();
headers.append('Access-Control-Allow-Origin', '*');

// Création de la carte avec le centre sur le Japon
let mymap = L.map('mapid', {
    center: [35.6804, 139.7690],
    zoom: 5,
    zoomControl: false,
    attributionControl: false
});

// Ajout du fond de carte OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(mymap);

// Ajout d'un marqueur pour Tokyo
L.marker([35.6828, 139.759]).addTo(mymap)
    .bindPopup("<b>Tokyo</b><br>Population: 13,515,271<br>Spécialité culinaire: Sushi<br><img src='/src/image/tokyo.jpg' alt='Tokyo'>").openPopup();

// Ajout d'un marqueur pour Osaka
L.marker([34.6937, 135.5023]).addTo(mymap)
    .bindPopup("<b>Osaka</b><br>Population: 19,165,340<br>Spécialité culinaire: Takoyaki<br><img src='/src/image/osaka.jpg' alt='Osaka'>").openPopup();

// Ajout d'un marqueur pour Kyoto
L.marker([35.0116, 135.7680]).addTo(mymap)
    .bindPopup("<b>Kyoto</b><br>Population: 2,602,422<br>Spécialité culinaire: Kaiseki<br><img src='/src/image/kyoto.jpg' alt='Kyoto'>").openPopup();

// Ajout d'un marqueur pour Sapporo
L.marker([43.0621, 141.3544]).addTo(mymap)
    .bindPopup("<b>Sapporo</b><br>Population: 1,957,579<br>Spécialité culinaire: Ramen<br><img src='/src/image/sapporo.png' alt='Sapporo'>").openPopup();

// Ajout d'un marqueur pour Fukuoka
L.marker([33.5903, 130.4017]).addTo(mymap)
    .bindPopup("<b>Fukuoka</b><br>Population: 5,570,222<br>Spécialité culinaire: Hakata Ramen<br><img src='/src/image/Fukuoka food.webp'' alt='Fukuoka'>").openPopup();

// Akita
L.marker([39.7186, 140.1020]).addTo(mymap)
.bindPopup("<b>Akita</b><br>Population: 311,680<br>Spécialité culinaire: Kiritanpo<br><img src='/src/image/akita.png' alt='Akita'>").openPopup();

// Ajout d'un marqueur pour Hiroshima
L.marker([34.3853, 132.4553]).addTo(mymap)
.bindPopup("<b>Hiroshima</b><br>Population: 2,806,307<br>Spécialité culinaire: Okonomiyaki<br><img src='/src/image/hiroshima.jpg' alt='Hiroshima'>");

// Ajout d'un marqueur pour Sendai
L.marker([38.2682, 140.8694]).addTo(mymap)
.bindPopup("<b>Sendai</b><br>Population: 1,089,846<br>Spécialité culinaire: Gyutan<br><img src='/src/image/sendai.jpg' alt='Sendai'>");

// Ajout d'un marqueur pour Miyazaki
L.marker([31.9073, 131.4205]).addTo(mymap)
.bindPopup("<b>Miyazaki</b><br>Population: 1,100,418<br>Spécialité culinaire: Le poulet Nanban <br><img src='/src/image/poulet nanban.jpg' alt='Miyazaki'>");

// Ajout d'un marqueur pour Kushiro
L.marker([42.9849, 144.3817]).addTo(mymap)
.bindPopup("<b>Kushiro</b><br>Population: 173,572<br>Spécialité culinaire: Kani (crabe)<br><img src='/src/image/kushiro.png' alt='Kushiro'>");


// Personnalisation de la carte
L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
    attribution: '',
    maxZoom: 19
}).addTo(mymap);

// Définir la langue de la carte en français
mymap.setLanguage('fr');



