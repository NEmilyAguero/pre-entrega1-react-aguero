const hamburger = document.querySelector('.hamburger-menu'); 
const navMenu = document.querySelector('.nav-menu'); 

hamburger.addEventListener('click', () => { 
navMenu.classList.toggle('hide'); 
});

/*Cuando se hace click en el botón, muestra el submenu*/
function myFunction() {   
    //Añade una clase al elemento que tenga el id myDropdown
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  //Cierra el submenu si se clica fuera
  window.onclick = function(event){
    if(!event.target.matches('.drop-button')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0;  i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        //Busca dentro de drop-content los elementos con la clase show
        if (openDropdown.classList.contains('show')){
          //elimina la clase show de los elementos dentro de drop-content
          openDropdown.classList.remove('show');
        }
      }
    }
    }

    const cart = [];

    function agregarAlCarrito(productId) {
        // Add the selected product to the cart array
        cart.push(productId);
      
        // Update the cart count displayed in the button
        const cartButton = document.querySelector('#cart-button');
        cartButton.textContent = `(${cart.length})`;
      }

      function checkout() {
        // Create an empty string to store the cart contents
        let cartContents = "Cart Contents:\n";
      
        // Loop through the cart and display the product names
        for (const productId of cart) {
          const product = document.querySelector(`#Producto ${productId}`);
          cartContents += `${product.querySelector('h2').textContent}\n`;
        }
      
        // Show an alert with the cart contents
        alert(cartContents);
      }
      

  // Get references to the HTML elements
const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");


