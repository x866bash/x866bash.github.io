document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const enterBtn = document.getElementById("enter-btn");

    // Saat tombol ditekan, popup menghilang
    enterBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Smooth Scroll untuk navigasi
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
