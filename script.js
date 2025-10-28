// Code for adding interactivity (e.g., adding to the cart, showing product details, etc.)
// Example: Alert when the "Add to cart" button is clicked

document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Produit ajouté au panier!');
    });
});
