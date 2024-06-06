// script.js

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const main = document.querySelector('main');

    // Toggle menu visibility on hamburger click
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        if (hamburger.classList.contains('active')) {
            nav.style.right = '0px';
            main.style.marginRight = '250px';
            document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        } else {
            nav.style.right = '-250px';
            main.style.marginRight = '0';
            document.body.style.backgroundColor = 'initial';
        }
    });

    // Hide menu on link click (for mobile view)
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            nav.style.right = '-250px';
            main.style.marginRight = '0';
            document.body.style.backgroundColor = 'initial';
        });
    });
});
