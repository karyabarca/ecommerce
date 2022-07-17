// Declaración de variables
const productImages = document.querySelectorAll('.product-images img');
const productImageSlide = document.querySelector('.image-slider');
const sizeBtns = document.querySelectorAll('.size-radio-btn')
const cartBtns = document.querySelectorAll('.btn')
let checkedBtnCart = 0;
let checkedBtnSize = 0;
let activeImageSlide = 0;

//Activador de imagen que se muestra cuando das click.
productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    })
})

// Activador de seleccionador de talla de prenda.
sizeBtns.forEach((item, i) => {
    item.addEventListener('click', () =>{
        sizeBtns[checkedBtnSize].classList.remove('check');
        item.classList.add('check');
        checkedBtnSize = i;
    })
})


// Activador de seleccionador de los botones "agregar al carrito" y "agregar a wishlist"
cartBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        cartBtns[checkedBtnCart].classList.remove('cart-btn');
        item.classList.add('cart-btn');
        checkedBtnCart = i;
    })
})