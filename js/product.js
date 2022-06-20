const productImages = document.querySelectorAll('.product-images img');
const productImageSlide = document.querySelector('.image-slider');

let activeImageSlide = 0;

productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    })
})


// toggle size button

const sizeBtns = document.querySelectorAll('.size-radio-btn')
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
    item.addEventListener('click', () =>{
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
    })
})


//add to cart btn

const cartBtns = document.querySelectorAll('.btn')
let checkBtn = 0;

cartBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        cartBtns[checkBtn].classList.remove('cart-btn');
        item.classList.add('cart-btn');
        checkBtn = i;
    })
})