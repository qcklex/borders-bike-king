// PRODUCT CARD TEMPLATE
function BikeCard(bike) {
    return `
        <div class="product-card" data-category="${bike.category}">
            <div class="product-img-wrap">
                <img src="${bike.img}" alt="${bike.name}">
            </div>
            <div class="product-info">
                <span class="product-tag">${bike.category.charAt(0).toUpperCase() + bike.category.slice(1)}</span>
                <h3>${bike.name}</h3>
                <p>${bike.description}</p>
                <div class="product-footer">
                    <span class="product-price">£${bike.price}</span>
                    <button class="add-to-cart-btn" data-name="${bike.name}" data-price="${bike.price}">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

// bikesData is the array defined in dbs/bikes-data.js
// Using .map() to turn each bike object into a BikeCard HTML string
// Using .join('') to combine all strings into one
// Setting the result as innerHTML of the productGrid element

// bikesData is accessible due to the <script> tag order in index.html  
// (Very important that bikes-data.js is loaded before bikes.js) !!
//  (this kind of things is why frameworks as vue or react were created, amongs more reasons,
//  to avoid this kind of "dependency order" issues)
// (bikes-data.js is loaded before bikes.js)

let productGrid = document.getElementById('productGrid');
 productGrid.innerHTML = bikesData.map(function(bike) {
      return BikeCard(bike);
  }).join('');









// TASK 2 — Add-to-cart listeners using .forEach()
document.querySelectorAll('.add-to-cart-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        let name = btn.getAttribute('data-name');
        let price = parseFloat(btn.getAttribute('data-price'));
        addToCart(name, price);


    

// TASK 3 — Element.animate() inside the click listener
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
    });
});

// TASK 4 — Category filter using .forEach()
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

