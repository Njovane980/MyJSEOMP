let checkOut = JSON.parse(localStorage.getItem("cart")) || [];
//Function to retrieve items from local storage
function displayCheckoutItems() {
  let checkoutContainer = document.getElementById("checkoutContainer");
  checkoutContainer.innerHTML = "";
  let data = Object.groupBy(checkOut, (item) => item.name);
  // console.log(data);
  for (let key in data) {
    // console.log(key, data[key]);
    checkoutContainer.innerHTML += `
            <tr>
                <td>${data[key][0].name}</td>
                <td>${data[key].length}</td>
                <td>R${data[key][0].price}</td>
                <td>R${eval(
                  `${data[key][0].price} * ${data[key].length}`
                )}  </td>
            </tr>
        `;
  }
}
//Initial display of checkout items
displayCheckoutItems();
