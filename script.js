document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const enterBtn = document.getElementById("enter-btn");
    const navbar = document.getElementById("navbar");

    enterBtn.addEventListener("click", function () {
        popup.classList.add("hidden"); // Hilangkan popup dengan efek smooth
        setTimeout(() => {
            popup.style.display = "none"; // Hilangkan dari tampilan
            navbar.style.display = "block"; // Tampilkan navigasi setelah popup ditutup
        }, 500);
    });

    // Animasi Background Gambar
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function changeSlide() {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("active");
    }

    setInterval(changeSlide, 5000); // Ganti gambar setiap 5 detik
});
