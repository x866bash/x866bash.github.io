import './style.css';

// Contoh interaksi
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("myBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("Tombol berhasil diklik!");
    });
  }
});
