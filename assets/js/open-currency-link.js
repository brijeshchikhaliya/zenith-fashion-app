function opensubmenu(subMenuIdName) {
  let submenu = document.querySelector("#" + subMenuIdName);
  if (submenu.style.display === "none" || submenu.style.display === "") {
    closeDropdowns();
    submenu.style.display = "block";
  } else {
    submenu.style.display = "none";
  }
  // Prevent the event from bubbling up

  function closeDropdowns() {
    let allDropdowns = document.querySelectorAll(".submenu");

    allDropdowns.forEach((dropdown) => {
      dropdown.style.display = "none";
    });
  }
}

// for filters submenu selection
document.addEventListener("DOMContentLoaded", function () {
  const velueSelectionBoxes = document.querySelectorAll(".velue-selection-box");

  velueSelectionBoxes.forEach((box) => {
    box.addEventListener("click", function () {
      const parent = this.parentElement;

      // Deactivate all other selection boxes
      velueSelectionBoxes.forEach((otherBox) => {
        if (otherBox !== this) {
          otherBox.parentElement.classList.remove("activating");
          otherBox.setAttribute("aria-checked", "false");
        }
      });

      // Toggle activation of clicked selection box
      parent.classList.toggle("activating");
      const ariaChecked =
        this.getAttribute("aria-checked") === "true" ? "false" : "true";
      this.setAttribute("aria-checked", ariaChecked);
    });
  });
});
