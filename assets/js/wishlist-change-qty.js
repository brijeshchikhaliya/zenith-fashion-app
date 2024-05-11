function updateQuantity(action, rowIndex) {
  const quantityElement = document.getElementById(`quantity-${rowIndex}`);
  let currentQuantity = parseInt(quantityElement.innerText);

  if (action === "plus") {
    currentQuantity++;
  } else if (action === "minus" && currentQuantity > 1) {
    currentQuantity--;
  }

  quantityElement.innerText = currentQuantity;

  // Calculate and update the total for this row
  const pricePerUnit = 85.0; // Assuming price per unit is $85.00
  const totalElement = document.getElementById(`total-${rowIndex}`);
  const total = currentQuantity * pricePerUnit;
  totalElement.innerText = "$" + total.toFixed(2); // Format total to two decimal places
}
