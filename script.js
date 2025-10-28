// Initialisation du panier depuis localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const panierCount = document.getElementById('panier-count');
const cartItems = document.getElementById('cart-items');

// Mettre à jour l'affichage du panier
function updateCart() {
    panierCount.textContent = cart.length;
    displayCart();
}

// Afficher les produits dans le panier
function displayCart() {
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Votre panier est vide.</p>';
    } else {
        cart.forEach(item => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `<p>${item.name} - ${item.price}€</p>`;
            cartItems.appendChild(productDiv);
        });
    }
}

// Ajouter un produit au panier
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        const id = product.dataset.id;
        const name = product.dataset.name;
        const price = product.dataset.price;

        const cartItem = { id, name, price };
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCart();
    });
});

// Initialiser l'affichage du panier
updateCart();
