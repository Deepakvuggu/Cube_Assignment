async function loadSection(id, file) {
    const container = document.getElementById(id);
    if (!container) return;

    const response = await fetch(`../sections/${file}`);
    container.innerHTML = await response.text();
}

loadSection("navbar", "navbar.html");
loadSection("hero", "hero.html");
loadSection("product", "product-showcase.html");
loadSection("collection", "collection.html");
loadSection("counter", "counter.html");
loadSection("comparison", "comparison.html");
loadSection("footer", "footer.html");
