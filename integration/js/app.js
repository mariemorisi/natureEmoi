
const sr = ScrollReveal({
    duration: 1000,
    reset: true
});

sr.reveal('.big-title', {
    origin: 'top',
    duration: 1700,
    distance: '50px'
});

sr.reveal('.service-item', {
    delay: 800,
    duration: 1800
})

sr.reveal('.all-plants', {
    delay: 500,
    duration: 2000
});

sr.reveal('.plant-box', {
    reset: false,
    delay: 500,
    duration: 1200
}, 100)
