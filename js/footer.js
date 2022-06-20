const createFooter = () =>{
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    
    <div class="footer-content">
    <img src="img/LogoHipnosiaSVGBlanco.svg" alt="" class="logo">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">men</li>
            <li><a href="" class="footer-link">t-shirts</a></li>
            <li><a href="" class="footer-link">jeans</a></li>
            <li><a href="" class="footer-link">shoes</a></li>
            <li><a href="" class="footer-link">shorts</a></li>
            <li><a href="" class="footer-link">caps</a></li>
            <li><a href="" class="footer-link">sweatshirts</a></li>
        </ul>

        <ul class="category">
            <li class="category-title">women</li>
            <li><a href="" class="footer-link">t-shirts</a></li>
            <li><a href="" class="footer-link">jeans</a></li>
            <li><a href="" class="footer-link">shoes</a></li>
            <li><a href="" class="footer-link">shorts</a></li>
            <li><a href="" class="footer-link">caps</a></li>
            <li><a href="" class="footer-link">sweatshirts</a></li>
        </ul>
    </div>



</div>
<p class="footer-title">About</p>
<p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi natus possimus quasi quisquam
    accusamus a similique eius. Dolore nesciunt ipsa sint repellat omnis vitae repudiandae rem velit, odio
    illo tempore.
    Rem, qui. Voluptates itaque ipsum distinctio quis, incidunt quibusdam minima debitis ducimus! Maiores
    dolores deleniti ipsa. Id maxime rem a iusto amet odio saepe assumenda deleniti vero, ab hic porro.</p>
    <p class="info">Support - help@hipnosia.com</p>
    <p class="info">Telephone - 984 135 60 69</p>

    <div class="footer-social-container">
        <div>
            <a href="" class="social-link">terms & services</a>
            <a href="" class="social-link">privacy page</a>
        </div>

        <div>
            <a href="" class="social-link">instagram</a>
            <a href="" class="social-link">facebook</a>
        </div>
    </div>

    <p class="footer-credit">Clothing, best apparels online store</p>
    `;
}
createFooter();