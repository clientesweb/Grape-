document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            preloader.style.display = 'none';
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white', 'shadow-md');
                navbar.classList.remove('bg-transparent');
            } else {
                navbar.classList.remove('bg-white', 'shadow-md');
                navbar.classList.add('bg-transparent');
            }
        });
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Hero slider
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
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
    }

    // Product slider with scroll
    const productSlider = document.getElementById('productSlider');
    if (productSlider) {
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
    }

    // Reels slider with scroll
    const reelsSlider = document.getElementById('reelsSlider');
    if (reelsSlider) {
        const reels = [
            'https://www.instagram.com/reel/C_lKTQWRlQj/embed',
            'https://www.instagram.com/reel/C_BEntyx1G7/embed',
            'https://www.instagram.com/reel/C-siX4sxgCC/embed',
            'https://www.instagram.com/reel/C4i-MulxuU8/embed'
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
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // WhatsApp float button click event
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (whatsappFloat) {
        whatsappFloat.addEventListener('click', function(e) {
            e.preventDefault();
            const message = encodeURIComponent('Hola Grape! Me gustaría obtener más información sobre sus servicios.');
            const whatsappURL = `https://wa.me/5493518552793?text=${message}`;
            window.open(whatsappURL, '_blank');
        });
    }

    // Manejo del formulario de contacto con Formspree
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            formStatus.textContent = 'Enviando mensaje...';
            formStatus.classList.remove('hidden', 'bg-green-100', 'text-green-700', 'bg-red-100', 'text-red-700');
            formStatus.classList.add('bg-blue-100', 'text-blue-700');

            fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Error en el envío del formulario');
            }).then(data => {
                formStatus.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.';
                formStatus.classList.remove('bg-blue-100', 'text-blue-700');
                formStatus.classList.add('bg-green-100', 'text-green-700');
                contactForm.reset();
            }).catch(error => {
                formStatus.textContent = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
                formStatus.classList.remove('bg-blue-100', 'text-blue-700');
                formStatus.classList.add('bg-red-100', 'text-red-700');
            });
        });
    }

    // Inicialización del mapa
    function initMap() {
        const mapElement = document.getElementById('map');
        if (mapElement) {
            const lat = -31.3734352; // Latitud de Grape - Barras moviles, Córdoba
            const lng = -64.2291763; // Longitud de Grape - Barras moviles, Córdoba
            const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.005}%2C${lat-0.005}%2C${lng+0.005}%2C${lat+0.005}&layer=mapnik&marker=${lat}%2C${lng}`;
            
            const iframe = document.createElement('iframe');
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.frameBorder = '0';
            iframe.scrolling = 'no';
            iframe.marginHeight = '0';
            iframe.marginWidth = '0';
            iframe.src = mapUrl;
            
            mapElement.appendChild(iframe);
        }
    }

    // Inicializar el mapa
    initMap();
});