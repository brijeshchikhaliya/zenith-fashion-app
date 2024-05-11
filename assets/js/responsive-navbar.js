document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".toggle-button");
  const menuLinks = document.getElementById("menu-links");

  // Function to handle media query changes
  const handleMediaQuery = function (mq) {
    if (mq.matches) {
      // Hide the menu links below 1025px
      menuLinks.style.display = "none";
    } else {
      // Show the menu links above 1024px
      menuLinks.style.display = "flex";
    }
  };

  // Add event listener for media query changes
  const mediaQuery = window.matchMedia("(max-width: 1024px)");
  handleMediaQuery(mediaQuery); // Initial check
  mediaQuery.addListener(handleMediaQuery); // Listen for changes

  // Add click event listener to the toggle button
  toggleButton.addEventListener("click", function () {
    // Toggle the active class on the menu links
    menuLinks.classList.toggle("active");

    // If menu-links is now active, set its display property to flex
    if (menuLinks.classList.contains("active")) {
      menuLinks.style.display = "flex";
    } else {
      menuLinks.style.display = "none";
    }
  });
});
