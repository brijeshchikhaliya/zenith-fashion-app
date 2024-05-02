document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".pagination a");
  const productRows = document.querySelectorAll(
    ".mens-product-list-section .osr-row"
  );

  links.forEach((link, index) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      links.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      // Hide all product rows
      productRows.forEach((row) => (row.style.display = "none"));

      // Calculate which rows to show based on the index of the clicked pagination link
      const startIndex = index * 2; // Assuming each pagination link corresponds to 2 rows
      const endIndex = startIndex + 1;

      // Special cases for the third and fourth pagination buttons
      if (index === 2) {
        const thirdStartIndex = 4; // Row index for the start of the third set
        const thirdEndIndex = 5; // Row index for the end of the third set
        for (let i = thirdStartIndex; i <= thirdEndIndex; i++) {
          productRows[i].style.display = "flex"; // Show the third set of rows
        }
      } else if (index === 3) {
        const fourthStartIndex = 6; // Row index for the start of the fourth set
        const fourthEndIndex = 7; // Row index for the end of the fourth set
        for (let i = fourthStartIndex; i <= fourthEndIndex; i++) {
          productRows[i].style.display = "flex"; // Show the fourth set of rows
        }
      } else {
        // Show the rows within the calculated range
        for (let i = startIndex; i <= endIndex; i++) {
          if (productRows[i]) {
            productRows[i].style.display = "flex"; // Show the rows within the calculated range
          }
        }
      }
    });
  });
});
