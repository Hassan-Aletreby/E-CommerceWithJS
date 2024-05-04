var btnMenu = document.querySelector(".btn__menu");
var nav = document.querySelector(".nav__bottom");
var btnSearch = document.querySelector(".btn__search");
var search = document.querySelector(".search");
btnMenu.onclick = function () {
  nav.classList.toggle("disapper");
}
btnSearch.onclick = function () {
  search.classList.toggle("disapper");
}
// ________________________________________
var toggle = document.querySelector("#toggleBtn");
var body = document.querySelector(".html");

toggle.addEventListener("change", function() {
  body.classList.toggle("dark");
});
// ________________________________________
var searchInput = document.querySelector('.search__box');
var elementsToSearch = document.getElementsByClassName('grid-item');
searchInput.addEventListener('input', function() {
    var searchText = searchInput.value.toLowerCase(); 
    Array.from(elementsToSearch).forEach(function(element) {
        var elementName = element.querySelector('h4 a').textContent.toLowerCase();
        if (elementName.includes(searchText)) {
          element.style.backgroundColor = 'lightblue';
          element.style.display = 'block';
      } else {
          element.style.display = 'none';
      }
    });
});
// ________________________________________
var productsData = [
  {
    images: ["./img/product-1-1.jpg","../img/product-3-2.jpg"],
    type: "Fresh Fruit",
    name: "Seeds of Change Organic Red Rice",
    rating: 1,
    brand: "NestFood",
    price: 28.85,
    discount: 13
  },
  {
    images: ["./img/product-2-1.jpg","./img/product-2-2.jpg"],
    type: "Bread and Juice",
    name: "All Natural Style Chicken Meatballs",
    rating: 3,
    brand: "NestFood",
    price: 52.85,
    discount: 6
  },
  {
    images: ["./img/product-3-1.jpg","./img/product-3-2.jpg"],
    type: "Baking material",
    name: "Angie’s Sweet & Salty Kettle Corn",
    rating: 1,
    brand: "Country Crock",
    price: 48.85,
    discount: 8,
    sale: "New"
  }
,
{
  images: ["./img/product-4-1.jpg","./img/product-4-2.jpg"],
  type: "Baking material",
  name: "Foster Farms Takeout Crispy Classic",
  rating: 0,
  brand: "Country Crock",
  price: 17.85,
  discount: 10
}
,
{
  images: ["./img/product-5-1.jpg","./img/product-5-2.jpg"],
  type: "Fresh Fruit",
  name: "Blue Almonds Lightly Salted Vegetables",
  rating: 1,
  brand: "Country Crock",
  price: 23.85,
  discount: 10
}
,
{
  images: ["./img/product-6-1.jpg","./img/product-6-2.jpg"],
  type: "Fresh Fruit",
  name: "Chobani Complete Vanilla Greek Yogurt",
  rating: 0,
  brand: "Country Crock",
  price: 54.85,
  discount: 2
}
,
{
  images: ["./img/product-7-1.jpg","./img/product-7-2.jpg"],
  type: "Baking material",
  name: "Canada Dry Ginger Ale – 2 L Bottle",
  rating: 0,
  brand: "Hambger Hel",
  price: 32.85,
  discount: 3
}
,
{
  images: ["./img/product-8-1.jpg","./img/product-8-2.jpg"],
  type: "Clothing & beauty",
  name: "Encore Seafoods Stuffed Alaskan",
  rating: 0,
  brand: "Hambger Hel",
  price: 35.85,
  discount: 6
}
,
{
  images: ["./img/product-9-1.jpg","./img/product-9-2.jpg"],
  type: "Fresh Seafood",
  name: "Gorton’s Beer Battered Fish Fillets",
  rating: 0,
  brand: "Hambger Hel",
  price: 23.85,
  discount: 8
}
,
{
  images: ["./img/product-10-1.jpg","./img/product-10-2.jpg"],
  type: "Baking material",
  name: "Haagen Caramel Cone Ice Cream Boxed",
  rating: 0,
  brand: "Hambger Hel",
  price: 22.85,
  discount: 8
}
,
{
  images: ["./img/product-11-1-300x300.jpg","./img/product-11-2.jpg"],
  type: "Baking material",
  name: "Dried fruit: apricots, figs, prunes",
  rating: 1,
  brand: "USA Noodle Soup",
  price: 56.00,
  discount: 27
}
,
{
  images: ["./img/product-12-1-300x300.jpg","./img/product-12-2.jpg"],
  type: "Baking material",
  name: "Extra virgin olive oil, canola oil, nonfat",
  rating: 0,
  brand: "Totino's Pizza",
  price: 58.00,
  discount: 4
}
,
{
  images: ["./img/product-13-1-300x300.jpg","./img/product-13-2.jpg"],
  type: "Fresh Fruit",
  name: "Frozen fruit strawberry, berries",
  rating: 0,
  brand: "Maruchan Ramen",
  price: 78.00,
  discount: 21
}
,
{
  images: ["./img/product-16-1-300x300.jpg","./img/product-16-2.jpg"],
  type: "Baking material",
  name: "Frozen vegetables broccoli, spinach",
  rating: 1,
  brand: "Totino's Pizza",
  price: 711.00,
  discount: 6
}
,
{
  images: ["./img/product-20-3-min-300x300.jpg","./img/product-20-2-min-300x300.jpg"],
  type: "Bread and Juice",
  name: "Pre-portioned, low-fat ice cream yogurt",
  rating: 0,
  brand: "Maruchan Ramen",
  price: 79.00,
  discount: 21
}
];

var productsContainer = document.getElementById("grid-container");

productsData.forEach(function(product) {
  var gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");

  var card = document.createElement("div");
  card.classList.add("card");

  var imgDiv = document.createElement("div");
  imgDiv.classList.add("card__img");

  var img1 = document.createElement("div");
  img1.classList.add("card__test", "card__test--active");
  var img1Src = document.createElement("img");
  img1Src.src = product.images[0]; 
  img1Src.alt = "";
  img1.appendChild(img1Src);
  
  imgDiv.appendChild(img1);
  
  var img2 = document.createElement("div");
  img2.classList.add("card__test");
  var img2Src = document.createElement("img");
  img2Src.src = product.images[1];
  img2Src.alt = "";
  img2.appendChild(img2Src);
  
  imgDiv.appendChild(img2);
  
  var interactivityDiv = document.createElement("div");
  interactivityDiv.classList.add("img__hov");
  

  var ul = document.createElement("ul");

  var liView = document.createElement("li");
  liView.classList.add("veiw");
  var linkView = document.createElement("a");
  linkView.href = "#";
  var iconView = document.createElement("i");
  iconView.classList.add("fa-solid", "fa-eye");
  linkView.appendChild(iconView);
  liView.appendChild(linkView);
  ul.appendChild(liView);

  var liCompare = document.createElement("li");
  liCompare.classList.add("compare");
  var linkCompare = document.createElement("a");
  linkCompare.href = "#";
  var iconCompare = document.createElement("i");
  iconCompare.classList.add("fa-solid", "fa-code-compare");
  linkCompare.appendChild(iconCompare);
  liCompare.appendChild(linkCompare);
  ul.appendChild(liCompare);

  var liWishlist = document.createElement("li");
  liWishlist.classList.add("wishlist");
  var linkWishlist = document.createElement("a");
  linkWishlist.href = "#";
  var iconWishlist = document.createElement("i");
  iconWishlist.classList.add("fa-regular", "fa-heart");
  linkWishlist.appendChild(iconWishlist);
  liWishlist.appendChild(linkWishlist);
  ul.appendChild(liWishlist);

  interactivityDiv.appendChild(ul);

  imgDiv.appendChild(interactivityDiv);

  card.appendChild(imgDiv);

  var type = document.createElement("h6");
  type.classList.add("product__type");
  var typeLink = document.createElement("a");
  typeLink.href = "#";
  typeLink.textContent = product.type;
  type.appendChild(typeLink);

  card.appendChild(type);

  var productName = document.createElement("h4");
  var productNameLink = document.createElement("a");
  productNameLink.href = "#";
  productNameLink.textContent = product.name;
  productName.appendChild(productNameLink);

  card.appendChild(productName);

  var rate = document.createElement("div");
  rate.classList.add("rate");

  for (var i = 0; i < product.rating; i++) {
    var star = document.createElement("i");
    star.classList.add("fa-solid", "fa-star", "gold");
    rate.appendChild(star);
  }

  for (var i = product.rating; i < 5; i++) {
    var star = document.createElement("i");
    star.classList.add("fa-regular", "fa-star");
    rate.appendChild(star);
  }

  rate.appendChild(document.createTextNode(product.rating));

  card.appendChild(rate);

  var brand = document.createElement("p");
  brand.innerHTML = "By <span>" + product.brand + "</span>";

  card.appendChild(brand);

  var price = document.createElement("div");
  price.classList.add("price");

  var priceTag = document.createElement("p");
  var priceIcon = document.createElement("i");
  priceIcon.classList.add("fa-solid", "fa-dollar-sign");
  priceTag.appendChild(priceIcon);
  priceTag.innerHTML += product.price.toFixed(2);

  var discountTag = document.createElement("del");
  var discountIcon = document.createElement("i");
  discountIcon.classList.add("fa-solid", "fa-dollar-sign");
  discountTag.appendChild(discountIcon);
  discountTag.innerHTML += " " + (product.price * (1 + product.discount / 100)).toFixed(2);

  price.appendChild(priceTag);
  price.appendChild(discountTag);

  card.appendChild(price);

  var discountDiv = document.createElement("div");
  discountDiv.classList.add("descound");
  discountDiv.innerHTML = "<p>" + product.discount + "%</p>";

  card.appendChild(discountDiv);

  var cartButton = document.createElement("button");
  cartButton.classList.add("cart");
  cartButton.innerHTML = "<i class='fa-solid fa-cart-shopping'></i>Add";

  card.appendChild(cartButton);

  gridItem.appendChild(card);

  productsContainer.appendChild(gridItem);
});
