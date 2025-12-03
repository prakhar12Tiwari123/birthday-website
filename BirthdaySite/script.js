let currentSlide = 1;
const totalSlides = 5;

function nextSlide() {
    document.getElementById(`slide${currentSlide}`).classList.remove('active');
    currentSlide = currentSlide % totalSlides + 1;
    document.getElementById(`slide${currentSlide}`).classList.add('active');
}

function prevSlide() {
    document.getElementById(`slide${currentSlide}`).classList.remove('active');
    currentSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
    document.getElementById(`slide${currentSlide}`).classList.add('active');
}

// Optional: Auto-advance every 5 seconds
setInterval(nextSlide, 5000);
