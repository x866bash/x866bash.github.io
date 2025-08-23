document.addEventListener("DOMContentLoaded", function () {
      const popup = document.getElementById("popup");
      const enterBtn = document.getElementById("enter-btn");
      const navbar = document.getElementById("navbar");
      const content = document.getElementById("content");

      // Tombol Masuk
      enterBtn.addEventListener("click", function () {
        popup.classList.add("hidden");
        setTimeout(() => {
          popup.style.display = "none";
          navbar.style.display = "block";
          content.classList.add("show");
        }, 500);
      });

      // Slideshow
      const slides = document.querySelectorAll(".slide");
      let currentIndex = 0;
      function changeSlide() {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("active");
      }
      setInterval(changeSlide, 5000);

      // Fade-in saat halaman baru dimuat
      window.addEventListener("pageshow", () => {
        document.body.classList.remove("fade-out");
      });

      // Fade-out saat klik link
      document.querySelectorAll("a.nav-link").forEach(link => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const url = this.getAttribute("href");
          document.body.classList.add("fade-out");
          setTimeout(() => {
            window.location.href = url;
          }, 500);
        });
      });
    });

