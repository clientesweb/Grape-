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

    // Product slider with scroll
    const productSlider = document.getElementById('productSlider');
    let isScrollingProduct = false;
    let startXProduct;
    let scrollLeftProduct;

    productSlider.addEventListener('mousedown', (e) => {
        isScrollingProduct = true;
        startXProduct = e.pageX - productSlider.offsetLeft;
        scrollLeftProduct = productSlider.scrollLeft;
    });

    productSlider.addEventListener('mouseleave', () => {
        isScrollingProduct = false;
    });

    productSlider.addEventListener('mouseup', () => {
        isScrollingProduct = false;
    });

    productSlider.addEventListener('mousemove', (e) => {
        if (!isScrollingProduct) return;
        e.preventDefault();
        const x = e.pageX - productSlider.offsetLeft;
        const walk = (x - startXProduct) * 3;
        productSlider.scrollLeft = scrollLeftProduct - walk;
    });

    // Reels slider with scroll
    const reelsSlider = document.getElementById('reelsSlider');
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

    let isScrollingReel = false;
    let startXReel;
    let scrollLeftReel;

    reelsSlider.addEventListener('mousedown', (e) => {
        isScrollingReel = true;
        startXReel = e.pageX - reelsSlider.offsetLeft;
        scrollLeftReel = reelsSlider.scrollLeft;
    });

    reelsSlider.addEventListener('mouseleave', () => {
        isScrollingReel = false;
    });

    reelsSlider.addEventListener('mouseup', () => {
        isScrollingReel = false;
    });

    reelsSlider.addEventListener('mousemove', (e) => {
        if (!isScrollingReel) return;
        e.preventDefault();
        const x = e.pageX - reelsSlider.offsetLeft;
        const walk = (x - startXReel) * 3;
        reelsSlider.scrollLeft = scrollLeftReel - walk;
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