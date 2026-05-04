// ==============================
// Scroll fade-up animation
// ==============================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));


// ==============================
// Image modal / clickable images
// ==============================

// Get elements safely
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close-modal");

// Get ALL clickable images (hero + screenshots)
const clickableImages = document.querySelectorAll(".clickable-screenshot");

// Make sure elements exist before adding events
if (imageModal && modalImage && closeModal) {

  clickableImages.forEach(img => {
    img.addEventListener("click", () => {
      modalImage.src = img.src;
      modalImage.alt = img.alt || "Screenshot";
      imageModal.classList.add("active");
    });
  });

  // Close using X button
  closeModal.addEventListener("click", () => {
    imageModal.classList.remove("active");
  });

  // Close when clicking outside image
  imageModal.addEventListener("click", (event) => {
    if (event.target === imageModal) {
      imageModal.classList.remove("active");
    }
  });

  // Close with ESC key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      imageModal.classList.remove("active");
    }
  });

}