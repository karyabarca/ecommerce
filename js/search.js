//Habilitación de barra buscadora
    const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".product-card")
    const pname = storeitems.getElementsByTagName("h2")

    //Bucle para que se descarten los productos que no coinciden.
    for(var i=0;i < pname.length; i++){
        let match = product[i].getElementsByTagName("h2")[0];

        if(match){
            let textValue = match.textContent || match.innerHTML;

            (textValue.toUpperCase().indexOf(searchbox) > -1)
            ?product[i].style.display = ""
            :product[i].style.display = "none";
            }
        }
    }