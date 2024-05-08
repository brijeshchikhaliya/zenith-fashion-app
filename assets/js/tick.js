document.addEventListener("DOMContentLoaded", function () {
  var tick = document.getElementById("tick");

  // Function to move the tick with the mouse arrow
  function moveTick(event) {
    // Position the tick at the mouse cursor's position
    tick.style.left = event.pageX - 5 + "px"; // Adjust the position for the center
    tick.style.top = event.pageY - 5 + "px"; // Adjust the position for the center
  }

  // Add mousemove event listener to move the tick
  document.addEventListener("mousemove", moveTick);

  // Initially position the tick in the center of the window
  function positionTick() {
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;

    // Initially position the tick in the center of the window
    tick.style.left = centerX + "px";
    tick.style.top = centerY + "px";
  }

  // Position the tick initially
  positionTick();

  // Re-position the tick on window resize
  window.addEventListener("resize", positionTick);
});
