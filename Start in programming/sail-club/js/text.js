let blogArticles = document.querySelectorAll(".blog-article");

for (let blogArticle of blogArticles) {
  let moreButton = blogArticle.querySelector(".more");
  moreButton.onclick = function (evt) {
    blogArticle.classList.remove("short");
  };
};