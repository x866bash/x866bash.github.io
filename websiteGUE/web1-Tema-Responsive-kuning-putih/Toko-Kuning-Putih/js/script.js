document.getElementById('searchInput').addEventListener('input', function() {
  const filter = this.value.toLowerCase();
  const products = document.querySelectorAll('.product-card');
  products.forEach(p => {
    if (p.textContent.toLowerCase().includes(filter)) {
      p.style.display = 'block';
    } else {
      p.style.display = 'none';
    }
  });
});