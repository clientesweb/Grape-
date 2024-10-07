// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    if (scrollTop > 50) {
        navbar.classList.add('bg-white', 'shadow-md');
        navbar.classList.remove('bg-transparent');
        document.querySelectorAll('#navbar a').forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-primary-800');
        });
    } else {
        navbar.classList.remove('bg-white', 'shadow-md');
        navbar.classList.add('bg-transparent');
        document.querySelectorAll('#navbar a').forEach(link => {
            link.classList.add('text-white');
            link.classList.remove('text-primary-800');
        });
    }
    
    lastScrollTop = scrollTop;
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
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

function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

setInterval(nextSlide, 5000);

// Product slider
const productSlider = document.getElementById('productSlider');
const prevButton = document.getElementById('prevProduct');
const nextButton = document.getElementById('nextProduct');
let slidePosition = 0;

prevButton.addEventListener('click', () => {
    slidePosition = Math.max(slidePosition - 1, 0);
    updateSliderPosition();
});

nextButton.addEventListener('click', () => {
    slidePosition = Math.min(slidePosition + 1, productSlider.children.length - 1);
    updateSliderPosition();
});

function updateSliderPosition() {
    const slideWidth = productSlider.clientWidth;
    productSlider.style.transform = `translateX(-${slidePosition * slideWidth}px)`;
}

// Update slider on window resize
window.addEventListener('resize', updateSliderPosition);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Brand slider
// No additional JavaScript needed for the brand slider as it's handled by CSS animations

// Initialize AOS (Animate on Scroll) if you decide to use it
// AOS.init();

// Form submission (you'll need to implement the actual form submission logic)
const contactForm = document.querySelector('#contacto form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
});

// Reservation button functionality
const reserveButton = document.getElementById('reserveButton');
reserveButton.addEventListener('click', () => {
    // Add your reservation logic here
    console.log('Reservation button clicked');
});