
AOS.init();

let lastScroll = 0;
const scrollHeader = document.querySelector(".scroll-header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        scrollHeader.classList.add("show");
    } else {
        scrollHeader.classList.remove("show");
    }

    if (currentScroll <= 0) {
        scrollHeader.style.backgroundColor = "#1c1e2c";
    } else {
        scrollHeader.style.backgroundColor = "#1c1e2c";
    }

    lastScroll = currentScroll;
});










