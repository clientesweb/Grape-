document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect (sin cambios)
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

    // Mobile menu toggle (sin cambios)
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Hero slider (sin cambios)
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
        showSlide(currentSlide);
    }
    setInterval(nextSlide, 5000);

    // Product slider (modificado para scroll horizontal)
    const productSlider = document.getElementById('productSlider');
    const prevProduct = document.getElementById('prevProduct');
    const nextProduct = document.getElementById('nextProduct');

    // Configurar el scroll horizontal
    productSlider.style.overflowX = 'scroll';
    productSlider.style.scrollBehavior = 'smooth';
    productSlider.style.display = 'flex';
    productSlider.style.scrollSnapType = 'x mandatory';

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.flex = '0 0 auto';
        card.style.scrollSnapAlign = 'start';
    });

    // Función para desplazamiento suave
    function scrollProducts(direction) {
        const scrollAmount = productSlider.offsetWidth;
        productSlider.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }

    prevProduct.addEventListener('click', () => scrollProducts(-1));
    nextProduct.addEventListener('click', () => scrollProducts(1));

    // Reels slider (modificado para scroll horizontal)
    const reelsSlider = document.getElementById('reelsSlider');
    const prevReel = document.getElementById('prevReel');
    const nextReel = document.getElementById('nextReel');

    // Configurar el scroll horizontal para reels
    reelsSlider.style.overflowX = 'scroll';
    reelsSlider.style.scrollBehavior = 'smooth';
    reelsSlider.style.display = 'flex';
    reelsSlider.style.scrollSnapType = 'x mandatory';

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
        reelCard.style.flex = '0 0 auto';
        reelCard.style.scrollSnapAlign = 'start';
        reelCard.innerHTML = reel;
        reelsSlider.appendChild(reelCard);
    });

    // Función para desplazamiento suave de reels
    function scrollReels(direction) {
        const scrollAmount = reelsSlider.offsetWidth;
        reelsSlider.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }

    prevReel.addEventListener('click', () => scrollReels(-1));
    nextReel.addEventListener('click', () => scrollReels(1));

    // Reserve Now button functionality (sin cambios)
    const reserveButton = document.getElementById('reserveButton');
    reserveButton.addEventListener('click', function() {
        alert('¡Gracias por tu interés! Pronto te contactaremos para confirmar tu reserva.');
        // Aquí puedes agregar la lógica para abrir un modal o redirigir a una página de reserva
    });
});