const productCard = document.querySelector(".prod");

const url = "https://runder.no/rainydays-cms/wp-json/wc/store/products/";

async function getProducts() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  numberOfJackets(data);

  renderAllJackets(data);

  data.forEach((jacket) => {
    productCard.innerHTML += `
    <a class="prod-card" href="single-jacket.html?id=${jacket.id}">
    <div class="prod-item">
    <h2 class="heading-uppercase-l main_green-dark-color">${jacket.name}</h2>
    <p class="text-uppercase-sm main_green-dark-color">${jacket.categories[0].name}</p>
    <img class="product-image" src="${jacket.images[0].src}">
    <div>
    <p class="text-price main_green-dark-color">${jacket.prices.price} ${jacket.prices.currency_code}</p>
    </div>
    </div>
    </a>
    `;
  });
}
getProducts();

function renderAllJackets(data) {
  console.log(data);
}

function numberOfJackets(data) {
  const listjacket = document.querySelector(".list-all-jackets");
  listjacket.innerHTML += `${data.length} `;
}
