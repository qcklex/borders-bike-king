// HERO CAROUSEL
let heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

setInterval(function() {
    heroSlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % heroSlides.length;
    heroSlides[currentSlide].classList.add('active');
}, 5000);
