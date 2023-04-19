const selectCategory = document.querySelector(".select-category");
const selectSport = document.querySelector(".select-sport");
const selectSize = document.querySelector(".select-size");
const selectPrize = document.querySelector(".select-prize");

selectCategory.addEventListener("change", () => {
  console.log(selectCategory.value);
});

selectSport.addEventListener("change", () => {
  console.log(selectSport.value);
});

selectSize.addEventListener("change", () => {
  console.log(selectSize.value);
});

selectPrize.addEventListener("change", () => {
  console.log(selectPrize.value);
});
