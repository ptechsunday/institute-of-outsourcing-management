// Contact form popup
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("✅ Your message has been sent! We’ll get back to you soon.");
      form.reset();
    });
  }
});
// Contact form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("✅ Your message has been sent! We’ll get back to you soon.");
      form.reset();
    });
  }

  // Gallery lightbox
  const galleryImages = document.querySelectorAll(".gallery-grid img");
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      const lightbox = document.createElement("div");
      lightbox.className = "lightbox";
      lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
      document.body.appendChild(lightbox);
      lightbox.addEventListener("click", () => lightbox.remove());
    });
  });
});

