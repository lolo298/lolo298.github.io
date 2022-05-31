//Particle.js for background
particlesJS.load('particles', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});


//Slick for carrousel
$(document).ready(function() {
    $('#skills-carrousel').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
        arrows: true,
        speed: 300,
        infinite: true,
        variableWidth: true,
        useTransform: false
    });
});