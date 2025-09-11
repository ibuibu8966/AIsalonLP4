// Cyberpunk Landing Page - Main JavaScript

class CyberpunkLanding {
    constructor() {
        this.init();
        this.bindEvents();
        this.startAnimations();
    }

    init() {
        // Initialize variables
        this.isScrolling = false;
        this.lastScrollY = 0;
        this.particles = [];
        this.matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01';
        
        // Create additional visual elements
        this.createMatrixRain();
        this.createFloatingParticles();
        this.createScanLines();
        this.initScrollAnimations();
        this.initInteractiveElements();
    }

    bindEvents() {
        // Scroll events
        window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 16));
        
        // Resize events
        window.addEventListener('resize', this.throttle(this.handleResize.bind(this), 100));
        
        // Mouse movement for parallax effects
        document.addEventListener('mousemove', this.handleMouseMove.bind(this));
        
        // Navigation events
        document.querySelectorAll('.nav-link, .cta-primary, .cta-secondary').forEach(link => {
            link.addEventListener('click', this.handleSmoothScroll.bind(this));
        });
        
        // Mobile menu toggle
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        if (mobileToggle) {
            mobileToggle.addEventListener('click', this.toggleMobileMenu.bind(this));
        }
        
        // FAQ toggle
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', this.toggleFAQ.bind(this));
        });
        
        // Interactive hover effects
        this.bindHoverEffects();
    }

    startAnimations() {
        // Start continuous animations
        this.animateFloatingElements();
        this.animateMatrixRain();
        this.animateParticles();
        this.animateStats();
        
        // Typewriter effect for hero title
        this.typewriterEffect();
        
        // Glitch effects
        this.startGlitchEffects();
    }

    // Matrix Rain Effect
    createMatrixRain() {
        const matrixContainer = document.querySelector('.matrix-rain');
        if (!matrixContainer) return;

        // Clear existing content
        matrixContainer.innerHTML = '';
        
        const columns = Math.floor(window.innerWidth / 20);
        
        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.className = 'matrix-column';
            column.style.cssText = `
                position: absolute;
                left: ${i * 20}px;
                top: -100vh;
                width: 20px;
                color: #00ff7f;
                font-family: monospace;
                font-size: 14px;
                line-height: 20px;
                white-space: pre;
                pointer-events: none;
                animation: matrix-fall ${5 + Math.random() * 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
                opacity: ${0.3 + Math.random() * 0.7};
            `;
            
            // Generate random characters
            let text = '';
            const height = Math.floor(Math.random() * 20) + 10;
            for (let j = 0; j < height; j++) {
                text += this.matrixChars[Math.floor(Math.random() * this.matrixChars.length)] + '\n';
            }
            column.textContent = text;
            
            matrixContainer.appendChild(column);
        }
        
        // Add matrix fall animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes matrix-fall {
                0% { transform: translateY(-100vh); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(100vh); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    // Floating Particles
    createFloatingParticles() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particle-container';
        particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        `;
        document.body.appendChild(particleContainer);

        // Create particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: ${2 + Math.random() * 4}px;
                height: ${2 + Math.random() * 4}px;
                background: ${this.getRandomNeonColor()};
                border-radius: 50%;
                box-shadow: 0 0 10px currentColor;
                animation: particle-float ${10 + Math.random() * 20}s linear infinite;
                animation-delay: ${Math.random() * 20}s;
            `;
            
            // Random starting position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            particleContainer.appendChild(particle);
            this.particles.push(particle);
        }
    }

    // Scan Lines Effect
    createScanLines() {
        const scanLine = document.createElement('div');
        scanLine.className = 'scan-line';
        scanLine.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00ffff, transparent);
            box-shadow: 0 0 10px #00ffff;
            z-index: 1000;
            pointer-events: none;
            animation: scan-line 8s linear infinite;
            opacity: 0.3;
        `;
        document.body.appendChild(scanLine);
    }

    // Scroll Animations
    initScrollAnimations() {
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fade-in-up 0.8s ease-out forwards';
                    entry.target.style.opacity = '1';
                }
            });
        }, { threshold: 0.1 });

        // Observe elements
        document.querySelectorAll('.problem-item, .timeline-item, .capability-card, .feature-card, .benefit-card, .instructor-card').forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }

    // Interactive Elements
    initInteractiveElements() {
        // Glowing cursor effect
        this.createGlowingCursor();
        
        // Interactive cards
        document.querySelectorAll('.feature-card, .capability-card, .benefit-card').forEach(card => {
            card.addEventListener('mouseenter', this.cardHoverEnter.bind(this));
            card.addEventListener('mouseleave', this.cardHoverLeave.bind(this));
        });
        
        // CTA button effects
        document.querySelectorAll('.cta-primary, .final-cta-button').forEach(btn => {
            btn.addEventListener('mouseenter', this.ctaHoverEnter.bind(this));
            btn.addEventListener('mouseleave', this.ctaHoverLeave.bind(this));
        });
    }

    // Glowing Cursor
    createGlowingCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'cyber-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid #00ffff;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: all 0.1s ease;
            box-shadow: 0 0 20px #00ffff;
            opacity: 0;
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursor.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });
    }

    // Event Handlers
    handleScroll() {
        const currentScrollY = window.scrollY;
        const header = document.querySelector('.header');
        
        // Header background opacity
        if (header) {
            const opacity = Math.min(currentScrollY / 100, 0.95);
            header.style.background = `rgba(10, 10, 10, ${opacity})`;
        }
        
        // Parallax effect for hero elements
        const heroElements = document.querySelectorAll('.floating-elements .float-item');
        heroElements.forEach((el, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = currentScrollY * speed;
            el.style.transform = `translateY(${yPos}px)`;
        });
        
        this.lastScrollY = currentScrollY;
    }

    handleResize() {
        // Recreate matrix rain for new window size
        this.createMatrixRain();
        
        // Adjust particle positions
        this.particles.forEach(particle => {
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
        });
    }

    handleMouseMove(e) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        // Parallax effect for background elements
        const xPercent = (clientX / innerWidth - 0.5) * 2;
        const yPercent = (clientY / innerHeight - 0.5) * 2;
        
        const circuitLines = document.querySelector('.circuit-lines');
        if (circuitLines) {
            circuitLines.style.transform = `translate(${xPercent * 10}px, ${yPercent * 10}px)`;
        }
        
        const neonGrid = document.querySelector('.neon-grid');
        if (neonGrid) {
            neonGrid.style.transform = `translate(${xPercent * -5}px, ${yPercent * -5}px)`;
        }
    }

    handleSmoothScroll(e) {
        const href = e.currentTarget.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }

    toggleMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        const toggle = document.querySelector('.mobile-menu-toggle');
        
        if (navLinks && toggle) {
            navLinks.classList.toggle('active');
            toggle.classList.toggle('active');
        }
    }

    toggleFAQ(e) {
        const question = e.currentTarget;
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');
        
        if (answer) {
            const isOpen = answer.style.maxHeight;
            
            // Close all other FAQs
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.maxHeight = null;
                ans.previousElementSibling.querySelector('i').style.transform = 'rotate(0deg)';
            });
            
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            }
        }
    }

    // Hover Effects
    bindHoverEffects() {
        // Stats counter animation on hover
        document.querySelectorAll('.stat-item').forEach(stat => {
            stat.addEventListener('mouseenter', () => {
                const number = stat.querySelector('.stat-number');
                if (number) {
                    number.style.animation = 'none';
                    setTimeout(() => {
                        number.style.animation = 'number-pulse 1s ease-in-out';
                    }, 10);
                }
            });
        });
        
        // Timeline item interactive effects
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                const icon = item.querySelector('.timeline-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.2)';
                    icon.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.8)';
                }
            });
            
            item.addEventListener('mouseleave', () => {
                const icon = item.querySelector('.timeline-icon');
                if (icon) {
                    icon.style.transform = 'scale(1)';
                    icon.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.5)';
                }
            });
        });
    }

    cardHoverEnter(e) {
        const card = e.currentTarget;
        const icon = card.querySelector('i');
        
        card.style.transform = 'translateY(-10px) scale(1.02)';
        card.style.boxShadow = '0 20px 40px rgba(0, 255, 255, 0.3)';
        
        if (icon) {
            icon.style.animation = 'icon-spin 1s ease-in-out';
        }
    }

    cardHoverLeave(e) {
        const card = e.currentTarget;
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '';
    }

    ctaHoverEnter(e) {
        const btn = e.currentTarget;
        btn.style.transform = 'translateY(-3px) scale(1.05)';
        btn.style.boxShadow = '0 15px 30px rgba(255, 0, 127, 0.5)';
    }

    ctaHoverLeave(e) {
        const btn = e.currentTarget;
        btn.style.transform = 'translateY(0) scale(1)';
        btn.style.boxShadow = '';
    }

    // Animation Functions
    animateFloatingElements() {
        const elements = document.querySelectorAll('.float-item');
        elements.forEach((el, index) => {
            const delay = index * 2000;
            const duration = 10000 + (Math.random() * 5000);
            
            setInterval(() => {
                const randomX = (Math.random() - 0.5) * 100;
                const randomY = (Math.random() - 0.5) * 100;
                
                el.style.transition = 'transform 3s ease-in-out';
                el.style.transform = `translate(${randomX}px, ${randomY}px)`;
            }, duration);
        });
    }

    animateMatrixRain() {
        setInterval(() => {
            const columns = document.querySelectorAll('.matrix-column');
            const randomColumn = columns[Math.floor(Math.random() * columns.length)];
            
            if (randomColumn) {
                let text = '';
                const height = Math.floor(Math.random() * 20) + 10;
                for (let i = 0; i < height; i++) {
                    text += this.matrixChars[Math.floor(Math.random() * this.matrixChars.length)] + '\n';
                }
                randomColumn.textContent = text;
            }
        }, 1000);
    }

    animateParticles() {
        setInterval(() => {
            this.particles.forEach(particle => {
                const randomColor = this.getRandomNeonColor();
                particle.style.background = randomColor;
                particle.style.boxShadow = `0 0 10px ${randomColor}`;
            });
        }, 3000);
    }

    animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const finalValue = stat.textContent;
            const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
            
            if (numericValue) {
                let currentValue = 0;
                const increment = Math.ceil(numericValue / 50);
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= numericValue) {
                        currentValue = numericValue;
                        clearInterval(counter);
                    }
                    stat.textContent = finalValue.replace(/\d+/, currentValue);
                }, 50);
            }
        });
    }

    typewriterEffect() {
        const titleLines = document.querySelectorAll('.hero-title .title-line');
        titleLines.forEach((line, index) => {
            const text = line.textContent;
            line.textContent = '';
            line.style.opacity = '1';
            
            setTimeout(() => {
                let i = 0;
                const typeInterval = setInterval(() => {
                    line.textContent += text[i];
                    i++;
                    if (i >= text.length) {
                        clearInterval(typeInterval);
                    }
                }, 50);
            }, index * 1000);
        });
    }

    startGlitchEffects() {
        const glitchElements = document.querySelectorAll('.section-title, .neon-text');
        
        setInterval(() => {
            const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
            if (randomElement && Math.random() > 0.7) {
                randomElement.style.animation = 'glitch 0.3s ease-in-out';
                setTimeout(() => {
                    randomElement.style.animation = '';
                }, 300);
            }
        }, 5000);
    }

    // Utility Functions
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    getRandomNeonColor() {
        const colors = ['#00ffff', '#ff007f', '#8000ff', '#00ff7f', '#ffff00', '#ff4000'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CyberpunkLanding();
});

// Add loading screen animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 1s ease;
    `;
    
    loader.innerHTML = `
        <div style="
            font-family: 'Orbitron', monospace;
            font-size: 2rem;
            color: #00ffff;
            text-shadow: 0 0 20px #00ffff;
            animation: neon-flicker 2s infinite;
        ">LOADING...</div>
    `;
    
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(loader);
        }, 1000);
    }, 2000);
});