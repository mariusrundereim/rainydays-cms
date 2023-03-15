const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const prodId = params.get("id");

const url = `https://runder.no/rainydays-cms/wp-json/wc/store/products/${prodId}`;



async function getProduct() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    singleJacket(data);
  
   
  }
  getProduct();

  function singleJacket(data){
    return (document.querySelector(".single-jacket-item").innerHTML = `
    <h2>${data.name}</h2>


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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias,
          magni quidem ex reprehenderit est porro sit cupiditate, iure animi
          sunt quibusdam doloribus recusandae qui. Animi sunt provident quam.
        </p>
        <ul>
          <li>Suitable for a range of different weather types</li>
          <li>Comfortable</li>
          <li>Water-resistant</li>
        </ul>
        <!--Colors-->
        <article>
          <header>
            <h3 class="heading-uppercase-m main_green-dark-color">Colors:</h3>
          </header>
          <article class="color-container">
            <div class="color-1-tag color-box"></div>
            <div class="color-2-tag color-box"></div>
            <div class="color-3-tag color-box"></div>
            <div class="color-4-tag color-box"></div>
          </article>
        </article>
        <!--Sizes-->
        <section>
          <header>
            <h3 class="heading-uppercase-m main_green-dark-color">Size:</h3>
          </header>
          <label for="product-sizes"></label>
          <input list="product--types" name="product-size" />

          <datalist id="product--types">
            <option value="X-Small">12 pcs. Available</option>
            <option value="Small">33 pcs. Available</option>
            <option value="Medium">36 pcs. Available</option>
            <option value="Large">76 pcs. Available</option>
            <option value="X-Large">16 pcs. Available</option>
            <option value="XX-Large">36 pcs. Available</option>
          </datalist>
        </section>
        <a href="/addtocart.html" class="btn-addtocart">Add to Cart</a>
      </section>

    `)
  }