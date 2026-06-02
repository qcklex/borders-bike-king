// SHOPPING CART FUNCTIONALITY
// This file manages the entire shopping cart system including:

// - Adding/removing items from cart
// - Displaying cart items and total price
// - Showing cart notifications
// - Persisting cart data using localStorage






// 1. DOM ELEMENT REFERENCES
// Get references to all cart-related HTML elements
const cartIcon = document.getElementById('cart');           // The shopping cart icon in the header
const cartModal = document.getElementById('cartModal');     // The modal/popup that displays cart contents
const closeCart = document.getElementById('closeCart');     // Button to close the cart modal
const cartCount = document.getElementById('cartCount');     // Badge showing number of items in cart
const cartTotal = document.getElementById('cartTotal');     // Element displaying the total price
const cartItems = document.getElementById('cartItems');     // Container for displaying individual cart items

// 2. INITIALIZE CART DATA
// Retrieve the cart from browser storage (localStorage) or start with an empty array
// localStorage.getItem('cart') returns a JSON string, so we parse it back into an array
// If nothing is stored, use an empty array [] as the default
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// 3. UPDATE CART UI
// This function refreshes the visual display of the cart to match the current cart data
function updateCartUI() {
    // Update the cart count badge to show how many items are in the cart
    cartCount.textContent = cart.length;
    
    // Clear the cart items container to prepare for fresh content
    cartItems.innerHTML = '';
    
    // Initialize total to 0, will accumulate prices of all items
    let total = 0;

    // Check if cart is empty
    if (cart.length === 0) {
        // Display a message when there are no items in the cart
        cartItems.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">Your cart is empty</p>';
    } else {
        // Loop through each item in the cart and create a visual element for it
        cart.forEach((item, index) => {
            // Add this item's price to the running total
            total += item.price;
            
            // Create a new div element to display this cart item
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            
            // Build the HTML for this item: name, price, and remove button
            // The remove button passes the item's index so we know which item to delete
            itemEl.innerHTML = `
                <div style="flex: 1;">
                    <strong>${item.name}</strong>
                </div>
                <div style="text-align: right;">
                    <span class="cart-price">£${item.price.toFixed(2)}</span>
                </div>
                <button onclick="removeFromCart(${index})" class="cart-remove">Remove</button>
            `;
            
            // Add this item element to the cart items container
            cartItems.appendChild(itemEl);
        });
    }
    
    // Update the total price display, formatted to 2 decimal places (for currency)
    cartTotal.textContent = total.toFixed(2);
}

// 4. REMOVE ITEM FROM CART
// This function deletes an item from the cart by its index (position)
window.removeFromCart = function(index) {
    // Remove the item at the specified index from the cart array
    // splice(index, 1) removes 1 item starting at 'index'
    cart.splice(index, 1);
    
    // Save the updated cart to browser storage so it persists even if user closes the browser
    // JSON.stringify converts the array into text format for storage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Refresh the cart display to show the updated list
    updateCartUI();
};

// 5. SHOW TOAST NOTIFICATION
// This function displays a temporary popup notification (toast) to give user feedback
// For example: "Added to cart!" confirmation message
window.showToast = function(message) {
    // Create a new div element to be the toast notification
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    
    // Set the text content of the notification
    toast.textContent = message;
    
    // Add the toast to the page body so it becomes visible
    document.body.appendChild(toast);

    // After 2.5 seconds, start the animation to hide the toast
    setTimeout(() => {
        // Apply the 'slideOut' animation for 0.3 seconds
        toast.style.animation = 'slideOut 0.3s ease-out forwards';
        
        // After the animation completes, remove the toast element from the page
        setTimeout(() => toast.remove(), 300);
    }, 2500);
};

// 6. ADD ITEM TO CART
// This function adds a product to the cart when user clicks "Add to Cart"
window.addToCart = function(name, price) {
    // Create a new item object with the product name and price
    // Push (add) it to the end of the cart array
    cart.push({ name: name, price: price });
    
    // Save the updated cart to browser storage so it persists
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Refresh the cart display to show the new item
    updateCartUI();

    // Show a toast notification to confirm the item was added
    window.showToast('✓ Added to cart!');

    // Add a 'pulse' animation class to the cart count badge for visual feedback
    // This makes the badge briefly scale up and down to catch user's attention
    cartCount.classList.add('pulse');
    
    // Remove the pulse animation class after 600ms so it doesn't stay permanently
    setTimeout(() => cartCount.classList.remove('pulse'), 600);
};

// 7. CART MODAL INTERACTIONS
// These event listeners handle opening and closing the cart modal popup

// When user clicks the cart icon in the header, toggle the cart modal open/closed
cartIcon.addEventListener('click', () => {
    // If modal is already visible (display: 'block'), hide it. Otherwise, show it.
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
});

// If the close button exists, allow clicking it to close the modal
if (closeCart) {
    closeCart.addEventListener('click', () => {
        // Hide the cart modal
        cartModal.style.display = 'none';
    });
}

// Allow closing the cart by clicking outside the modal (on the dark background)
window.addEventListener('click', (e) => {
    // Check if the user clicked on the modal itself (not on content inside it)
    if (e.target === cartModal) {
        // Hide the cart modal
        cartModal.style.display = 'none';
    }
});

// 8. INITIALIZE CART ON PAGE LOAD
// When the page loads, update the cart display to show any saved items
updateCartUI();
