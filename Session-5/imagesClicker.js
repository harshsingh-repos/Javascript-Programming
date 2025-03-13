document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Loaded");

  // 2D Array of Image Categories
  const images = [
    ["cat1.jpg", "cat2.jpg", "cat3.jpg"],
    ["dog1.jpg", "dog2.jpg", "dog3.jpg"],
    ["star1.jpg", "star2.jpg", "star3.jpg"],
  ];

  // Function to Get a Random Image
  function getRandomImage() {
    const category = Math.floor(Math.random() * images.length);
    const randomIndex = Math.floor(Math.random() * images[category].length);
    return images[category][randomIndex];
  }

  // Function to Animate and Change Image
  function animate(event) {
    let targetImage = event.target;

    // Force Reflow (Fix for animation restart)
    targetImage.classList.remove("spin");
    void targetImage.offsetWidth; // This forces a reflow

    // Apply Animation
    targetImage.classList.add("spin");

    // Change Image After Animation Ends
    setTimeout(() => {
      targetImage.src = getRandomImage();
    }, 500); // Wait for animation to finish before changing image
  }

  // Apply Event Listeners to Images
  document.querySelectorAll(".clickableImg").forEach((img) => {
    img.addEventListener("click", animate);
  });
});
