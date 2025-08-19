const products = [
  { name: "Motor Sport X1", price: "Rp 25.000.000", category: "motor", img: "assets/1.jpg" },
  { name: "Motor Bebek ZR", price: "Rp 15.000.000", category: "motor", img: "assets/2.jpg" },
  { name: "Motor Listrik Eco", price: "Rp 18.500.000", category: "motor", img: "assets/3.png" },
  { name: "Kaos Keren", price: "Rp 150.000", category: "pakaian", img: "assets/4.jpeg" },
  { name: "Jaket Hoodie", price: "Rp 250.000", category: "pakaian", img: "assets/5.jpg" },
  { name: "Celana Jeans", price: "Rp 300.000", category: "pakaian", img: "assets/6.jpeg" },
  { name: "Topi Trucker", price: "Rp 75.000", category: "aksesoris", img: "assets/7.webp" },
  { name: "Kacamata Stylish", price: "Rp 120.000", category: "aksesoris", img: "assets/8.jpg" },
  { name: "Jam Tangan Sport", price: "Rp 500.000", category: "aksesoris", img: "assets/9.jpeg" },
  { name: "HP Android Pro", price: "Rp 3.500.000", category: "elektronik", img: "assets/10.jpeg" },
  { name: "Laptop Gaming", price: "Rp 12.000.000", category: "elektronik", img: "assets/11.jpeg" },
  { name: "Headset Bluetooth", price: "Rp 450.000", category: "elektronik", img: "assets/12.jpg" },
  { name: "Kamera DSLR", price: "Rp 7.500.000", category: "elektronik", img: "assets/13.webp" },
  { name: "Speaker Portable", price: "Rp 800.000", category: "elektronik", img: "assets/14.jpeg" },
  { name: "Smartwatch Z", price: "Rp 2.000.000", category: "elektronik", img: "assets/15.jpg" }
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const filterKategori = document.getElementById("filterKategori");

function renderProducts(filterText = "", filterCat = "all") {
  productList.innerHTML = "";
  products
    .filter(p => 
      (p.name.toLowerCase().includes(filterText.toLowerCase())) &&
      (filterCat === "all" || p.category === filterCat)
    )
    .forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <div class="product-info">
          <div class="product-name">${p.name}</div>
          <div class="product-price">${p.price}</div>
        </div>
      `;
      productList.appendChild(card);
    });
}

// Event listeners
searchInput.addEventListener("input", () => {
  renderProducts(searchInput.value, filterKategori.value);
});
filterKategori.addEventListener("change", () => {
  renderProducts(searchInput.value, filterKategori.value);
});

// Initial render
renderProducts();

