const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})


function initMap() {
    // Térkép inicializálása
    const location = { lat: 47.481417477010126, lng: 19.055504608908553 }; // BME koordinátái 47.481417477010126, 19.055504608908553
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
    });

    // Szó hozzárendelése
    const word = "Budapesti Műszaki és Gazdaságtudományi Egyetem"; 
    document.getElementById("assigned-word").innerText = word;

    // Jelölés a térképen
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: word,
    });
}
