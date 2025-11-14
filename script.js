// Simple fade-in animation on scroll
const elements = document.querySelectorAll('.section-title, .section-subtitle, .dashboard-wrapper');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

elements.forEach(el => observer.observe(el));
