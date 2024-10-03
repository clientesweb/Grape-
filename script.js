// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
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
const prevButton = document.getElementById('prevProduct');
const nextButton = document.getElementById('nextProduct');
let currentProduct = 0;
const totalProducts = productSlider.children.length;

function showProduct(index) {
    productSlider.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentProduct = (currentProduct - 1 + totalProducts) % totalProducts;
    showProduct(currentProduct);
});

nextButton.addEventListener('click', () => {
    currentProduct = (currentProduct + 1) % totalProducts;
    showProduct(currentProduct);
});

// Mapbox
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-58.3816, -34.6037],
    zoom: 12
});

new mapboxgl.Marker()
    .setLngLat([-58.3816, -34.6037])
    .addTo(map);
