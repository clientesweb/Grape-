document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        preloader.style.display = 'none';
    });

    // Lazy loading de imágenes
    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    lazyImages.forEach(img => lazyLoadObserver.observe(img));

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white', 'shadow-md');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-white', 'shadow-md');
            navbar.classList.add('bg-transparent');
        }
    };
    window.addEventListener('scroll', handleScroll);

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Hero slider
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    const showSlide = (index) => {
        heroSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };
    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        showSlide(currentSlide);
    };
    setInterval(nextSlide, 5000);

    // Product slider
    const productSlider = document.getElementById('productSlider');
    const prevProduct = document.getElementById('prevProduct');
    const nextProduct = document.getElementById('nextProduct');

    if (productSlider) {
        productSlider.style.overflowX = 'scroll';
        productSlider.style.scrollBehavior = 'smooth';
        productSlider.style.display = 'flex';
        productSlider.style.scrollSnapType = 'x mandatory';

        const productCards = productSlider.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.style.flex = '0 0 auto';
            card.style.scrollSnapAlign = 'start';
        });

        const scrollProducts = (direction) => {
            const scrollAmount = productSlider.offsetWidth;
            productSlider.scrollBy({
                left: direction * scrollAmount,
                behavior: 'smooth'
            });
        };

        prevProduct.addEventListener('click', () => scrollProducts(-1));
        nextProduct.addEventListener('click', () => scrollProducts(1));
    }

    // Reels slider
    const reelsSlider = document.getElementById('reelsSlider');
    const prevReel = document.getElementById('prevReel');
    const nextReel = document.getElementById('nextReel');

    if (reelsSlider) {
        reelsSlider.style.overflowX = 'scroll';
        reelsSlider.style.scrollBehavior = 'smooth';
        reelsSlider.style.display = 'flex';
        reelsSlider.style.scrollSnapType = 'x mandatory';

        const reelCards = [
            '<iframe src="https://www.instagram.com/reel/DAGRQYdR47k/embed" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
            '<iframe src="https://www.instagram.com/reel/C_BEntyx1G7/embed" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
            '<iframe src="https://www.instagram.com/reel/C-siX4sxgCC/embed" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
            '<iframe src="https://www.instagram.com/reel/C_6lYduyaIy/embed" frameborder="0" scrolling="no" allowtransparency="true"></iframe>'
        ];

        reelCards.forEach(reel => {
            const reelCard = document.createElement('div');
            reelCard.className = 'reel-card';
            reelCard.style.flex = '0 0 auto';
            reelCard.style.scrollSnapAlign = 'start';
            reelCard.innerHTML = reel;
            reelsSlider.appendChild(reelCard);
        });

        const scrollReels = (direction) => {
            const scrollAmount = reelsSlider.offsetWidth;
            reelsSlider.scrollBy({
                left: direction * scrollAmount,
                behavior: 'smooth'
            });
        };

        prevReel.addEventListener('click', () => scrollReels(-1));
        nextReel.addEventListener('click', () => scrollReels(1));
    }

    // Reserve Now button functionality
    const reserveButton = document.getElementById('reserveButton');
    reserveButton.addEventListener('click', () => {
        alert('¡Gracias por tu interés! Pronto te contactaremos para confirmar tu reserva.');
        // Aquí puedes agregar la lógica para abrir un modal o redirigir a una página de reserva
    });
});