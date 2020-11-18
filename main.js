const moreButton = document.querySelector(".info__secondary .moreButton");
const article = document.querySelector(".info__secondary__article");

moreButton.addEventListener("click", () => {
  //   moreButton.classList.toggle("clicked");
  article.classList.toggle("clamp");
});
