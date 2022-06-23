function shop(data) {
  let navbarBtns = document.querySelectorAll(".list-item");
  let shopSection = document.querySelectorAll(".shop_section");
  let id;
  let selectedOption = [];

  for (let i = 0; i < navbarBtns.length; i++) {
    navbarBtns[i].addEventListener("click", showSection);
  }

  function showSection() {
    for (let i = 0; i < shopSection.length; i++) {
      shopSection[i].style.display = "none";
    }

    id = this.getAttribute("data-name");
    let displaySection = document.querySelector(`#${id}`);
    displaySection.style.display = "block";
    getSelectedOptions();
  }

  function getSelectedOptions() {
    selectedOption = data.filter((item) => item.source === id);
    displayProducts();
  }

  function displayProducts() {
    let currentShop = document.querySelector(`#${id}`);
    let text = `<div class="selected-products">`;
    for (let i = 0; i < selectedOption.length; i++) {
      text += `<div class="product">
                    <img src=${selectedOption[i].img} alt="">
                    <p>${selectedOption[i].title}</p>
                    <button>  <a href="${selectedOption[i].url}">See More</a></button>
                        <div class="addToCart">
                            <p>${selectedOption[i].price}</p>
                            <button>Add To Card</button>
                        </div>
            </div>`;
    }
    text += `</div>`
    currentShop.innerHTML = text;

    //last bracket
  }
}
