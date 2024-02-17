class productsController {
    constructor(currentId = 0) {
        this.products = [];
        this.currentId = currentId;
    }

    addProduct(name_product, price, description, picture) {
        const newProduct = {
            id_product: this.currentId++,
            name_product: name_product,
            price: price,
            description: description,
            picture: picture
        };

        this.products.push(newProduct);
    }

    loadProductsFromLocalStorage() {
        let storageProducts = localStorage.getItem("products")
        if (storageProducts) {
            let parseProduct = JSON.parse(storageProducts);
            for (let i = 0, size = parseProduct.length; i < size; i++) {
                let product = parseProduct[i];
                this.products.push(product);
            }
        }
        console.log(this.products)
    }


}

