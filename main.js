const navList = document.querySelector(".mobile-navlist");
const navToggle = document.querySelector(".toggle-menu");

navToggle.addEventListener("click", () => {
    const visibility = navList.getAttribute("data-visible");

    if (visibility === "false") {
        navList.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        navList.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});

const toggleDarkBtn = document.querySelector(".theme-toggle");
const titleTag = document.querySelector("h1");
const firstParagraphTag = document.querySelector(".first-p");
const alaradoLogo = document.querySelector("header > img");
const moonElement = document.querySelector(".moon");
const moonImg = document.querySelector(".moon > img");
const sunElement = document.querySelector(".sun");
const sunImg = document.querySelector(".sun > img");
const navElements = document.querySelectorAll(".item");

toggleDarkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    titleTag.classList.toggle("dark-theme");
    firstParagraphTag.classList.toggle("dark-theme");
    alaradoLogo.classList.toggle("dark-theme");

    for (let navElement of navElements) {
        if (document.body.className == "dark-theme") {
            navElement.addEventListener("mouseover", () => {
                navElement.style.color = "#f2f9fe";
            });

            navElement.addEventListener("mouseout", () => {
                navElement.style.color = "#909193";
            });
        } else {
            navElement.addEventListener("mouseover", () => {
                navElement.style.color = "#111729";
            });

            navElement.addEventListener("mouseout", () => {
                navElement.style.color = "#909193";
            });
        }
    }
});
