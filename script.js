document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-box");

    links.forEach(box => {
        box.addEventListener("click", function (event) {
            event.preventDefault();
            const link = this.querySelector(".nav-link");
            const url = link.getAttribute("href");

            // Efek Ripple
            const ripple = document.createElement("span");
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
            ripple.classList.add("ripple");

            this.appendChild(ripple);

            // Hapus elemen ripple setelah animasi selesai
            setTimeout(() => ripple.remove(), 600);

            // Efek Fade-Out Sebelum Memuat Halaman Baru
            document.getElementById("content").classList.add("fade-out");

            setTimeout(() => {
                // Ambil konten halaman tanpa reload
                fetch(url)
                    .then(response => response.text())
                    .then(data => {
                        document.getElementById("content").innerHTML = data;

                        // Efek Fade-In Setelah Halaman Baru Dimuat
                        document.getElementById("content").classList.remove("fade-out");
                        document.getElementById("content").classList.add("fade-in");
                        setTimeout(() => document.getElementById("content").classList.remove("fade-in"), 500);
                    })
                    .catch(error => console.error("Error:", error));
            }, 300);
        });
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
});
