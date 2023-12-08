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
//DOM Manipulation
function displayProducts() {
    let productTable = document.getElementById("productTable");
    let tbody = productTable.querySelector("tbody");
    tbody.innerHTML = "";

    products.forEach((product, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.name}</td>
            <td>R${product.price}</td>
            <td><img src="${product.image}" alt="${product.name}" style="max-width: 50px; max-height: 50px;"></td>
            <td>
                <button onclick="editProduct(${index})">Edit</button>
                <button onclick="deleteProduct(${index})">Delete</button>
                <button onclick="openModal(${index})">View Details</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}
function editProduct(index) {
   //editing the product
    let newName = prompt("Enter new name:", products[index].name);
    let newPrice = prompt("Enter new price:", products[index].price);
    let newImage = prompt("Enter new image URL:", products[index].image);

    if (newName && newPrice && newImage) {
        products[index] = {
            name: newName,
            price: parseFloat(newPrice),
            image: newImage,
        };
        displayProducts();
        updateProductPage();
    }
}

function deleteProduct(index) {
    // Implement the logic to delete the product at the specified index
    let confirmDelete = confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
        products.splice(index, 1);
        displayProducts();
        updateProductPage();
    }
}

function openModal(index) {
    //display product details
    let modal = document.getElementById("myModal");
    let productName = document.getElementById("productName");
    let productPrice = document.getElementById("productPrice");
    let productImage = document.getElementById("productImage");

    productName.textContent = "Name: " + products[index].name;
    productPrice.textContent = "Price: R" + products[index].price;
    productImage.src = products[index].image;

    modal.style.display = "block";
}

function closeModal() {
    //close the modal
    document.getElementById("myModal").style.display = "none";
}
function updateProductPage() {

displayProducts(products);
    console.log("Product page updated!");
}
// Initial display of products
displayProducts();