/**
 * Schedulify Landing Page JavaScript
 * Handles mobile menu, smooth scrolling, and interactive elements
 */

// ==========================================
// Mobile Menu Toggle
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle mobile menu
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');

        // Update icon
        const icon = menuToggle.querySelector('.material-icons');
        if (navMenu.classList.contains('active')) {
            icon.textContent = 'close';
        } else {
            icon.textContent = 'menu';
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('.material-icons');
            icon.textContent = 'menu';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navMenu.contains(event.target) || menuToggle.contains(event.target);

        if (!isClickInside && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('.material-icons');
            icon.textContent = 'menu';
        }
    });
});

// ==========================================
// Smooth Scroll for Anchor Links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Intersection Observer for Fade-in Animations
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.feature-card, .step, .benefit-item, .contact-item'
    );

    animatedElements.forEach((el, index) => {
        // Set initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = `${index * 0.1}s`;

        observer.observe(el);
    });
});

// ==========================================
// Header Shadow on Scroll
// ==========================================
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');

    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
});

// ==========================================
// Video Placeholder Click Handler
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const videoPlaceholder = document.querySelector('.video-placeholder');

    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            // This will be used when the YouTube video is ready
            // For now, just add a subtle animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });

        videoPlaceholder.style.cursor = 'pointer';
        videoPlaceholder.style.transition = 'transform 0.2s ease';
    }
});

// ==========================================
// YouTube Video Integration (for when video is ready)
// ==========================================
/**
 * To integrate YouTube video:
 * 1. Upload your video to YouTube
 * 2. Get the video ID from the URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID)
 * 3. In index.html, uncomment the video-wrapper section
 * 4. Replace VIDEO_ID with your actual YouTube video ID
 * 5. Comment out or remove the video-placeholder section
 *
 * Example:
 * <div class="video-wrapper">
 *     <iframe
 *         src="https://www.youtube.com/embed/dQw4w9WgXcQ"
 *         title="Як використовувати Schedulify"
 *         frameborder="0"
 *         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 *         allowfullscreen>
 *     </iframe>
 * </div>
 */

// ==========================================
// Accessibility: Skip to Content
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // Add skip to content link for screen readers
    const skipLink = document.createElement('a');
    skipLink.href = '#features';
    skipLink.className = 'skip-to-content';
    skipLink.textContent = 'Перейти до контенту';
    skipLink.style.cssText = `
        position: absolute;
        left: -9999px;
        z-index: 999;
        padding: 1rem;
        background: var(--primary-color);
        color: white;
        text-decoration: none;
    `;

    skipLink.addEventListener('focus', function() {
        this.style.left = '0';
    });

    skipLink.addEventListener('blur', function() {
        this.style.left = '-9999px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
});

// ==========================================
// Console Easter Egg
// ==========================================
console.log('%c🚀 Schedulify', 'font-size: 24px; font-weight: bold; color: #7092bf;');
console.log('%cПланування для терапевтичних клінік', 'font-size: 14px; color: #6c757d;');
console.log('%cЗацікавлені в розробці? Перегляньте код на GitHub!', 'font-size: 12px; color: #2c3e50;');
