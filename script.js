// Code for adding interactivity (e.g., adding to the cart, showing product details, etc.)
// Example: Alert when the "Add to cart" button is clicked

document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Produit ajouté au panier!');
    });
});
// Initialisation du panier à partir du localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Mettre à jour le compteur de produits dans le panier
function updateCartCount() {
    const panierCount = document.getElementById('panier-count');
    panierCount.textContent = cart.length;
}

// Afficher les produits dans le panier
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Votre panier est vide.</p>';
    } else {
        cart.forEach(item => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
                <p>${item.name} - ${item.price}€</p>
            `;
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

        updateCartCount();
        displayCart();
    });
});

// Affichage initial du panier
updateCartCount();
displayCart();
