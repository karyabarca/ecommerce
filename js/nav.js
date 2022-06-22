const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
            <img src="img/LogoHipnosiaSVG.svg" alt="" class="brand-logo">

            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" id="search-item" placeholder="search brand, product" onkeyup="search()">
                    <button class="search-btn">search</button>
                </div>
                <a href="#">
                    <img src="https://freesvg.org/img/abstract-user-flat-1.png" alt="">
                </a>
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Linearicons_cart.svg/1024px-Linearicons_cart.svg.png" alt="">
                </a>
            </div>
        </div>

        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Home</a></li>
            <li class="link-item"><a href="#" class="link">Women</a></li>
            <li class="link-item"><a href="#" class="link">Men</a></li>
            <li class="link-item"><a href="#" class="link">Kids</a></li>
            <li class="link-item"><a href="#" class="link">Accesories</a></li>
        </ul>
    `;
}

createNav ();