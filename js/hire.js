function hirePricing(price) {
    if (price < 700) {
        return { halfDay: 18, fullDay: 30, weekend: 50 };
    } else if (price < 1000) {
        return { halfDay: 25, fullDay: 40, weekend: 70 };
    } else {
        return { halfDay: 35, fullDay: 55, weekend: 90 };
    }
}

const hireGrid = document.getElementById('hireGrid');

if (hireGrid) {
    const mountainBikes = bikesData.filter(function(bike) {
        return bike.category === 'mountain';
    });

    hireGrid.innerHTML = mountainBikes.map(function(bike) {
        const pricing = hirePricing(bike.price);
        return `
            <div class="hire-card">
                <div class="product-img-wrap">
                    <img src="${bike.img}" alt="${bike.name} Hire">
                </div>
                <div class="hire-info">
                    <h3>${bike.name}</h3>
                    <p>${bike.description}</p>
                    <div class="hire-pricing">
                        <div class="hire-price-badge">
                            <span class="price-label">Half Day</span>
                            <span class="price-value">£${pricing.halfDay}</span>
                        </div>
                        <div class="hire-price-badge">
                            <span class="price-label">Full Day</span>
                            <span class="price-value">£${pricing.fullDay}</span>
                        </div>
                        <div class="hire-price-badge">
                            <span class="price-label">Weekend</span>
                            <span class="price-value">£${pricing.weekend}</span>
                        </div>
                    </div>
                    <a href="./contact-us-form.html" class="hire-book-btn">Book Now</a>
                </div>
            </div>
        `;
    }).join('');
}
