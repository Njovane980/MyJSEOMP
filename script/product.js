let products = [
  {
    name: "Coffee, Sugar and Almond Oil Face Scrub",
    price: 80,
    image: "https://i.postimg.cc/cCmGj2CW/images-5.jpg",
  },
  {
    name: "Coffee, Sugar and Castor Oil Face Scrub",
    price: 80,
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
    name: "Aloe Vera Toner",
    price: 140,
    image: "https://i.postimg.cc/s2G1Mk3K/images-7.jpg",
  },
  {
    name: "Aloe Vera and Lemon Toner",
    price: 130,
    image: "https://i.postimg.cc/JzfM2GWc/images-8.jpg",
  },
];

let checkOut = JSON.parse(localStorage.getItem("cart")) || [];

// Function to display products
function displayProducts(productsArray) {
  let cardContainer = document.getElementById("productContainer");
  cardContainer.innerHTML = "";
  if (products.length) {
    productsArray.forEach((product, index) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">R${product.price}</p>
                </div>
                <div class="card-footer">
                  <button class="body-secondary" id="btn" onclick='addToCart(${JSON.stringify(
                    product
                  )})'>Add to cart</button>
                </div>
              </div>
        `;

      cardContainer.appendChild(card);
    });
  } else {
    cardContainer.innerHTML = "Item not found";
  }
}

// Initial display of products
displayProducts(products);

// Function to search for the products in my array
function searchProducts() {
  let searchInput = document.getElementById("searchInput").value.toLowerCase();
  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchInput)
  );
  if (searchInput.trim() === "") {
//if the search input is empty display all the products
displayProducts(products);
  } else {
    let filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchInput)
    );
displayProducts(filteredProducts);
  }
}

// Function to sort products in the array
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

function addToCart(item) {
  if (item) {
    checkOut.push(item);
    localStorage.setItem("cart", JSON.stringify(checkOut));
  }
}

function addToCart(item) {
  if (item) {
    let checkOut = JSON.parse(localStorage.getItem("cart")) || [];
    checkOut.push(item);
    localStorage.setItem("cart", JSON.stringify(checkOut));
  }
}
