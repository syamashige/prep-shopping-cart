window.onload = function () {

	console.log('window.onload ...');

var cartList = {
head: "Shopping Cart",
list:	
[
  { "name": "Lusicious Jello Mix", "image": "/prep-shopping-cart/images/cart.svg", "description": ["Very Elegant", " Trending item", " Come in Purple"], "price": 80.65, "quantity": 0 },
  { "name": "Tarnished Standing Desk", "image": "/prep-shopping-cart/images/cart.svg", "description": ["Modular", " Works for both Tall and Loud People", " Smells like Productivity"], "price": 1654.99, "quantity": 0},
  { "name": "Hand-made Hand Grenades", "image": "/prep-shopping-cart/images/cart.svg", "description": ["Such gift!", " Much boom!", " Very safe for kids"], "price": 10.44, "quantity": 0},
  { "name": "Pan-fried Cookie Dough", "image": "/prep-shopping-cart/images/cart.svg", "description": ["Chocolate", " Family-size", " Hot Mess"], "price": 16.99, "quantity": 0 },
  { "name": "Fancy Dress Hanger", "image": "/prep-shopping-cart/images/cart.svg", "description": ["Keep organized", " On Sale"], "price": 67.32, "quantity": 0 },
  { "name": "Snarky Britsh Mustache 3-Pack", "image": "/prep-shopping-cart/images/cart.svg", "description": ["Sharing is caring!", " Hugs not drugs", " As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99, "quantity": 0 },
]
};

var img = document.createElement('img');
img.id = 'titleimage';
img.src = "images/cart.svg";
var src = document.getElementsByTagName('body')[0].appendChild(img);

var shoppingCartContainer = document.getElementsByTagName('body')[0];

var shoppingCart = document.createElement('h1');
shoppingCart.id='title';
shoppingCart.innerHTML = cartList.head;
shoppingCartContainer.appendChild(shoppingCart);


function createQuantityOptions (quantityElement) {
	for (var i = 0; i <= 10; i++) {
		var dropdownElem = document.createElement('option');
		dropdownElem.value = i;
		dropdownElem.innerHTML = i;
		quantityElement.appendChild(dropdownElem);
	}
}

// function createUpdatePriceHandler (cartItem, quantityElement, priceElement) {
// 	return function () {
// 		updatePrice(cartItem, quantityElement, priceElement);
// 	};
// }

// function updatePrice (cartItem, quantityElement, priceElement) {
// 	var selectedQuantity = quantityElement.options[quantityElement.selectedIndex].value;
// 	console.log('Price is updated ', cartItem.name, selectedQuantity);
// 	priceElement.textContent = '$ ' + (cartItem.price * selectedQuantity);
// 	cartItem.quantity = selectedQuantity;
// }


// function createItemElement (cartItem) {
// 	var cartItemElem = document.createElement('div');

// 	// var labelElem = document.createElement('div');
// 	// labelElem.innerHTML = cartItem.name;
// 	// cartItemElem.appendChild(labelElem);

// 	var priceElement = document.createElement('div');
// 	updatePrice(cartItem, quantityElement, priceElement);
// 	cartItemElem.appendChild(priceElement);

// 	quantityElement.addEventListener('change', createUpdatePriceHandler(cartItem, quantityElement, priceElement));

// 	return cartItemElem;

// }

// var cartItem = cartList[i]; 

// var cartItemElem = createItemElement(cartItem);
// shoppingCartContainer.appendChild(cartItemElem);

function creatUpdatePriceHandler(cartItem, quantityElement, priceElement) {
	return function () {
		updatePrice(cartItem, quantityElement, priceElement);
	};
}

function updatePrice (cartItem, quantityElement, priceElement) {
	var selectedQuantity = quantityElement.options[quantityElement.selectedIndex].value;
	priceElement.textContent = '$ ' + (cartItem.price * selectedQuantity);
	cartItem.quantity = selectedQuantity;
}

var cartItem = cartList[i];

var priceElement = document.createElement('div');
updatePrice(cartItem, quantityElement, priceElement);
cartItemElem.appendChild(priceElement);

quantityElement.addEventListener('change', createUpdatePriceHandler(cartItem, quantityElement, priceElement));


for (var i = 0; i < cartList.list.length; i++) {

	console.log(cartList.list[i]);
	console.log(cartList.list[i].name);
	console.log(cartList.list[i].description);
	console.log(cartList.list[i].price);

	var itemName = cartList.list[i].name;
	var itemImage = cartList.list[i].image;
	var cartDescription = cartList.list[i].description;
	var totalPrice = cartList.list[i].price;

	var listImage = document.createElement('img');
	listImage.className = 'listimage';
	listImage.src = itemImage;
	shoppingCartContainer.appendChild(listImage);


	var listName = document.createElement('h3');
	listName.className = 'name';
	listName.innerHTML = itemName;
	shoppingCartContainer.appendChild(listName);


	var listDescription = document.createElement('div');
	listDescription.className = 'description';
	listDescription.innerHTML = cartDescription;
	shoppingCartContainer.appendChild(listDescription);


	var quantityElement = document.createElement('select');
	createQuantityOptions(quantityElement);
	shoppingCartContainer.appendChild(quantityElement);


	var listPrice = document.createElement('div');
	listPrice.className = 'price';
	listPrice.innerHTML = '$ ' + totalPrice;
	shoppingCartContainer.appendChild(listPrice);

	var cartItemElem = createItemElement(cartItem);
	shoppingCartContainer.appendChild(cartItemElem);

}
	

var subTotal = document.createElement('h2');
subTotal.id = 'subtotal';
subTotal.innerHTML = 'Subtotal';
shoppingCartContainer.appendChild(subTotal);

function updateSubtotal () {
	var subtotal = 0;
	for (var i = 0; i < cartList.length; i++) {
		subtotal += cartList[i].price * cartList[i].quantity;
	}
	totalElement.textContent = '$ ' + subtotal; 
}

//If the function updateSubtotal doesn't have a parameter - then  you no longer need the createUpdateSubtotalHandler function
// function createUpdateSubtotalHandler(totalElement) {
// 	return function() {
// 		updateSubtotal(totalElement);
// 	};
// }


var totalElement = document.createElement('div');
updateSubtotal(totalElement);
shoppingCartContainer.appendChild(totalElement);

var buttonElem  = document.createElement('button');
buttonElem.textContent = 'Update Price';
buttonElem.addEventListener('click', updateSubtotal); //if you put a parameter into the updateSubtotal function, then you would instead be calling createUpdateSubtotalHandler(totalElement)
shoppingCartContainer.appendChild(buttonElem);


};






