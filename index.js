// stop video if user has reduced motion settings
const vid = document.getElementById("backgroundVideo");
if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
}

// display card on hover
// const portfolioWrapper = document.querySelector(".portfolio-wrapper");
// const sevenTitle = document.querySelector(".title-wrapper");
// sevenTitle.addEventListener("click", (e) => {
//     e.preventDefault();
//     portfolioWrapper.
// })