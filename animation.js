document.addEventListener("DOMContentLoaded", () => {
    const slides = Array.from(document.querySelectorAll(".hero-slideshow .slide"));

    if (slides.length !== 5) {
        return;
    }

    let currentSlide = 0;

    window.setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }, 6000);
});
