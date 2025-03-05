// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Navbar background change on scroll with smooth transition
const header = document.querySelector('header');
header.style.transition = 'background-color 0.3s ease';

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(10, 6, 6, 0.98)';
    } else {
        header.style.backgroundColor = 'rgba(10, 6, 6, 0.95)';
    }
});

// Init On DOM Load
document.addEventListener('DOMContentLoaded', () => {
    // Code window hover effect
    const codeWindow = document.querySelector('.code-window');
    if (codeWindow) {
        codeWindow.addEventListener('mouseover', () => {
            document.querySelectorAll('.dots span').forEach(dot => {
                dot.style.transform = 'scale(1.1)';
            });
        });

        codeWindow.addEventListener('mouseout', () => {
            document.querySelectorAll('.dots span').forEach(dot => {
                dot.style.transform = 'scale(1)';
            });
        });
    }

    // Add hover effect to Developer text
    const highlight = document.querySelector('.highlight');
    if (highlight) {
        highlight.addEventListener('mouseover', () => {
            highlight.style.transition = 'color 0.3s ease';
        });

        highlight.addEventListener('mouseout', () => {
            highlight.style.color = '';
        });
    }
});
