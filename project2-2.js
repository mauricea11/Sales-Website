// Have wand sparkle when hovered over
var test = document.getElementById('test');
test.innerHTML = 'test';

var lightup = document.querySelector('.magicwandhead');

lightup.addEventListener('mouseover', function(event){
  lightup.style.color = '#4C0070';
})

var addcart = document.querySelector('.cart')

//Change product prices to match outside value
var addcart = document.querySelectorAll('.cart');
var price = document.querySelectorAll('.itemprice');
var matchpricemodal = document.getElementById('modalprice');

addcart[0].addEventListener('click', function(event){
    if (price[0].innerText == '$15') {
        matchpricemodal.innerText = price[0].innerText;
    }
 })
addcart[1].addEventListener('click', function(event){
  if (price[1].innerText == '$10') {
    matchpricemodal.innerText = price[1].innerText;
  }
 })
addcart[2].addEventListener('click', function(event){
  if (price[2].innerText == '$15') {
   matchpricemodal.innerText = price[2].innerText;
  }
})
addcart[3].addEventListener('click', function(event){
  if (price[3].innerText == '$30') {
    matchpricemodal.innerText = price[3].innerText;
  }
 })
addcart[4].addEventListener('click', function(event){
  if (price[4].innerText == '$20') {
   matchpricemodal.innerText = price[4].innerText;
 }
})
addcart[5].addEventListener('click', function(event){
  if (price[5].innerText == '$15') {
    matchpricemodal.innerText = price[5].innerText;
  }
 })
