/* ===============================
   PRODUCT IMAGE GALLERY SCRIPT
   =============================== */

document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.querySelector(".gallery-main img");
    const thumbs = document.querySelectorAll(".gallery-thumbs img");
    const dots = document.querySelectorAll(".gallery-dots .dot");
    const prevBtn = document.querySelector(".nav-arrow.left");
    const nextBtn = document.querySelector(".nav-arrow.right");

    if (!mainImage || thumbs.length === 0) return;

    let currentIndex = 0;
    const images = Array.from(thumbs).map(img => img.src);

    /* ===============================
       IMAGE TRANSITION HANDLER
       =============================== */
    function changeImage(index) {
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;

        mainImage.classList.add("fade-out");

        setTimeout(() => {
            mainImage.src = images[index];
            mainImage.classList.remove("fade-out");

            updateActiveStates(index);
            currentIndex = index;
        }, 180);
    }

    /* ===============================
       ACTIVE STATES
       =============================== */
    function updateActiveStates(index) {
        thumbs.forEach((thumb, i) => {
            thumb.classList.toggle("active", i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    /* ===============================
       THUMB CLICK
       =============================== */
    thumbs.forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
            if (index !== currentIndex) {
                changeImage(index);
            }
        });
    });

    /* ===============================
       DOT CLICK
       =============================== */
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            if (index !== currentIndex) {
                changeImage(index);
            }
        });
    });

    /* ===============================
       ARROW NAVIGATION
       =============================== */
    prevBtn?.addEventListener("click", () => {
        changeImage(currentIndex - 1);
    });

    nextBtn?.addEventListener("click", () => {
        changeImage(currentIndex + 1);
    });

    /* ===============================
       INITIAL STATE
       =============================== */
    updateActiveStates(currentIndex);
});
