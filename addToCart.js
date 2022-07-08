function addToCart(cart, checkCart, selectedOption, self) {

  let selectedProduct = self.parentElement.parentElement.id




  let isInTheCart = cart.findIndex((el) => {
    return el.title === selectedOption[selectedProduct].title;
  });

  if (isInTheCart !== -1) {
    cart[isInTheCart].count += 1; // if isInThe cart is not -1 meand it exisist in Arrray then count +1 
  } else {
      // spread operation on the first argument makes the copy, on the second and further on it makes new properties
    cart.push({ ...selectedOption[selectedProduct], count: 1 }); //push object and add new property count
  }

  checkCart();
}


