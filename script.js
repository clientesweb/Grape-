document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        document.getElementById('preloader').style.display = 'none';
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white', 'shadow-md');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-white', 'shadow-md');
            navbar.classList.add('bg-transparent');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Hero slider
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        slides[index].classList.add('active');
        currentSlide = index;
    }
    setInterval(() => {
        let nextSlide = (currentSlide + 1) % slides.length;
        showSlide(nextSlide);
    }, 5000);

    // Product slider
    const productSlider = document.getElementById('productSlider');
    const prevProduct = document.getElementById('prevProduct');
    const nextProduct = document.getElementById('nextProduct');
    let productPosition = 0;
    const productCards = document.querySelectorAll('.product-card');
    const productCardWidth = productCards[0].offsetWidth;
    const productMaxPosition = (productCards.length - 1) * productCardWidth;

    prevProduct.addEventListener('click', () => {
        productPosition = Math.max(productPosition - productCardWidth, 0);
        productSlider.style.transform = `translateX(-${productPosition}px)`;
    });

    nextProduct.addEventListener('click', () => {
        productPosition = Math.min(productPosition + productCardWidth, productMaxPosition);
        productSlider.style.transform = `translateX(-${productPosition}px)`;
    });

    // Reels slider
    const reelsSlider = document.getElementById('reelsSlider');
    const prevReel = document.getElementById('prevReel');
    const nextReel = document.getElementById('nextReel');
    let reelPosition = 0;
    const reels = [
        'https://www.instagram.com/reel/CzNIQTCOAHM/embed',
        'https://www.instagram.com/reel/CzKXVPRuEEQ/embed',
        'https://www.instagram.com/reel/CzFxGkDOXEG/embed',
        'https://www.instagram.com/reel/Cy6NJYluWrE/embed'
    ];

    function createReelCard(src) {
        const card = document.createElement('div');
        card.className = 'reel-card';
        const iframe = document.createElement('iframe');
        iframe.src = src;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.frameBorder = '0';
        iframe.allowFullscreen = true;
        card.appendChild(iframe);
        return card;
    }

    reels.forEach(reel => {
        reelsSlider.appendChild(createReelCard(reel));
    });

    const reelCards = document.querySelectorAll('.reel-card');
    const reelCardWidth = reelCards[0].offsetWidth;
    const reelMaxPosition = (reelCards.length - 1) * reelCardWidth;

    prevReel.addEventListener('click', () => {
        reelPosition = Math.max(reelPosition - reelCardWidth, 0);
        reelsSlider.style.transform = `translateX(-${reelPosition}px)`;
    });

    nextReel.addEventListener('click', () => {
        reelPosition = Math.min(reelPosition + reelCardWidth, reelMaxPosition);
        reelsSlider.style.transform = `translateX(-${reelPosition}px)`;
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // WhatsApp float button click event
    const whatsappFloat = document.querySelector('.whatsapp-float');
    whatsappFloat.addEventListener('click', function(e) {
        e.preventDefault();
        const message = encodeURIComponent('Hola Grape! Me gustaría obtener más información sobre sus servicios.');
        const whatsappURL = `https://wa.me/1234567890?text=${message}`;
        window.open(whatsappURL, '_blank');
    });
});