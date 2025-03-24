document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup")!;
    const enterBtn = document.getElementById("enter-btn")!;
    const navbar = document.getElementById("navbar")!;
    const animatedText = document.getElementById("animated-text")!;

    enterBtn.addEventListener("click", function () {
        popup.classList.add("hidden");
        setTimeout(() => {
            popup.style.display = "none";
            navbar.style.display = "block";
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

    setInterval(changeSlide, 5000);

    // Efek Mengetik
    const text = "Selamat datang di website pribadi saya!";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            animatedText.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();
});
