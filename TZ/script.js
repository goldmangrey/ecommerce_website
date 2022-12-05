let http = new XMLHttpRequest();

http.open('get', 'Data/products.json', true)

http.send();

http.onload = function() {

    if (this.readyState == 4 && this.status == 200) {

        let products = JSON.parse(this.responseText);
        let output = "";

        for (let item of products) {
            output += `
            <div class="product">

                    <img src="${item.image}" class="product-img" alt="${item.image}">

                    <p class="title">${item.title}</p>

                    <p class="description">${item.description} </p>

                    <p class="price">
                    <span>${item.price}</span>. 
                    </p>

                    <p class="cart add-cart"> Add to Basket<i class='bx bx-basket' id="cart-icon"></i></p>
            </div>
            `;
        }

        document.querySelector(".products").innerHTML = output;

    }
}