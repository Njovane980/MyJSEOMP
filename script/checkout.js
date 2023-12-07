//Function to retrieve items from local storage
function displayCheckoutItems() {
  let checkoutContainer = document.getElementById("checkoutContainer");
  checkoutContainer.innerHTML = "";

  let checkOut = JSON.parse(localStorage.getItem("cart")) || [];

  checkOut.forEach((item) => {
    let checkoutItem = document.createElement("div");
    checkoutItem.innerHTML = `${item.name || 1} - Quantity: ${
      item.quantity || 1
    } - Price: R${item.price + (item.quantity || 1)}`;
    checkoutContainer.appendChild(checkoutItem);
  });
}
//Initial display of checkout items
displayCheckoutItems();
