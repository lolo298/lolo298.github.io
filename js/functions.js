//Particle.js for background
particlesJS.load('particles', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});


//Slick for carrousel
$(document).ready(function() {
    $('#skills-carrousel').slick({
        rows: 2,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        centerMode: true,
        centerPadding: '60px',
        variableWidth: true,
        variableHeight: true
    });
});