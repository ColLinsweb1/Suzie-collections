// Header Section

const preHeader = document.querySelector(".pre-header");

const header = document.querySelector(".header");


window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        preHeader.style.opacity = "0";
        preHeader.style.transform = "translateY(-100%)";
        preHeader.style.transition = "all 0.5s ease";
        preHeader.style.pointerEvent = "none";

        header.style.top = "0";
        header.style.background = "rgba(255, 255, 255, 0.9)";
        header.style.backdropFilter = "blur(10px)";
        header.style.transition = "all 0.2s ease";
    } else {
        preHeader.style.opacity = "1";
        preHeader.style.transform = "translateY(0)";
        preHeader.style.pointerEvent = "auto";

        header.style.top = "30px";
        header.style.background = "rgb(255, 255, 255)";
        header.style.backdropFilter = "none";
    }
});



// Scroll To Top Button

const scrollTopBtn = document.getElementById("scroll-top-btn");


scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behaviour: 'smooth'
    })
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 3000) {
        scrollTopBtn.classList.add("visible");
    } else {
        scrollTopBtn.classList.remove("visible");
    }
})