// Product array
let products = [
  {
    name: "Coffee, Sugar and Almond Oil Face Scrub",
    price: 70,
    image: "https://i.postimg.cc/cCmGj2CW/images-5.jpg",
  },
  {
    name: "Coffee, Sugar and Castor Oil Face Scrub",
    price: 70,
    image: "https://i.postimg.cc/G2t7PpTv/images-1.jpg",
  },
  {
    name: "Turmeric Soap",
    price: 60,
    image: "https://i.postimg.cc/bw6FZbsq/soap-1.jpg",
  },
  {
    name: "Olive Soap",
    price: 50,
    image: "https://i.postimg.cc/9Qqq9Hfz/soap-4.jpg",
  },
  {
    name: "Aloe Vera",
    price: 90,
    image: "https://i.postimg.cc/s2G1Mk3K/images-7.jpg",
  },
  {
    name: "Aloe Vera Toner",
    price: 90,
    image: "https://i.postimg.cc/JzfM2GWc/images-8.jpg",
  },
];

//   json
localStorage.setItem("products", JSON.stringify(products));

// Function to display products
function displayProducts(productsArray) {
  let cardContainer = document.querySelector(".row-cols-1");
  cardContainer.innerHTML = "";

  productsArray.forEach((product, index) => {
    console.log(product);
    let card = document.createElement("div");
    card.classList.add("col");
    card.innerHTML = `
        <div class="card h-100">
        <img src="${product.image}" class="card-img-top " style="height: 200px; width: 300px; object:cover" alt="...">
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text text-center">R${product.price}</p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
          </div>
        </div>
      `;

    cardContainer.appendChild(card);
  });
}

// Initial display of products
displayProducts(products);

// Function to search products
function searchProducts() {
  let searchInput = document.getElementById("searchInput").value.toLowerCase();
  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchInput)
  );
  displayProducts(filteredProducts);
}

// Function to sort products
function sortProducts() {
  let sortSelect = document.getElementById("sort");
  let selectedValue = sortSelect.value;

  let sortedProducts;

  if (selectedValue === "price_asc") {
    sortedProducts = products.slice().sort((a, b) => a.price - b.price);
  } else if (selectedValue === "price_desc") {
    sortedProducts = products.slice().sort((a, b) => b.price - a.price);
  }

  displayProducts(sortedProducts);
}
