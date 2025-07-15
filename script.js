// VECTOR Landing Page JavaScript

// Modal functionality
function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Focus on email input
    setTimeout(() => {
        document.getElementById('email').focus();
    }, 100);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Form submission handler
function handleFormSubmit(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const form = document.getElementById('lead-form');
    
    // Basic email validation
    if (!isValidEmail(email)) {
        alert('Please enter a valid company email address.');
        return;
    }
    
    // Show success message
    form.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
            <h3 style="color: var(--vector-purple); margin-bottom: 1rem;">Thank you!</h3>
            <p style="color: #666; margin-bottom: 1rem;">Your VECTOR Playbook is being prepared for download.</p>
            <p style="color: #666; font-size: 0.875rem;">We'll also send you a copy to ${email}</p>
        </div>
    `;
    
    // Simulate download (in real implementation, this would trigger actual download)
    setTimeout(() => {
        // Here you would typically:
        // 1. Send the email to your backend/CRM
        // 2. Trigger the actual PDF download
        // 3. Track the conversion in analytics
        
        console.log('Lead captured:', email);
        
        // Close modal after 3 seconds
        setTimeout(() => {
            closeModal();
            // Reset form
            setTimeout(() => {
                form.innerHTML = `
                    <div class="form-group">
                        <label for="email">Company Email</label>
                        <input type="email" id="email" name="email" required placeholder="yourname@company.com">
                    </div>
                    <button type="submit" class="btn btn-primary btn-full">Download Playbook</button>
                `;
            }, 500);
        }, 3000);
    }, 1000);
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animations to cards and sections
document.addEventListener('DOMContentLoaded', function() {
    // Animate framework cards
    const frameworkCards = document.querySelectorAll('.framework-card');
    frameworkCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate process cards
    const processCards = document.querySelectorAll('.process-card');
    processCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate story cards
    const storyCards = document.querySelectorAll('.story-card');
    storyCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--black)';
        header.style.backdropFilter = 'none';
    }
});

// Analytics tracking (placeholder for future implementation)
function trackEvent(eventName, properties = {}) {
    // Placeholder for analytics tracking
    console.log('Analytics Event:', eventName, properties);
    
    // Example implementation for Google Analytics 4:
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, properties);
    // }
}

// Track CTA clicks
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('cta_click', {
                button_text: this.textContent,
                section: this.closest('section')?.className || 'unknown'
            });
        });
    });
    
    // Track form submissions
    const form = document.getElementById('lead-form');
    if (form) {
        form.addEventListener('submit', function() {
            trackEvent('lead_form_submit', {
                form_type: 'playbook_download'
            });
        });
    }
});

// Performance optimization: Lazy load images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        imageObserver.observe(img);
    });
}); 