const productsControllerInstance = new productsController(0);

function addProductCard(product) {
    const container = document.getElementById("contenedor");
    const cardProduct = document.createElement("div");
    cardProduct.classList.add("col-lg-6", "menu-item", "filter-cans");

    cardProduct.innerHTML = `
<img src="${product.picture}" class="menu-img" alt="">
<div class="menu-content">
  <a>${product.name_product}</a><span>${product.price}</span>
</div>
<div class="menu-ingredients">
  <h4>${product.description}</h4>
</div>
<div>
  <i class="menu-ingredients"></i>
  <i class="bi bi-plus-circle"></i>
  <i class="bi bi-dash-circle"></i>
</div>
`;
    container.appendChild(cardProduct);
}


function loadStorageSampleData() {
    if (!localStorage.getItem("products")) {
        const sampleProducts = [

            {
                "name_product": "prueba",
                "price": "1500",
                "description": "descripcion",
                "picture": "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg"
            },
            {
                "name_product": "prueba2",
                "price": "150022",
                "description": "descripcion222",
                "picture": "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg"

            }];

        localStorage.setItem("products", JSON.stringify(sampleProducts));

    }
}

function loadCardsListFromProductsController() {
    for (let i = 0, size = productsControllerInstance.products.length; i < size; i++) {
        const product = productsControllerInstance.products[i];
        addProductCard(product)
    }
}


loadStorageSampleData();
productsControllerInstance.loadProductsFromLocalStorage();
loadCardsListFromProductsController();