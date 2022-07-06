function shopingCartToggle(checkCart) { 
    let shopingCart = document.querySelector('.shop_cart');
    let shopingCartView = document.querySelector('.section_shoping_cart');
   

    shopingCart.addEventListener("click", function () { 
        shopingCartView.classList.toggle("active")
        checkCart()
        
    })
}