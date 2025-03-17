// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Toggle navigation
    navLinks.classList.toggle('nav-active');
    
    // Animate links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Hamburger animation
    hamburger.classList.toggle('toggle');
});

// Add this CSS to your styles.css file for the mobile menu animation
const style = document.createElement('style');
style.textContent = `
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .nav-active {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        right: 0;
        top: 100%;
        background: white;
        width: 100%;
        padding: 2rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .toggle span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .toggle span:nth-child(2) {
        opacity: 0;
    }

    .toggle span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);

// Typewriter effect for the hero section
const typewriter = document.querySelector('.typewriter');
const text = typewriter.textContent;
typewriter.textContent = '';

let i = 0;
function type() {
    if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', type);

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }

    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        // Scroll down
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        // Scroll up
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    const formData = new FormData(contactForm);
    console.log('Form submitted with data:', Object.fromEntries(formData));
    
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Add scroll reveal animation
const revealElements = document.querySelectorAll('.project-card, .skill-category, .stat');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('revealed');
        }
    });
};

// Add reveal animation styles
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    .project-card, .skill-category, .stat {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .revealed {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(revealStyle);

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Check for elements on initial load 