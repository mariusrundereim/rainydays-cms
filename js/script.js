const productCard = document.querySelector(".prod");

const url = "https://runder.no/rainydays-cms/wp-json/wc/store/products/";

async function getProducts() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  data.forEach((jacket) => {

    productCard.innerHTML += `
    <a  href="single-jacket.html?id=${jacket.id}">
    <div class="prod-item">
    <h2>${jacket.name}</h2>
    <img src="${jacket.images[0].src}">
    <div>
    <p>${jacket.prices.price} ${jacket.prices.currency_code}</p>
    </div>
    </div>
    </a>
    `

  });
}
getProducts();


/* Old functions */

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
