// Declaración de variables
const productCardTemplate = document.querySelector(`#product-template`);
const productContainer = document.querySelector(`#product-list`);

//Creador de tarjetas de productos disponibles.

    fetch("../json/products.json")
    .then((resp) => resp.json())
    .then((data) => {

        data.forEach(producto =>{
            const card = productCardTemplate.content.cloneNode(true).children[0]
            console.log(card)

            //Declaración de variables
            const titulo = card.querySelector(`.product-title`);
            const precio = card.querySelector(`.price`);
            const imagen = card.querySelector(`.product-thumb`);
            const alt = card.querySelector(`.product-thumb`);
            const wishlist = card.querySelector(`.card-btn`);
            const link = card.querySelector(`.product-link`);

            titulo.textContent = producto.titulo
            precio.textContent = `$${producto.precio}`
            imagen.setAttribute("src",producto.imagen)
            alt.setAttribute("alt",producto.titulo)
            wishlist.textContent = `add to wishlist`
            link.setAttribute("href",producto.link)
            productContainer.append(card)
        })

    })