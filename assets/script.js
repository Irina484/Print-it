const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

function initDots() {
    const sliderDots = document.querySelector('.dots');
	if (slides.length > 1) { // Condition: Créer les dots seulement s'il y a plus d'un slide
    slides.forEach((slide, index) => {
        // Création du bullet point pour chaque slide
		const dot = document.createElement('div');
        dot.classList.add('dot');
        // Vous pouvez ajouter un événement clic au dot pour naviguer vers le slide correspondant
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        sliderDots.appendChild(dot);
    });
	const indicators = document.querySelectorAll('.dots .dot');
	indicators[0].classList.add('dot_selected');
}
}
// Fonction pour naviguer vers un slide spécifique
function goToSlide(slideIndex) {
    currentIndex = slideIndex;
    updateSlide();
}
initDots(); // Initialisation des dots

const numberOfSlides = slides.length;
let currentIndex = 0;

// Sélectionner les éléments flèche gauche et droite dans le DOM
let arrowLeft = document.querySelector('.arrow_left');
let arrowRight = document.querySelector('.arrow_right');

// Ajouter un gestionnaire d'événement pour le clic sur la flèche gauche
arrowLeft.addEventListener('click', function() {
    console.log('Flèche gauche cliquée');
	currentIndex = (currentIndex - 1 + numberOfSlides) % numberOfSlides;
	updateSlide();
});
function updateSlide(){
	let banerImage= document.querySelector('.banner-img');
	let banerParagraph= document.querySelector('#banner p');
	banerImage.src=slides[currentIndex].image;
	banerParagraph.innerHTML=slides[currentIndex].tagLine;
	const indicators = document.querySelectorAll('.dots .dot');

	// Supprime la classe .dot_selected de tous les points
	indicators.forEach((indicator) => {
		indicator.classList.remove('dot_selected');
	});

	// Ajoute la classe .dot_selected au point correspondant à l'index actuel
	indicators[currentIndex].classList.add('dot_selected');
}

// Ajouter un gestionnaire d'événement pour le clic sur la flèche droite
arrowRight.addEventListener('click', function() {
    console.log('Flèche droite cliquée');
	currentIndex = (currentIndex + 1) % numberOfSlides;
	updateSlide();
});


