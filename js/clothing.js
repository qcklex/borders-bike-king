// 1. CLOTHING CARD TEMPLATE
function ClothingCard(item) {
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

// 2. RENDER ALL CLOTHING INTO THE GRID
let productGrid = document.querySelector('.product-grid');

if (productGrid) {
    productGrid.innerHTML = clothingData
        .map(function(item) { return ClothingCard(item); })
        .join('');
}

// 3. CATEGORY FILTER
let filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {

        filterBtns.forEach(function(b) {
            b.classList.remove('active');
        });
        btn.classList.add('active');

        let filter = btn.getAttribute('data-filter');
        let productCards = document.querySelectorAll('.product-card');

        productCards.forEach(function(card) {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

    });
});

// 4. ADD TO CART
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart-btn')) {
        let name = e.target.getAttribute('data-name');
        let price = parseFloat(e.target.getAttribute('data-price'));
        addToCart(name, price);

        let cartIcon = document.getElementById('cart');
        if (cartIcon) {
            cartIcon.animate(
                [
                    { transform: 'scale(1)' },
                    { transform: 'scale(1.4)' },
                    { transform: 'scale(1)' }
                ],
                { duration: 150, easing: 'ease-in-out' }
            );
        }
    }
});
