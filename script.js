// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navCta = document.querySelector('.nav-cta');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        navCta.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            navCta.classList.remove('active');
        });
    });

    // Hero Quote Form handling
    initHeroQuoteForm();
    
    // Portfolio functionality
    initPortfolio();
});

// Portfolio functionality
function initPortfolio() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Separate image arrays for each project
    const projectImages = {
        project1: [
            'assets/portfolio/project1/cover.jpeg',
            'assets/portfolio/project1/1.jpeg',
            'assets/portfolio/project1/2.jpeg',
            'assets/portfolio/project1/3.jpeg',
            'assets/portfolio/project1/4.jpeg',
            'assets/portfolio/project1/5.jpeg',
            'assets/portfolio/project1/6.jpeg',
            'assets/portfolio/project1/7.jpeg',
            'assets/portfolio/project1/8.jpeg'
        ],
        project2: [
            'assets/portfolio/project3/WhatsApp Image 2025-08-04 at 12.31.31.jpeg',
            'assets/portfolio/project3/WhatsApp Image 2025-08-04 at 12.31.30.jpeg',
            'assets/portfolio/project3/WhatsApp Image 2025-08-04 at 12.31.30 (1).jpeg',
            'assets/portfolio/project3/WhatsApp Image 2025-08-04 at 12.31.30 (2).jpeg',
            'assets/portfolio/project3/WhatsApp Image 2025-08-04 at 12.31.31 (2).jpeg',
            'assets/portfolio/project3/WhatsApp Image 2025-08-04 at 12.31.31 (3).jpeg',
            'assets/portfolio/project3/WhatsApp Image 2025-08-04 at 12.33.55.jpeg',
            'assets/portfolio/project3/WhatsApp Image 2025-08-04 at 12.33.55 (1).jpeg',
            'assets/portfolio/project3/WhatsApp Image 2025-08-04 at 12.33.55 (2).jpeg',
            'assets/portfolio/project3/WhatsApp Image 2025-08-04 at 12.33.55 (3).jpeg'
        ],
        project3: [
            'assets/portfolio/project4/WhatsApp Image 2025-08-04 at 12.30.37.jpeg',
            'assets/portfolio/project4/WhatsApp Image 2025-08-04 at 12.31.31 (1).jpeg'
        ],
        project4: [
            'assets/portfolio/project5/WhatsApp Image 2025-08-04 at 12.35.36.jpeg',
            'assets/portfolio/project5/WhatsApp Image 2025-08-04 at 12.35.35 (3).jpeg',
            'assets/portfolio/project5/WhatsApp Image 2025-08-04 at 12.35.35.jpeg',
            'assets/portfolio/project5/WhatsApp Image 2025-08-04 at 12.35.35 (1).jpeg',
            'assets/portfolio/project5/WhatsApp Image 2025-08-04 at 12.35.35 (2).jpeg',
            'assets/portfolio/project5/WhatsApp Image 2025-08-04 at 12.35.35 (4).jpeg',
            'assets/portfolio/project5/WhatsApp Image 2025-08-04 at 12.35.35 (5).jpeg',
            'assets/portfolio/project5/WhatsApp Image 2025-08-04 at 12.35.35 (6).jpeg',
            'assets/portfolio/project5/WhatsApp Image 2025-08-04 at 12.35.35 (7).jpeg',
            
        ],
        project5: [
            'assets/portfolio/project6/WhatsApp Image 2025-08-04 at 17.38.06.jpeg',
            'assets/portfolio/project6/WhatsApp Image 2025-08-04 at 17.38.52.jpeg'
        ]
    };
    
    // Handle "View Project" link clicks
    const viewProjectLinks = document.querySelectorAll('.view-project-link');
    
    viewProjectLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            
            // Determine which project this link belongs to
            const portfolioItem = this.closest('.portfolio-item');
            const projectIndex = Array.from(portfolioItems).indexOf(portfolioItem);
            const projectKey = `project${projectIndex + 1}`;
            
            // Get the images for this specific project
            const projectImagesArray = projectImages[projectKey];
            
            if (projectImagesArray && projectImagesArray.length > 0) {
                // Show lightbox with only this project's images, starting from the first image
                showLightbox(projectImagesArray, 0);
            }
        });
    });
}

// Portfolio Modal
function showPortfolioModal(imageSrc, title, description) {
    // Remove existing modal
    const existingModal = document.querySelector('.portfolio-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'portfolio-modal';
    modal.innerHTML = `
        <div class="portfolio-modal-overlay">
            <div class="portfolio-modal-content">
                <button class="portfolio-modal-close">&times;</button>
                <div class="portfolio-modal-image">
                    <img src="${imageSrc}" alt="${title}">
                </div>
                <div class="portfolio-modal-info">
                    <h3>${title}</h3>
                    <p>${description}</p>
                    <div class="portfolio-modal-features">
                        <div class="feature">
                            <i class="fas fa-check-circle"></i>
                            <span>Professional Quality</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-check-circle"></i>
                            <span>Premium Materials</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-check-circle"></i>
                            <span>Attention to Detail</span>
                        </div>
                    </div>
                    <a href="#contact" class="btn btn-primary">Get Quote for Similar Project</a>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .portfolio-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .portfolio-modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
        }
        
        .portfolio-modal-content {
            position: relative;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 2rem;
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(15px);
        }
        
        .portfolio-modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            font-size: 2rem;
            color: #666;
            cursor: pointer;
            z-index: 1;
        }
        
        .portfolio-modal-close:hover {
            color: #333;
        }
        
        .portfolio-modal-image {
            margin-bottom: 2rem;
            border-radius: 12px;
            overflow: hidden;
        }
        
        .portfolio-modal-image img {
            width: 100%;
            height: auto;
            display: block;
        }
        
        .portfolio-modal-info h3 {
            color: #2c3e50;
            margin-bottom: 1rem;
            font-size: 1.8rem;
        }
        
        .portfolio-modal-info p {
            color: #666;
            margin-bottom: 2rem;
            line-height: 1.6;
        }
        
        .portfolio-modal-features {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }
        
        .portfolio-modal-features .feature {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #0e2c34;
            font-weight: 500;
        }
        
        @media (max-width: 768px) {
            .portfolio-modal-content {
                padding: 1.5rem;
                margin: 1rem;
            }
            
            .portfolio-modal-features {
                flex-direction: column;
            }
        }
    `;
    
    document.head.appendChild(modalStyle);
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.portfolio-modal-close');
    const overlay = modal.querySelector('.portfolio-modal-overlay');
    
    closeBtn.addEventListener('click', () => modal.remove());
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            modal.remove();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modal.remove();
        }
    });
}

// Hero Quote Form functionality
function initHeroQuoteForm() {
    const quoteForm = document.querySelector('.quote-form');
    if (!quoteForm) return;

    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const service = this.querySelector('select').value;
        const message = this.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !service) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            showNotification('Thank you! Your quote request has been sent. We\'ll get back to you within 24 hours.', 'success');
            this.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Smooth scrolling for anchor links
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

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !service) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showNotification('Thank you! Your message has been sent. We\'ll get back to you soon.', 'success');
        this.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .feature-item, .portfolio-item, .testimonial-card');
    animatedElements.forEach(el => observer.observe(el));
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '');
        }
    }
    
    updateCounter();
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statElement = entry.target.querySelector('h3');
            const text = statElement.textContent;
            const target = parseInt(text.replace(/\D/g, ''));
            
            if (target > 0) {
                animateCounter(statElement, target);
                statsObserver.unobserve(entry.target);
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const statElements = document.querySelectorAll('.stat');
    statElements.forEach(el => statsObserver.observe(el));
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        margin-left: 1rem;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            padding: 1rem;
        }
        
        .nav-cta.active {
            display: block;
            position: absolute;
            top: calc(100% + 200px);
            left: 0;
            right: 0;
            background: white;
            padding: 1rem;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
    }
`;
document.head.appendChild(style);

// Lazy loading for images (if real images are added later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add loading state to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.type === 'submit') return; // Skip form submit buttons
        
        // Add loading state
        const originalText = this.textContent;
        this.textContent = 'Loading...';
        this.disabled = true;
        
        // Simulate loading
        setTimeout(() => {
            this.textContent = originalText;
            this.disabled = false;
        }, 1000);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add hover effects for service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Form field focus effects
document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(field => {
    field.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    field.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// Add CSS for form focus effects
const formStyle = document.createElement('style');
formStyle.textContent = `
    .form-group.focused label {
        transform: translateY(-20px);
        font-size: 0.8rem;
        color: #0e2c34;
    }
    
    .form-group {
        position: relative;
    }
    
    .form-group label {
        position: absolute;
        top: 12px;
        left: 16px;
        transition: all 0.3s ease;
        pointer-events: none;
        color: #999;
    }
`;
document.head.appendChild(formStyle);

// Lightbox functionality
function showLightbox(images, currentIndex) {
    // Remove existing lightbox
    const existingLightbox = document.querySelector('.gallery-lightbox');
    if (existingLightbox) {
        existingLightbox.remove();
    }
    
    // Create lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'gallery-lightbox';
    
    const lightboxHTML = `
        <div class="lightbox-overlay"></div>
        <div class="lightbox-container">
            <img src="${images[currentIndex]}" alt="Project ${currentIndex + 1}" class="lightbox-image">
            <button class="lightbox-nav lightbox-prev" ${currentIndex === 0 ? 'disabled' : ''}>
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="lightbox-nav lightbox-next" ${currentIndex === images.length - 1 ? 'disabled' : ''}>
                <i class="fas fa-chevron-right"></i>
            </button>
            <button class="lightbox-close">
                <i class="fas fa-times"></i>
            </button>
            <div class="lightbox-counter">
                ${currentIndex + 1} / ${images.length}
            </div>
        </div>
    `;
    
    lightbox.innerHTML = lightboxHTML;
    document.body.appendChild(lightbox);
    
    // Show lightbox
    setTimeout(() => {
        lightbox.style.display = 'flex';
    }, 10);
    
    // Navigation functionality
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const overlay = lightbox.querySelector('.lightbox-overlay');
    const image = lightbox.querySelector('.lightbox-image');
    const counter = lightbox.querySelector('.lightbox-counter');
    
    // Previous image
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateLightbox();
        }
    });
    
    // Next image
    nextBtn.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateLightbox();
        }
    });
    
    // Close lightbox
    closeBtn.addEventListener('click', () => lightbox.remove());
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            lightbox.remove();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            lightbox.remove();
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--;
            updateLightbox();
        } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
            currentIndex++;
            updateLightbox();
        }
    });
    
    // Update lightbox content
    function updateLightbox() {
        image.src = images[currentIndex];
        counter.textContent = `${currentIndex + 1} / ${images.length}`;
        
        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === images.length - 1;
        
        // Update button opacity
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentIndex === images.length - 1 ? '0.5' : '1';
    }
}

console.log('Claudio\'s Painting website loaded successfully!'); 