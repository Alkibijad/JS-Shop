function addToCart(cart, checkCart, selectedOption, sectionID, self) {
  //   if (sectionID !== "") {

  let selectedProduct = self.parentElement.parentElement.id;

  //   }

  let cartIndex = null;
  let isInTheCart = cart.findIndex((el) => {
    return el.title === selectedOption[selectedProduct].title;
  });

  if (isInTheCart !== -1) {
    cart[isInTheCart].count += 1;
  } else {
      // spread operation on the first argument makes the copy, on the second and further on it makes new properties
    cart.push({ ...selectedOption[selectedProduct], count: 1 }); //push object
  }

  console.log(cart);
  checkCart();
}
