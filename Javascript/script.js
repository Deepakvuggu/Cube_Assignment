// // Simple Scroll Effect for Navbar
// window.addEventListener('scroll', () => {
//   const nav = document.querySelector('.navbar');
//   if (window.scrollY > 50) {
//     nav.style.background = 'rgba(255, 255, 255, 0.9)';
//     nav.style.backdropFilter = 'blur(10px)';
//   } else {
//     nav.style.background = 'transparent';
//   }
// });

// // Hover animation for the button
// const mainBtn = document.querySelector('.btn-large');
// mainBtn.addEventListener('mouseenter', () => {
//   mainBtn.style.boxShadow = '0 10px 20px rgba(5, 66, 44, 0.3)';
// });
// mainBtn.addEventListener('mouseleave', () => {
//   mainBtn.style.boxShadow = 'none';
// });

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
  const header = item.querySelector(".accordion-header");
  const icon = item.querySelector(".accordion-icon");

  header.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Close all accordions
    accordionItems.forEach(i => {
      i.classList.remove("active");
      i.querySelector(".accordion-icon").textContent = "+";
    });

    // Toggle clicked accordion
    if (!isActive) {
      item.classList.add("active");
      icon.textContent = "−";
    }
  });
});


