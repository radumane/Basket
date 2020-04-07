//loading function

if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready);
}
else {
	ready();
}

function ready(){
	
	//remove item
	var removeBasketItem = document.getElementsByClassName('to-remove');
 	for (var i = 0; i < removeBasketItem.length; i++) {
	 var button = removeBasketItem[i];
	 button.addEventListener('click' , removeItem);	

	 }
	 
	 
	 //input item
	var quantityInput = document.getElementsByClassName('aliniere-input');	 
	for (var i = 0; i < quantityInput.length; i++){
	var input =quantityInput[i];
	 input.addEventListener('change', quantityChanged);
 	}
 


	 //add item to basket 

	var addToBasket = document.getElementsByClassName('to-buy')
	for ( var i = 0; i < addToBasket.length; i++ ) {
  	var buton = addToBasket[i]
  	buton.addEventListener( 'click',clickPentruBasket)
	}

}


function clickPentruBasket(event){
	buton = event.target;
	var randProdus = buton.parentElement.parentElement;
	// gresela la imgProdus, trebuia sa pui clasa corect conform cu html
	var imgProdus = randProdus.getElementsByClassName('insidecard-img')[0].getElementsByClassName('zoom-out')[0].src;
	var titluProdus = randProdus.getElementsByClassName('titlu-item')[0].innerText;
	// gresela la pretProdus, trebuia sa pui clasa corect conform cu html
	var pretProdus = randProdus.getElementsByClassName('insidecard-price')[0].getElementsByClassName('pret-item')[0].innerText;
	
    adaugaInBasket(imgProdus, titluProdus, pretProdus)
    // updateTotalBasket() lipsea de aici
    updateTotalBasket()
}

function adaugaInBasket(imgProdus, titluProdus, pretProdus){
	var randBasket = document.createElement('div');
	randBasket.classList.add('lista-prod');
	var basketCont = document.getElementsByClassName('basket-container')[0];
	// className gresit
	var prodInBasket = basketCont.getElementsByClassName('lista-prod');
	for (var i=0; i < prodInBasket.length; i++) {
	// trebuia sa pui clasa corect conform cu html
	if (prodInBasket[i].getElementsByClassName('cart-item-name')[0].innerText == titluProdus ){
	alert('This Item is allready to Basket')
	return;
		}
	}
	// multe greseli in continutul basketContent
	var basketContent = `
		<img class="cart-img" src="${imgProdus} "Alt="Product name"></img>
		<div class="cart-item-name">
			<span class="titlu-item-cos">${titluProdus}</span>
		</div>
		<input class="aliniere-input"  style= width:35px  border-radius:1px;  type="number" value="1" >
		<div class="cart-price">
			<span class="pretul">${pretProdus}</span>
		</div>
		<button class="to-remove" type="button">Remove</button>
		`;
	randBasket.innerHTML = basketContent;
	basketCont.append(randBasket);
	randBasket.getElementsByClassName('to-remove')[0].addEventListener('click', removeItem);
	randBasket.getElementsByClassName('aliniere-input')[0].addEventListener('change', quantityChanged);



}
//remove item from basket

function removeItem(){
	var buttonExecute = event.target
		buttonExecute.parentElement.remove()
		updateTotalBasket()
	
}



//quantity input

function quantityChanged(event){
	var input = event.target
	if (isNaN(input.value)|| input.value<=0){
		input.value = 1
	}
		updateTotalBasket()
	
}

//total

function updateTotalBasket() {
    var cartContainer = document.getElementsByClassName('basket-container')[0]
	var	cartRow = cartContainer.getElementsByClassName('lista-prod')
	    total = 0
	for (var i = 0; i < cartRow.length; i++) {
	// greseala la cartRow, ai pus 2 variabile cu acelasi nume
    var AltcartRow = cartRow[i]
	var priceElement = AltcartRow.getElementsByClassName('pretul')[0]
	var itemQuantity = AltcartRow.getElementsByClassName('aliniere-input')[0]
	var price = parseFloat(priceElement.innerText.replace('£', '')  )
	var quantity = itemQuantity.value;
	    total = total + ( price * quantity)
	
		}
		
		total = Math.round(total*100)/100
	document.getElementsByClassName('total-prc')[0].innerText = total + '£'
	

	}


//clear basket 

//save basket

//load basket

//
