const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

const animateElements = document.querySelectorAll('.animate-on-scroll, .slide-left, .slide-right, .zoom-in, .rotate-in, .bounce-in, .flip-in, .slide-up, .fade-in-delay, .pulse-in, .shake-in');

animateElements.forEach(el => {
    observer.observe(el);
});