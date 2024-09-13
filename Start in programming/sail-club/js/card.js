let gridButton = document.querySelector(".card-view-button-grid");
let listButton = document.querySelector(".card-view-button-list");
let cardsList = document.querySelector(".cards");

gridButton.onclick = function () {
  cardsList.classList.remove("list");
  gridButton.classList.add("active");
  listButton.classList.remove("active");
};

listButton.onclick = function () {
  cardsList.classList.add("list");
  listButton.classList.add("active");
  gridButton.classList.remove("active");
};