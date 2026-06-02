// NAVIGATION MENU FUNCTIONALITY
// This IIFE handles all navigation menu interactions including:
// 1. Opening/closing the burger menu on mobile
// 2. Closing the menu when links are clicked
// 3. Highlighting the current page in the navigation
// 4. Marking parent dropdowns as active when child links are active



(function () {
    // Get references to the burger menu button and the main navbar element
    let burger = document.getElementById('navBurger');
    let navbar = document.getElementById('mainNav');

    // Exit early if the required elements don't exist on the page
    if (!burger || !navbar) return;

    // BURGER MENU TOGGLE
    burger.addEventListener('click', function () {
        navbar.classList.toggle('nav-open');
        let isOpen = navbar.classList.contains('nav-open');
        burger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // CLOSE MENU ON LINK CLICK
    navbar.querySelectorAll('.nav-link-item:not(.dropdown-toggle)').forEach(function (link) {
        link.addEventListener('click', function () {
            navbar.classList.remove('nav-open');
            burger.setAttribute('aria-label', 'Open menu');
        });
    });

    // SET ACTIVE PAGE INDICATOR
    // This function identifies which page the user is currently on
    // and highlights the corresponding navigation link
    function setActiveNavLink() {
        // Get the current page's URL path (e.g., '/bikes.html' or '/pages/about.html')
        const currentPage = window.location.pathname;
        
        // Get all navigation links that could be marked as active
        const navLinks = navbar.querySelectorAll('.nav-link-item');

        // Loop through each link to check if it matches the current page
        navLinks.forEach(link => {
            // Get the href attribute of the link
            const href = link.getAttribute('href');
            
            // Check if this link points to the current page:
            // - Checks if the current page URL includes the link's href
            // - Special case: if href is '../index.html', also check if we're on 'index'
            if (href && (currentPage.includes(href) || (href === '../index.html' && currentPage.includes('index')))) {
                // Add the 'active' class to highlight this link
                link.classList.add('active');
            } else {
                // Remove the 'active' class from any link that doesn't match
                link.classList.remove('active');
            }
        });

        // MARK PARENT DROPDOWN AS ACTIVE
        // If a link inside a dropdown menu is marked as active,
        // also mark the parent dropdown toggle button as active
        // This helps users see which dropdown category they're in
        
        // Find any active link that's inside a dropdown
        const activeDropdown = navbar.querySelector('.dropdown .nav-link-item.active');
        
        if (activeDropdown) {
            // Get the parent dropdown container
            const parentDropdown = activeDropdown.closest('.dropdown');
            // Get the dropdown toggle button (the one that opens/closes the dropdown)
            const dropdownToggle = parentDropdown?.querySelector('.dropdown-toggle');
            
            // Mark the dropdown toggle as active too
            if (dropdownToggle) {
                dropdownToggle.classList.add('active');
            }
        }
    }

    // Call the function when the page loads to set the active link on initial page view
    setActiveNavLink();
})();
