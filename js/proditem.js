const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const prodId = params.get("id");

const loader = document.querySelector(".loader-container");

const url = `https://runder.no/rainydays-cms/wp-json/wc/store/products/${prodId}`;

async function getProduct() {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  singleJacket(data);
}
getProduct();

function singleJacket(data) {
  loader.classList.add("hidden");
  return (document.querySelector(".single-jacket-item").innerHTML = `
  <section class="grid-center">
  <img
    class="singlejacket-image img-prop"
    src="${data.images[0].src}"
    alt="${data.name}"
  />
</section>
<!--Col 2-->
<section class="flex-col-ver gap-2">
  <h2 class="heading-uppercase-l main_green-dark-color">${data.name}</h2>
  <h3>${data.prices.price} ${data.prices.currency_code}</h3>
  <p>
    ${data.description}
  </p>
  <ul>
    <li>Suitable for a range of different weather types</li>
    <li>Comfortable</li>
    <li>Water-resistant</li>
  </ul>
  
  <section class="flex-start gap-1">
    <article>
      <h3 class="heading-uppercase-m main_green-dark-color">Colors:</h3>
      <select class="select-field" name="jacket-color">
      <option value="">Select Color</option>
      <option value="black">Black</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="yellow">Yellow</option>
      </select>
    </article>
    <article>
      <h3 class="heading-uppercase-m main_green-dark-color">Size:</h3>
      <form>
      <select class="select-field" name="jacket-color">
      <option value="">Size</option>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
      <option value="xlarge">X-Large</option>
      </select>
      </form>
    </article>
    
  </section>
  <a href="/addtocart.html" class="btn-addtocart">Add to Cart</a>
</section>

    `);
}
