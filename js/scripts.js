/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                // Use Bootstrap's collapse method to hide the navbar
                const navbar = document.getElementById('navbarResponsive');
                const bsCollapse = new bootstrap.Collapse(navbar, {
                    toggle: false
                });
                bsCollapse.hide(); // Hide the navbar
            }
        });
    });

    // Event listener for clicks outside the navbar
    document.addEventListener('click', function(event) {
        const navbar = document.getElementById('navbarResponsive');
        const toggler = document.querySelector('.navbar-toggler');

        // Check if the click was outside the navbar and the toggler button
        if (!navbar.contains(event.target) && !toggler.contains(event.target)) {
            if (navbar.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbar, {
                    toggle: false
                });
                bsCollapse.hide(); // Hide the navbar
            }
        }
    });
});


