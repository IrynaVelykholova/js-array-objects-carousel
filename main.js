"use script"
const carouselContainer = document.querySelector(".carousel-container");
let imageActive = "";

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//creo ciclo forEach sul mio array object
images.forEach((element, i) => {
    console.log(`
    ${element.image} ${element.title} ${element.title}
    `);

    if(i === 0) {
        imageActive = "active";
    } else {
        imageActive = "";
    }

    carouselContainer.innerHTML += 
    `<div class="carousel-image-container ${imageActive}">
    <img src="${element.image}" alt="" class="carousel-image">
    <h3>${element.title}</h3>
    <p>${element.text}</p>
    </div>
    `
});
const btnLeft = document.getElementById("btn-left");
    const btnRight = document.getElementById("btn-right");

btnRight.addEventListener("click", function() {
    console.log("ho cliccato btn right");

    //prendo elemento subito dopo che ha classe active
    const next = document.querySelector(".carousel-image-container.active + div")
    console.log(next);

    // devo togliere la classe active dalla classe che ce l'ha
    document.querySelector(".carousel-image-container.active").classList.remove("active");

    //mettere active all'immagine successiva
    next.classList.add("active");
});

btnLeft.addEventListener("click", function() {
    console.log("ho cliccato btn left");
});