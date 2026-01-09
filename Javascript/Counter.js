document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter-number");

    if (!counters.length) {
        console.warn("No counters found");
        return;
    }

    const animateCounter = (counter) => {
        const target = Number(counter.dataset.target);
        let count = 0;
        const increment = Math.max(1, Math.ceil(target / 80));

        const update = () => {
            count += increment;
            if (count >= target) {
                counter.textContent = target + "%";
                return;
            }
            counter.textContent = count + "%";
            requestAnimationFrame(update);
        };

        update();
    };

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    obs.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.3,        // 🔑 lower threshold
            rootMargin: "0px 0px -50px 0px"
        }
    );

    counters.forEach(counter => observer.observe(counter));
});
