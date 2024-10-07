document.addEventListener('DOMContentLoaded', function() {
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
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    function showSlide(index) {
        heroSlides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        showSl
ide(currentSlide);
    }
    setInterval(nextSlide, 5000);

    // Product slider
    const productSlider = document.getElementById('productSlider');
    const prevProduct = document.getElementById('prevProduct');
    const nextProduct = document.getElementById('nextProduct');
    let productPosition = 0;
    const productCards = document.querySelectorAll('.product-card');
    const productCardWidth = productCards[0].offsetWidth;
    const maxPosition = (productCards.length - 3) * productCardWidth;

    function updateProductSlider() {
        productSlider.style.transform = `translateX(-${productPosition}px)`;
    }

    prevProduct.addEventListener('click', () => {
        productPosition = Math.max(productPosition - productCardWidth, 0);
        updateProductSlider();
    });

    nextProduct.addEventListener('click', () => {
        productPosition = Math.min(productPosition + productCardWidth, maxPosition);
        updateProductSlider();
    });

    // Reels slider
    const reelsSlider = document.getElementById('reelsSlider');
    const prevReel = document.getElementById('prevReel');
    const nextReel = document.getElementById('nextReel');
    let reelPosition = 0;
    const reelCards = [
        '<iframe src="https://www.instagram.com/reel/C3-Ue-Gu-Hy/embed" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        '<iframe src="https://www.instagram.com/reel/C3-UcXOOXXe/embed" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        '<iframe src="https://www.instagram.com/reel/C3-UaXwOXXc/embed" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        '<iframe src="https://www.instagram.com/reel/C3-UYjAOXXa/embed" frameborder="0" scrolling="no" allowtransparency="true"></iframe>'
    ];

    // Insertar los Reels en el slider
    reelCards.forEach(reel => {
        const reelCard = document.createElement('div');
        reelCard.className = 'reel-card';
        reelCard.innerHTML = reel;
        reelsSlider.appendChild(reelCard);
    });

    function updateReelsSlider() {
        reelsSlider.style.transform = `translateX(-${reelPosition}%)`;
    }

    prevReel.addEventListener('click', () => {
        reelPosition = Math.max(reelPosition - 50, 0);
        updateReelsSlider();
    });

    nextReel.addEventListener('click', () => {
        reelPosition = Math.min(reelPosition + 50, (reelCards.length - 2) * 50);
        updateReelsSlider();
    });

    // Reserve Now button functionality
    const reserveButton = document.getElementById('reserveButton');
    reserveButton.addEventListener('click', function() {
        alert('¡Gracias por tu interés! Pronto te contactaremos para confirmar tu reserva.');
        // Aquí puedes agregar la lógica para abrir un modal o redirigir a una página de reserva
    });
});