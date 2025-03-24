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
});
