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


//navbar
$(document).ready(function() {
    let about = document.querySelector('.follow-about');
    let project = document.querySelector('.follow-project');
    let skill = document.querySelector('.follow-skill');
    let contact = document.querySelector('.follow-contact');

    let landingWp = new Waypoint({
        element: document.querySelector('.landing'),
        handler: function(direction) {

            about.classList.replace('follow-active', 'follow-inactive');
            project.classList.replace('follow-active', 'follow-inactive');
            skill.classList.replace('follow-active', 'follow-inactive');
            contact.classList.replace('follow-active', 'follow-inactive');
        },
        offset: '-10%'
    })

    let aboutWp = new Waypoint({
        element: document.querySelector('.about'),
        handler: function(direction) {

            about.classList.replace('follow-inactive', 'follow-active');
            project.classList.replace('follow-active', 'follow-inactive');
            skill.classList.replace('follow-active', 'follow-inactive');
            contact.classList.replace('follow-active', 'follow-inactive');
        },
        offset: '20%'
    })
    let projectWp = new Waypoint({
        element: document.querySelector('.projects'),
        handler: function(direction) {

            project.classList.replace('follow-inactive', 'follow-active');
            about.classList.replace('follow-active', 'follow-inactive');
            skill.classList.replace('follow-active', 'follow-inactive');
            contact.classList.replace('follow-active', 'follow-inactive');
        },
        offset: '20%'
    })
    let skillWp = new Waypoint({
        element: document.getElementById('skills'),
        handler: function(direction) {

            skill.classList.replace('follow-inactive', 'follow-active');
            project.classList.replace('follow-active', 'follow-inactive');
            about.classList.replace('follow-active', 'follow-inactive');
            contact.classList.replace('follow-active', 'follow-inactive');
        },
        offset: '20%'
    })
    let ContactWp = new Waypoint({
        element: document.getElementById('contact'),
        handler: function(direction) {

            contact.classList.replace('follow-inactive', 'follow-active');
            about.classList.replace('follow-active', 'follow-inactive');
            skill.classList.replace('follow-active', 'follow-inactive');
            project.classList.replace('follow-active', 'follow-inactive');
        },
        offset: '60%'
    })

});