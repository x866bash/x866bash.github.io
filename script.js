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
    const images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg"
    ];

    const bgContainer = document.createElement("div");
    bgContainer.classList.add("background-container");
    document.body.prepend(bgContainer);

    images.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        if (index === 0) img.classList.add("active");
        bgContainer.appendChild(img);
    });

    let currentIndex = 0;
    setInterval(() => {
        const bgImages = document.querySelectorAll(".background-container img");
        bgImages[currentIndex].classList.remove("active");

        currentIndex = (currentIndex + 1) % images.length;
        bgImages[currentIndex].classList.add("active");
    }, 5000); // Ganti gambar setiap 5 detik
});
