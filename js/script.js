const url = "https://localhost/rainydays-cms/wp-json/wc/store/products";

async function getProducts() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

getProducts();

function men() {
  document.querySelector(".category-men").classList.toggle("display-block");
}

function women() {
  document.querySelector(".category-women").classList.toggle("display-block");
}

function MobileBar() {
  document
    .querySelector(".header-mobile-pagelinks")
    .classList.toggle("display-block");
}
