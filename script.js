// ===========================
// Navigation Scroll Effect
// ===========================
const nav = document.getElementById('nav');
let lastScrollY = window.scrollY;

function handleNavScroll() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;
}

window.addEventListener('scroll', handleNavScroll, { passive: true });

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href === '#') {
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const navHeight = nav.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Intersection Observer for Fallback Animations
// (when scroll-driven animations not supported)
// ===========================
if (!CSS.supports('animation-timeline: view()')) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.addEventListener('DOMContentLoaded', () => {
        const animatedElements = document.querySelectorAll('.app-card, .stat-card, .feature-item, .connect-card');
        
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(40px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            fadeObserver.observe(element);
        });
    });
}

// ===========================
// Enhanced External Links
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    
    externalLinks.forEach(link => {
        if (!link.hasAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
        
        if (!link.hasAttribute('target') && !link.closest('.nav')) {
            link.setAttribute('target', '_blank');
        }
    });
});

// ===========================
// Active Nav Link on Scroll
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
    const scrollY = window.scrollY + nav.offsetHeight + 100;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink, { passive: true });

// ===========================
// Preload Critical Images
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const founderImage = document.querySelector('.founder-image');
    
    if (founderImage && 'loading' in HTMLImageElement.prototype) {
        founderImage.loading = 'lazy';
    }
});

// ===========================
// Performance: Debounce Scroll Events
// ===========================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedNavUpdate = debounce(updateActiveNavLink, 50);
window.addEventListener('scroll', debouncedNavUpdate, { passive: true });

// ===========================
// Add Copy Button to Email Links (Enhancement)
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const email = link.getAttribute('href').replace('mailto:', '');
            
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).then(() => {
                    const originalText = link.textContent;
                    link.textContent = 'Copied!';
                    
                    setTimeout(() => {
                        link.textContent = originalText;
                    }, 1500);
                }).catch(() => {
                    // Silently fail - let default mailto: behavior work
                });
            }
        });
    });
});

// ===========================
// Keyboard Navigation Enhancement
// ===========================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (document.activeElement) {
            document.activeElement.blur();
        }
    }
});

// ===========================
// Performance Monitoring (Dev Only)
// ===========================
if ('PerformanceObserver' in window) {
    try {
        const perfObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.entryType === 'largest-contentful-paint') {
                    // LCP logged for debugging
                    console.log('LCP:', entry.startTime);
                }
            }
        });
        
        perfObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
        // Silently fail in unsupported browsers
    }
}

// ===========================
// Reduced Motion Check
// ===========================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.documentElement.style.scrollBehavior = 'auto';
}

// Listen for changes to motion preference
prefersReducedMotion.addEventListener('change', (e) => {
    if (e.matches) {
        document.documentElement.style.scrollBehavior = 'auto';
    } else {
        document.documentElement.style.scrollBehavior = 'smooth';
    }
});

// ===========================
// Analytics Ready Event (for future integration)
// ===========================
window.addEventListener('load', () => {
    document.dispatchEvent(new CustomEvent('siteReady', {
        detail: {
            timestamp: Date.now(),
            page: document.title
        }
    }));
});
