document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    document.getElementById("prev").addEventListener("click", () => moveSlide(-1));
    document.getElementById("next").addEventListener("click", () => moveSlide(1));

    function moveSlide(direction) {
        currentIndex = (currentIndex + direction + items.length) % items.length;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(() => moveSlide(1), 5000); // Cambio automático cada 5s
});
