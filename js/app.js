const elLoader = document.querySelector(".loader");
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    elLoader.classList.add("loader-wrapper--none");
  }, 1500);
});
