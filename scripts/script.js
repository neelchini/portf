// Create floating flowers
const floatingFlowers = document.getElementById('floatingFlowers');
const flowerImages = [
    '🌸', '🌻', '🌼', '⭐','❤️','🦋','☘','🍁', '🌿'
];

for (let i = 0; i < 25; i++) {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.innerHTML = flowerImages[Math.floor(Math.random() * flowerImages.length)];
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.fontSize = `${15 + Math.random() * 25}px`;
    flower.style.animationDelay = `${Math.random() * 20}s`;
    flower.style.animationDuration = `${15 + Math.random() *20}s`;
    floatingFlowers.appendChild(flower);
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
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.padding = '15px 0';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.85)';
        header.style.padding = '20px 0';
    }
});

// Add active class to current navigation link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});