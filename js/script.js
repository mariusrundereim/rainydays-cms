const productCard = document.querySelector(".prod");

const url = "https://runder.no/rainydays-cms/wp-json/wc/store/products/";

async function getProducts() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  data.forEach((jacket) => {
    productCard.innerHTML += `
    <a class="prod-card" href="single-jacket.html?id=${jacket.id}">
    <div class="prod-item">
    <h2 class="heading-uppercase-l main_green-dark-color">${jacket.name}</h2>
    <img class="img" src="${jacket.images[0].src}">
    <div>
    <p class="text-price main_green-dark-color">${jacket.prices.price} ${jacket.prices.currency_code}</p>
    </div>
    </div>
    </a>
    `;
  });
}
getProducts();

