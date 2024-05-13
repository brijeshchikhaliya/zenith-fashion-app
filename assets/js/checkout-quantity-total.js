document.addEventListener("DOMContentLoaded", function () {
  const minusBtn = document.querySelector(".qty-minus");
  const plusBtn = document.querySelector(".qty-plus");
  const qtyDisplay = document.querySelector(".product-qty");
  const totalDisplay = document.querySelector(".total-value");

  let quantity = 1;
  let price = 85.0;

  // Function to update total value
  function updateTotal() {
    totalDisplay.textContent = "$" + (quantity * price).toFixed(2);
  }

  // Event listener for minus button
  minusBtn.addEventListener("click", function () {
    if (quantity > 1) {
      quantity--;
      qtyDisplay.textContent = quantity;
      updateTotal();
    }
  });

  // Event listener for plus button
  plusBtn.addEventListener("click", function () {
    quantity++;
    qtyDisplay.textContent = quantity;
    updateTotal();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const minusBtn = document.querySelector(".qty-minus-icon");
  const plusBtn = document.querySelector(".qty-plus-icon");
  const qtyDisplay = document.querySelector(".product-quantity");
  const totalDisplay = document.querySelector(".total");

  let quantity = 1;
  let price = 85.0;

  function updateTotal() {
    totalDisplay.textContent = "$" + (quantity * price).toFixed(2);
  }

  minusBtn.addEventListener("click", function () {
    if (quantity > 1) {
      quantity--;
      qtyDisplay.textContent = quantity;
      updateTotal();
    }
  });

  plusBtn.addEventListener("click", function () {
    quantity++;
    qtyDisplay.textContent = quantity;
    updateTotal();
  });
});
