document.addEventListener("DOMContentLoaded", function () {
  // Get references to the cart drawer and its modal box
  var cartDrawer = document.getElementById("cart-drawer");
  var modalBox = document.querySelector(".cart-drawer-modal-box");

  // Get reference to the "ADD TO BAG" button
  var addToBagBtn = document.getElementById("btn-add-to-bag");
  var closeButton = document.getElementById("drawer-close-btn");

  // Function to open the cart drawer
  function openCartDrawer() {
    cartDrawer.classList.add("open"); // Add the 'open' class to display the modal
  }

  // Function to close the cart drawer with sliding animation from right to left
  function closeCartDrawer() {
    modalBox.style.animation = "slideOutToRight 0.5s forwards"; // Apply slide-out animation
    setTimeout(function () {
      cartDrawer.classList.remove("open"); // Remove the 'open' class to hide the modal
      modalBox.style.animation = ""; // Reset animation property
    }, 500); // Wait for the animation to complete (0.5 seconds)
  }

  // Event listener for the "ADD TO BAG" button
  addToBagBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    openCartDrawer();
  });

  // Event listener for clicks anywhere on the document
  document.addEventListener("click", function (event) {
    // Check if the clicked element is the "ADD TO BAG" button
    if (event.target === addToBagBtn) {
      openCartDrawer(); // Open the cart drawer if "ADD TO BAG" button is clicked
    } else {
      // Check if the clicked element is outside of the modal box
      if (!modalBox.contains(event.target)) {
        closeCartDrawer(); // Close the cart drawer if clicked outside of modal box
      }
    }
  });

  closeButton.addEventListener("click", function (event) {
    event.stopPropagation();
    closeCartDrawer();
  });
});
