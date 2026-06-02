// ACCESSORY CARD TEMPLATE
function AccessoryCard(item) {
    return `
        <div class="product-card" data-category="${item.category}">
            <div class="product-img-wrap">
                <img src="${item.img}" alt="${item.name}">
            </div>
            <div class="product-info">
                <span class="product-tag">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="product-footer">
                    <span class="product-price">£${item.price}</span>
                    <button class="add-to-cart-btn" data-name="${item.name}" data-price="${item.price}">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

// RENDER ACCESSORIES
// Separate the data into two groups by category, then render each into its own grid
let toolsGrid = document.getElementById('toolsGrid');
let othersGrid = document.getElementById('othersGrid');

if (toolsGrid) {
    toolsGrid.innerHTML = accessoriesData
        .filter(function(item) { return item.category === 'tools'; })
        .map(function(item) { return AccessoryCard(item); })
        .join('');
}

if (othersGrid) {
    othersGrid.innerHTML = accessoriesData
        .filter(function(item) { return item.category === 'others'; })
        .map(function(item) { return AccessoryCard(item); })
        .join('');
}









 document.querySelectorAll('.add-to-cart-btn').forEach(function(btn) {
     btn.addEventListener('click', function() {
         let name = btn.getAttribute('data-name');
         let price = parseFloat(btn.getAttribute('data-price'));
         addToCart(name, price);

         let cartIcon = document.getElementById('cart');
         if (cartIcon) {
             cartIcon.animate(
                 [
                     { transform: 'scale(1)' },
                     { transform: 'scale(1.4)' },
                     { transform: 'scale(1)' }
                 ],
                 { duration: 300, easing: 'ease-in-out' }
             );
         }
     });
 });

 // ========== CATEGORY FILTER ==========
let filterBtns = document.querySelectorAll('.filter-btn');
let productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {

        filterBtns.forEach(function(b) {
            b.classList.remove('active');
        });
        btn.classList.add('active');

        let filter = btn.getAttribute('data-filter');

        productCards.forEach(function(card) {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

    });
});

