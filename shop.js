function shop(data) {
  let navbarBtns = document.querySelectorAll(".list-item");
  let shopSection = document.querySelectorAll(".shop_section");
  let shopingCart = document.querySelector(".shoping_cart");
  let shopAdds = document.querySelector(".section_shop_adds");
  let sectionID = "";
  let selectedOption = [];
  let displaySection = "";
  let cart = [];
  shopingCartToggle(checkCart);

  function checkCart() {
    if (cart.length == 0) {
      shopingCart.innerHTML = "nema itema";
    } else if (cart.length > 0) {
      let text = `<div class="items_in_cart">`;

      for (let i = 0; i < cart.length; i++) {
        text += `<div class="item_in_cart">
                  <div class="image">
                  <img src="${cart[i].img}" alt="">
                </div>
                <div class="details">
                  <p>${cart[i].title}</p>
                  <p>Price: ${cart[i].price}</p>
                                  <div class="number_of_items">
                                    <p>-</p>
                                    <p id="same_item_counter">${cart[i].count}</p>
                                    <p>+</p>
                                  </div>
                    </div>
                </div>`;
      }

      text += `</div>`;
      shopingCart.innerHTML = text;
    }
  }

  for (let i = 0; i < navbarBtns.length; i++) {
    navbarBtns[i].addEventListener("click", showSection);
  }

  function showSection() {
    for (let i = 0; i < shopSection.length; i++) {
      shopSection[i].style.display = "none";
    }
    // section id is custom attribute of shop section men, woman, kids
    sectionID = this.getAttribute("data-name");
    displaySection = document.querySelector(`#${sectionID}`);
    displaySection.style.display = "block";
    shopAdds.style.display = "none";
    getSelectedOptions();
  }

  function getSelectedOptions() {
    //  using section id, selectu all item from data where sectionID
    selectedOption = data.filter((item) => item.source === sectionID);
    displayProducts();
  }

  function displayProducts() {
    //
    let currentShop = document.querySelector(`#${sectionID}`);
    let text = `<div class="selected-products">`;
    for (let i = 0; i < selectedOption.length; i++) {
      text += `<div class="product" id=${i} data-source=${selectedOption[i].source}>
                  <img src=${selectedOption[i].img} alt="">
                  <p>${selectedOption[i].title}</p>
                  <button class="btnBlack">  <a href="${selectedOption[i].url}">See More</a></button>
                  <div class="addToCart">
                        <p>${selectedOption[i].price}</p>
                        <button class="btnAdd btnBlack">Add To Card</button>
                  </div>
      </div>`;
    }
    text += `</div>`;
    currentShop.innerHTML = text;

    //select all add to cart button on this section
    let currentSection = document.getElementById(sectionID);
    let sectionBTNS = currentSection.querySelectorAll(".btnAdd");

    for (let i = 0; i < sectionBTNS.length; i++) {
      sectionBTNS[i].addEventListener("click", function () {
        addToCart(cart, checkCart, selectedOption, this);
        console.log(this);
      });
    }

    //last bracket
  }
}
