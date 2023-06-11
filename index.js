const slidesContainer = document.querySelector("#carousel");
const slide = document.querySelector(".carousel-item");
const prevButton = document.querySelector(".prev-icon");
const nextButton = document.querySelector(".next-icon");
var activeItem;

// if (window.innerWidth < 768) {
//     window.addEventListener("load", () => {
//         slidesContainer.style.position = "absolute";
//         slidesContainer.style.left = "-518px";
//     });
// } else if (window.innerWidth < 1100) {
//     window.addEventListener("load", () => {
//         slidesContainer.style.position = "absolute";
//         slidesContainer.style.left = "-1026px";
//     });
// } else {
//     window.addEventListener("load", () => {
//         slidesContainer.style.position = "absolute";
//         slidesContainer.style.left = "-690px";
//     });
// }

var positionLeft = (slidesContainer.offsetWidth - window.innerWidth) / 2;

window.addEventListener("load", () => {
    slidesContainer.style.left = "-" + positionLeft + "px";
});

prevButton.addEventListener("click", () => {
    moveCarousel("prev");
});

nextButton.addEventListener("click", () => {
  moveCarousel("next");
});

function moveCarousel(direction) {
    activeItem = document.querySelector(".carousel-item.active");
    
    if (direction === "prev") {
        var prevItem = activeItem.previousElementSibling;
        if (prevItem) {
            activeItem.classList.remove("active");  
            prevItem.classList.add("active");
            if (window.innerWidth < 768) {
                slidesContainer.style.left = parseInt(slidesContainer.style.left) - 285 + "px";
            } else {
                slidesContainer.style.left = parseInt(slidesContainer.style.left) - 570 + "px";
            }
        }
    } else if (direction === "next") {
        var nextItem = activeItem.nextElementSibling;
        if (nextItem) {
            activeItem.classList.remove("active");
            nextItem.classList.add("active");
            if (window.innerWidth < 768) {
                slidesContainer.style.left = parseInt(slidesContainer.style.left) + 285 + "px";
            } else {
                slidesContainer.style.left = parseInt(slidesContainer.style.left) + 570 + "px";
            }
        }
    }
}