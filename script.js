// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Enhanced Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add staggered delay for grid items
            const delay = entry.target.dataset.delay || (index * 0.1);
            setTimeout(() => {
                entry.target.classList.add('visible');
                entry.target.classList.add('fade-in-up');
            }, delay * 1000);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation with stagger effect
const animateElements = document.querySelectorAll('.feature-card, .step-card, .pricing-card, .testimonial-card, .trust-item');
animateElements.forEach((el, index) => {
    el.classList.add('fade-on-scroll');
    el.dataset.delay = (index % 6) * 0.1; // Stagger delay
    observer.observe(el);
});

// Parallax effect for hero gradient
let ticking = false;
function updateParallax() {
    const scrolled = window.pageYOffset;
    const heroGradient = document.querySelector('.hero-gradient');
    const dashboardContainer = document.querySelector('.dashboard-image-container');
    
    if (heroGradient && scrolled < window.innerHeight) {
        heroGradient.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    if (dashboardContainer) {
        const rect = dashboardContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
            const progress = (windowHeight - rect.top) / windowHeight;
            dashboardContainer.style.transform = `translateY(${Math.sin(progress * Math.PI) * 20}px) scale(${0.98 + progress * 0.02})`;
        }
    }
    
    ticking = false;
}

function requestParallaxTick() {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

window.addEventListener('scroll', requestParallaxTick);

// Smooth scroll is handled in DOMContentLoaded below

// Smooth reveal animations for section headers
const sectionHeaders = document.querySelectorAll('.section-header, .dashboard-header');
const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            headerObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

sectionHeaders.forEach(header => {
    header.style.opacity = '0';
    header.style.transform = 'translateY(30px)';
    header.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    headerObserver.observe(header);
});

// Counter animation for stats (if you want to add them later)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = Math.round(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.round(start);
        }
    }, 16);
}

// Pricing card hover effect enhancement
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Add loading state handler
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger any initial animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
    }
});

// Form validation (if you add a contact form later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Performance optimization: Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Enhanced CTA button animations
const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
ctaButtons.forEach((btn, index) => {
    btn.style.opacity = '0';
    btn.style.transform = 'translateY(20px)';
    btn.style.transition = `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.8 + index * 0.1}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.8 + index * 0.1}s`;
    
    setTimeout(() => {
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
    }, 1000 + index * 100);
});

// Subtle mouse move parallax effect for cards (only on desktop)
if (window.innerWidth > 768) {
    const cards = document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card, .step-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// Track scroll progress (optional - for progress bar)
function updateScrollProgress() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.pageYOffset;
    const progress = (scrolled / documentHeight) * 100;
    
    // You can use this for a progress bar if needed
    // document.querySelector('.progress-bar').style.width = progress + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// Console branding (fun easter egg)
console.log(
    '%cTextFlow',
    'font-size: 3rem; font-weight: bold; background: linear-gradient(135deg, #6366F1, #8B5CF6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'
);
console.log(
    '%cAI-powered conversation automation for real estate',
    'font-size: 1rem; color: #6B7280;'
);
console.log(
    '%c👋 Interested in working with us? Visit our careers page!',
    'font-size: 0.875rem; color: #6366F1;'
);

// Enhanced keyboard navigation
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Add visual feedback for interactive elements
const interactiveElements = document.querySelectorAll('.btn, .feature-card, .pricing-card');
interactiveElements.forEach(element => {
    element.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.98)';
    });
    
    element.addEventListener('mouseup', function() {
        this.style.transform = '';
    });
});

// Detect reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('scroll-behavior', 'auto');
    const style = document.createElement('style');
    style.textContent = `
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}

// Add active state to navigation links based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            if (navLink) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.style.color = '';
                });
                navLink.style.color = 'var(--color-primary)';
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Smooth number counter animation for stats (if needed)
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        element.textContent = Math.floor(easeOutQuart * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    // Animate hero elements sequentially (but ensure buttons are always visible)
    // Note: Hero title, subtitle, and description now use CSS blur animations
    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) {
        heroBadge.style.opacity = '0';
        heroBadge.style.transform = 'translateY(30px)';
    }
    
    // Ensure hero-cta buttons are always visible
    const heroCta = document.querySelector('.hero-cta');
    if (heroCta) {
        heroCta.style.opacity = '1';
        heroCta.style.visibility = 'visible';
    }
    
    // Hero title, subtitle, and description use CSS blur animations (defined in CSS)
    // No need to manually animate them here as CSS handles it
    
    // Add smooth scroll behavior enhancement
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Skip if it's a modal trigger button
            if (this.classList.contains('startAutomatingBtn') || this.id === 'getStartedNavBtn') {
                return; // Let modal handler take over
            }
            if (href === '#' || href === '#!') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                // Use 60px offset on mobile, 90px on desktop
                const navHeight = window.innerWidth <= 768 ? 60 : 90;
                const offsetTop = target.offsetTop - navHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    console.log('TextFlow website loaded successfully! 🚀');
});

// Add cursor effect for premium feel (optional)
let cursor = null;
if (window.innerWidth > 768) {
    cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid #6366F1;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        display: none;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        if (cursor) {
            cursor.style.display = 'block';
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        }
    });
    
    // Scale cursor on hover over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .feature-card, .pricing-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (cursor) cursor.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            if (cursor) cursor.style.transform = 'scale(1)';
        });
    });
}

// Modal functionality - run immediately and also on DOMContentLoaded
(function initModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const startAutomatingBtns = document.querySelectorAll('.startAutomatingBtn, #getStartedNavBtn');
    const contactForm = document.getElementById('contactForm');

    console.log('Modal initialization - elements:', { 
        modalOverlay: !!modalOverlay, 
        modalClose: !!modalClose, 
        buttonsFound: startAutomatingBtns.length,
        contactForm: !!contactForm 
    });

    if (!modalOverlay) {
        console.error('Modal overlay not found! Retrying on DOMContentLoaded...');
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initModal);
        }
        return;
    }

    // Close modal function
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Open modal - use capture phase to ensure it runs first
    console.log('Found', startAutomatingBtns.length, 'buttons to attach modal to');
    if (startAutomatingBtns.length > 0) {
        startAutomatingBtns.forEach((btn, index) => {
            console.log(`Attaching click handler to button ${index + 1}:`, btn);
            // Use capture phase and higher priority
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                console.log('Button clicked, opening modal. Overlay:', modalOverlay);
                if (modalOverlay) {
                    modalOverlay.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    console.log('Modal should be visible now. Classes:', modalOverlay.className);
                    // Force a reflow to ensure CSS applies
                    void modalOverlay.offsetHeight;
                } else {
                    console.error('Modal overlay is null!');
                }
            }, true); // Use capture phase
        });
    } else {
        console.warn('No buttons found with class .startAutomatingBtn or #getStartedNavBtn');
        // Try alternative selectors
        const altButtons = document.querySelectorAll('a[href="#"]');
        console.log('Found', altButtons.length, 'buttons with href="#"');
    }

    // Close modal handlers
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close on overlay click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                agencyName: document.getElementById('agencyName').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                crm: document.getElementById('crm').value
            };

            // Here you would typically send the data to your backend
            // For now, we'll just log it and show a success message
            console.log('Form submitted:', formData);
            
            // Show success message (you can customize this)
            alert('Thank you! We\'ll be in touch soon.');
            
            // Reset form and close modal
            contactForm.reset();
            closeModal();
        });
    }
})();
