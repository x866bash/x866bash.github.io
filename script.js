document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");
    const content = document.getElementById("content");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const url = this.getAttribute("href");

            // Ambil konten halaman tanpa reload
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    content.innerHTML = data;
                    content.classList.add("fade-in");
                    setTimeout(() => content.classList.remove("fade-in"), 500);
                })
                .catch(error => console.error("Error:", error));
        });
    });

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");
    const content = document.getElementById("content");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const url = this.getAttribute("href");

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
            content.classList.add("fade-out");

            setTimeout(() => {
                // Ambil konten halaman tanpa reload
                fetch(url)
                    .then(response => response.text())
                    .then(data => {
                        content.innerHTML = data;

                        // Efek Fade-In Setelah Halaman Baru Dimuat
                        content.classList.remove("fade-out");
                        content.classList.add("fade-in");
                        setTimeout(() => content.classList.remove("fade-in"), 500);
                    })
                    .catch(error => console.error("Error:", error));
            }, 300);
        });
    });
});
