let slideShow = document.querySelector(".slideShow p");

let promoText = ["Free Shipping + Returns", "Free Memebership"];
let opacity = 0;

let id = 0;
showPromoText(id);
function showPromoText(id) {
  slideShow.innerHTML = promoText[id];

  let loop = setInterval(function () {
    slideShow.style.opacity = opacity;
    if (opacity >= 1) {
      clearInterval(loop);
      hidePromoText(id);
    }
    opacity += 0.01;
  }, 50);
}

function hidePromoText(id) {
  slideShow.innerHTML = promoText[id];
  let loop = setInterval(function () {
    slideShow.style.opacity = opacity;
    if (opacity < 0) {
      clearInterval(loop);
      showPromoText(1);
    }
    opacity -= 0.01;
  }, 50);
}
