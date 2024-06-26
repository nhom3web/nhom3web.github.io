/***********************************************phancuadung********************** */
const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')
//console.log(adressbtn)
adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display="flex"
})
adressclose.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display="none"
})
/***********************************************phancuadat********************** */
DB_products.forEach(function(category) {
    let productHtml = `
        <h1>IGLASS</h1>
        <section>
            <div class="product-gallery-one-content-product">
    `;

    category.items.forEach(function(item) {
        productHtml += `
        <div class="product-gallery-one-content-product-item" id="${item.id}" >
          <img src="/tailieu/${item.image}" alt="${item.title}">
          <div class="product-gallery-one-content-product-item-text">
            <div>${item.title}</div>
            <div>${item.price} <sup>đ</sup>
            <div>
              <button>Thêm</button>
            </div>
            </div>
          </div>
        </div>
        `;
    });

    productHtml += `
            </div>
        </section>
    `;

    document.querySelector('#products').innerHTML += productHtml;

    document.querySelectorAll('.product-gallery-one-content-product-item').forEach(function(div) {
        div.addEventListener('click', function() {
          // redirect to product page
          window.location.href = `/tailieu/chitietsanpham/index.html?productId=${div.id}`;
        });
    });
});