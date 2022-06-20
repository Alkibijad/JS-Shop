function webShop(data) {
  let ul = document.querySelector(".navbar-list");
  let categories = [];
  let catItems = [];
  console.log(data);

  getCategories();
  function getCategories() {
    data.forEach((cat) => {
      if (!categories.includes(cat.category)) {
        categories.push(cat.category);
      }
    });
    categories.length ? createNavbar() : null;
  }

  function createNavbar() {
    for (let i = 0; i < categories.length; i++) {
      let li = document.createElement("li");
      li.className = "navbar-item";
      li.innerHTML = categories[i];
      ul.appendChild(li);
    }
    selectCat();
  }

  function selectCat() {
    let btnCat = document.querySelectorAll(".navbar-item");

    btnCat.forEach((btn) => {
      btn.addEventListener("click", function () {
        selectCatItems(this.innerHTML);
      });
    });
  }

  function selectCatItems(cat) {
    catItems = data.filter((item) => item.category === cat);
    displayCatItems();
  }
  function displayCatItems() {
    let shopItem = document.querySelector(".shop-items");
    let text = "";
    catItems.forEach((item) => {
      text += `<div class="item-container">
               
                 <div class="image-container"><img src="${item.image}" alt=""></div>

                 <p>Descriptions: ${item.description}</p>

                    <div class="rate">
                      <p>Rate: ${item.rating.rate}</p>
                      <p>Count: ${item.rating.count}</p>
                    </div>
               
            </div>`
    });
    shopItem.innerHTML = text
  }
}
