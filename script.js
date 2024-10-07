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
        // No cambiamos el color del texto aquí para mantenerlo visible
    } else {
        navbar.classList.remove('bg-white', 'shadow-md');
        navbar.classList.add('bg-transparent');
        // No cambiamos el color del texto aquí para mantenerlo visible
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

// Reels slider
const reelsSlider = document.getElementById('reelsSlider');
const prevReelButton = document.getElementById('prevReel');
const nextReelButton = document.getElementById('nextReel');
let reelsSlidePosition = 0;

const reels = [
    { id: 1, url: "https://www.instagram.com/reel/ABC123/embed" },
    { id: 2, url: "https://www.instagram.com/reel/DEF456/embed" },
    { id: 3, url: "https://www.instagram.com/reel/GHI789/embed" },
    { id: 4, url: "https://www.instagram.com/reel/JKL012/embed" },
    { id: 5, url: "https://www.instagram.com/reel/MNO345/embed" },
];

// Función para crear y agregar los Reels al slider
function populateReelsSlider() {
    reels.forEach(reel => {
        const reelCard = document.createElement('div');
        reelCard.className = 'reel-card';
        reelCard.innerHTML = `
            <div class="aspect-w-9 aspect-h-16">
                <iframe
                    src="${reel.url}"
                    class="w-full h-full rounded-lg shadow-md"
                    allowfullscreen
                ></iframe>
            </div>
        `;
        reelsSlider.appendChild(reelCard);
    });
}

populateReelsSlider();

prevReelButton.addEventListener('click', () => {
    reelsSlidePosition = Math.max(reelsSlidePosition - 1, 0);
    updateReelsSliderPosition();
});

nextReelButton.addEventListener('click', () => {
    reelsSlidePosition = Math.min(reelsSlidePosition + 1, Math.ceil(reels.length / 2) - 1);
    updateReelsSliderPosition();
});

function updateReelsSliderPosition() {
    const slideWidth = reelsSlider.clientWidth;
    reelsSlider.style.transform = `translateX(-${reelsSlidePosition * slideWidth}px)`;
}

// Update sliders on window resize
window.addEventListener('resize', () => {
    updateSliderPosition(); // For product slider
    updateReelsSliderPosition(); // For reels slider
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

// Brand slider
// No additional JavaScript needed for the brand slider as it's handled by CSS animations

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