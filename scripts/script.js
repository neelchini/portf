// Create background flowers
const bgFlowers = document.getElementById('bgFlowers');
for (let i = 0; i < 50; i++) {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.top = `${Math.random() * 100}%`;
    flower.style.animationDelay = `${Math.random() * 15}s`;
    flower.style.transform = `scale(${0.5 + Math.random()})`;
    bgFlowers.appendChild(flower);
}

// Create garden border flowers
const gardenBorder = document.getElementById('gardenBorder');
for (let i = 0; i < 20; i++) {
    const flower = document.createElement('div');
    flower.classList.add('garden-flower');
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.transform = `scale(${0.7 + Math.random() * 0.6})`;
    gardenBorder.appendChild(flower);
}

// Scroll animations
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(el => {
    observer.observe(el);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.7)';
    }
});