let lightThemeButton = document.querySelector(".theme-button-light");
let darkThemeButton = document.querySelector(".theme-button-dark");
let sansSerifButton = document.querySelector(".font-button-sans-serif");
let serifButton = document.querySelector(".font-button-serif");

lightThemeButton.onclick = function () {
    lightThemeButton.classList.add("active");
    darkThemeButton.classList.remove("active");
    document.body.classList.remove("dark");
};
  
darkThemeButton.onclick = function () {
    darkThemeButton.classList.add("active");
    lightThemeButton.classList.remove("active");
    document.body.classList.add("dark");
};

sansSerifButton.onclick = function () {
    sansSerifButton.classList.add("active");
    serifButton.classList.remove("active");
    document.body.classList.remove("serif");
};
  
serifButton.onclick = function () {
    serifButton.classList.add("active");
    sansSerifButton.classList.remove("active");
    document.body.classList.add("serif");
};