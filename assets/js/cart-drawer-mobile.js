document.addEventListener("DOMContentLoaded", function () {
  const addToBagBtn = document.getElementById("btn-add-to-bag");
  const cartDrawer = document.getElementById("cart-drawer");
  const closeBtn = document.getElementById("drawer-close-btn");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  addToBagBtn.addEventListener("click", function (event) {
    event.preventDefault();
    cartDrawer.classList.add("open");
    document.body.appendChild(overlay);
    setTimeout(() => {
      overlay.addEventListener("click", closeCartDrawer);
    }, 100);
  });

  closeBtn.addEventListener("click", closeCartDrawer);

  function closeCartDrawer() {
    cartDrawer.classList.remove("open");
    overlay.removeEventListener("click", closeCartDrawer);
    overlay.remove();
  }
});
