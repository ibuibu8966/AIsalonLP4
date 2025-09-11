// Advanced Cyberpunk Animations

class CyberpunkAnimations {
    constructor() {
        this.init();
        this.startAdvancedEffects();
    }

    init() {
        this.createHologramEffects();
        this.createEnergyPulses();
        this.createDataStreams();
        this.createCircuitAnimations();
        this.initInstructorAnimations();
        this.initPricingAnimations();
        this.initCurriculumAnimations();
    }

    startAdvancedEffects() {
        this.startHologramFlicker();
        this.startEnergyWaves();
        this.startDataFlow();
        this.startGlitchText();
    }

    // Hologram Effects
    createHologramEffects() {
        const hologramElements = document.querySelectorAll('.instructor-card, .pricing-card, .final-cta-button');
        
        hologramElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.addHologramEffect(element);
            });
            
            element.addEventListener('mouseleave', () => {
                this.removeHologramEffect(element);
            });
        });
    }

    addHologramEffect(element) {
        const hologram = document.createElement('div');
        hologram.className = 'hologram-overlay';
        hologram.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
                45deg,
                transparent 30%,
                rgba(0, 255, 255, 0.1) 50%,
                transparent 70%
            );
            background-size: 20px 20px;
            animation: hologram 2s ease-in-out infinite;
            pointer-events: none;
            z-index: 1;
        `;
        
        element.style.position = 'relative';
        element.appendChild(hologram);
    }

    removeHologramEffect(element) {
        const hologram = element.querySelector('.hologram-overlay');
        if (hologram) {
            hologram.remove();
        }
    }

    startHologramFlicker() {
        setInterval(() => {
            const elements = document.querySelectorAll('.capability-card, .feature-card');
            const randomElement = elements[Math.floor(Math.random() * elements.length)];
            
            if (randomElement && Math.random() > 0.8) {
                randomElement.style.opacity = '0.7';
                setTimeout(() => {
                    randomElement.style.opacity = '1';
                }, 100);
            }
        }, 2000);
    }

    // Energy Pulses
    createEnergyPulses() {
        const energyContainers = document.querySelectorAll('.hero, .features, .transformation');
        
        energyContainers.forEach(container => {
            const energyPulse = document.createElement('div');
            energyPulse.className = 'energy-pulse';
            energyPulse.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 10px;
                height: 10px;
                background: radial-gradient(circle, #00ffff 0%, transparent 70%);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                animation: energy-pulse 3s ease-out infinite;
                pointer-events: none;
                z-index: 1;
            `;
            
            container.style.position = 'relative';
            container.appendChild(energyPulse);
        });
    }

    startEnergyWaves() {
        setInterval(() => {
            const pulses = document.querySelectorAll('.energy-pulse');
            pulses.forEach(pulse => {
                pulse.style.animationDelay = Math.random() * 2 + 's';
            });
        }, 4000);
    }

    // Data Streams
    createDataStreams() {
        const streamContainer = document.createElement('div');
        streamContainer.className = 'data-streams';
        streamContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
        `;
        document.body.appendChild(streamContainer);

        // Create horizontal data streams
        for (let i = 0; i < 5; i++) {
            const stream = document.createElement('div');
            stream.style.cssText = `
                position: absolute;
                top: ${20 + i * 15}%;
                left: -100px;
                width: 100px;
                height: 1px;
                background: linear-gradient(90deg, transparent, #00ff7f, transparent);
                box-shadow: 0 0 10px #00ff7f;
                animation: data-stream ${8 + Math.random() * 4}s linear infinite;
                animation-delay: ${i * 2}s;
                opacity: 0.6;
            `;
            streamContainer.appendChild(stream);
        }

        // Create vertical data streams
        for (let i = 0; i < 3; i++) {
            const stream = document.createElement('div');
            stream.style.cssText = `
                position: absolute;
                top: -50px;
                left: ${30 + i * 25}%;
                width: 1px;
                height: 50px;
                background: linear-gradient(180deg, transparent, #ff007f, transparent);
                box-shadow: 0 0 10px #ff007f;
                animation: data-stream-vertical ${10 + Math.random() * 5}s linear infinite;
                animation-delay: ${i * 3}s;
                opacity: 0.4;
            `;
            streamContainer.appendChild(stream);
        }

        // Add vertical stream animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes data-stream-vertical {
                0% { transform: translateY(-50px); }
                100% { transform: translateY(100vh); }
            }
        `;
        document.head.appendChild(style);
    }

    startDataFlow() {
        setInterval(() => {
            const streams = document.querySelectorAll('.data-streams > div');
            streams.forEach(stream => {
                if (Math.random() > 0.7) {
                    stream.style.opacity = '1';
                    setTimeout(() => {
                        stream.style.opacity = '0.4';
                    }, 500);
                }
            });
        }, 3000);
    }

    // Circuit Animations
    createCircuitAnimations() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach((section, index) => {
            if (index % 2 === 0) {
                const circuit = document.createElement('div');
                circuit.className = 'circuit-animation';
                circuit.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: 
                        linear-gradient(90deg, transparent 48%, rgba(0, 255, 255, 0.1) 49%, rgba(0, 255, 255, 0.1) 51%, transparent 52%),
                        linear-gradient(0deg, transparent 48%, rgba(255, 0, 127, 0.1) 49%, rgba(255, 0, 127, 0.1) 51%, transparent 52%);
                    background-size: 100px 100px, 100px 100px;
                    animation: circuit-flow ${15 + index * 2}s linear infinite;
                    pointer-events: none;
                    z-index: 0;
                    opacity: 0.3;
                `;
                
                section.style.position = 'relative';
                section.appendChild(circuit);
            }
        });

        // Add circuit flow animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes circuit-flow {
                0% { background-position: 0 0, 0 0; }
                100% { background-position: 100px 100px, 100px 100px; }
            }
        `;
        document.head.appendChild(style);
    }

    // Instructor Animations
    initInstructorAnimations() {
        const instructorCards = document.querySelectorAll('.instructor-card');
        
        instructorCards.forEach((card, index) => {
            // Add glow effect
            card.style.animation = `instructor-glow ${4 + index}s ease-in-out infinite alternate`;
            
            // Avatar pulse
            const avatar = card.querySelector('.instructor-avatar');
            if (avatar) {
                avatar.style.animation = 'avatar-pulse 3s ease-in-out infinite';
                
                // Add avatar glow
                const glow = card.querySelector('.avatar-glow');
                if (glow) {
                    glow.style.cssText = `
                        position: absolute;
                        top: -10px;
                        left: -10px;
                        right: -10px;
                        bottom: -10px;
                        background: radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, transparent 70%);
                        border-radius: 50%;
                        animation: avatar-pulse 2s ease-in-out infinite;
                        z-index: -1;
                    `;
                }
            }
            
            // Skill tags animation
            const skillTags = card.querySelectorAll('.skill-tag');
            skillTags.forEach((tag, tagIndex) => {
                tag.style.animation = `skill-tag-float ${2 + tagIndex * 0.5}s ease-in-out infinite`;
                tag.style.animationDelay = `${tagIndex * 0.2}s`;
            });
        });
    }

    // Pricing Animations
    initPricingAnimations() {
        const pricingCard = document.querySelector('.pricing-card');
        if (pricingCard) {
            pricingCard.style.animation = 'pricing-glow 3s ease-in-out infinite alternate';
            
            const price = pricingCard.querySelector('.amount');
            if (price) {
                price.style.animation = 'price-pulse 2s ease-in-out infinite';
            }
            
            const checkmarks = pricingCard.querySelectorAll('.fas.fa-check');
            checkmarks.forEach((check, index) => {
                check.style.animation = `check-bounce ${1.5 + index * 0.1}s ease-in-out infinite`;
                check.style.animationDelay = `${index * 0.1}s`;
            });
        }
    }

    // Curriculum Animations
    initCurriculumAnimations() {
        const curriculumItems = document.querySelectorAll('.curriculum-item');
        
        curriculumItems.forEach((item, index) => {
            item.style.animation = `curriculum-hover ${3 + index * 0.5}s ease-in-out infinite alternate`;
            
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-5px) scale(1.02)';
                item.style.boxShadow = '0 15px 30px rgba(0, 255, 255, 0.3)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0) scale(1)';
                item.style.boxShadow = '';
            });
        });
    }

    // Case Studies Animations
    initCaseStudiesAnimations() {
        const caseItems = document.querySelectorAll('.case-item');
        
        caseItems.forEach((item, index) => {
            item.style.animation = `case-float ${4 + index * 0.5}s ease-in-out infinite`;
            
            const icon = item.querySelector('.case-icon');
            if (icon) {
                icon.addEventListener('mouseenter', () => {
                    icon.style.transform = 'rotate(360deg) scale(1.2)';
                    icon.style.transition = 'all 0.5s ease';
                });
                
                icon.addEventListener('mouseleave', () => {
                    icon.style.transform = 'rotate(0deg) scale(1)';
                });
            }
        });
    }

    // Process Animations
    initProcessAnimations() {
        const processSteps = document.querySelectorAll('.process-step');
        
        processSteps.forEach((step, index) => {
            step.style.animation = `process-step-glow ${3 + index * 0.5}s ease-in-out infinite alternate`;
            
            const stepNumber = step.querySelector('.step-number');
            if (stepNumber) {
                stepNumber.style.animation = `step-number-rotate ${8 + index * 2}s linear infinite`;
            }
        });
    }

    // FAQ Animations
    initFAQAnimations() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach((item, index) => {
            item.style.animation = `faq-item-hover ${2 + index * 0.3}s ease-in-out infinite alternate`;
            
            const question = item.querySelector('.faq-question');
            if (question) {
                question.addEventListener('click', () => {
                    const chevron = question.querySelector('.fa-chevron-down');
                    if (chevron) {
                        chevron.style.animation = 'chevron-rotate 0.3s ease';
                    }
                });
            }
        });
    }

    // Final CTA Animations
    initFinalCTAAnimations() {
        const finalCTA = document.querySelector('.final-cta-button');
        if (finalCTA) {
            finalCTA.style.animation = 'final-cta-pulse 2s ease-in-out infinite';
            
            const rocketIcon = finalCTA.querySelector('.fa-rocket');
            if (rocketIcon) {
                rocketIcon.style.animation = 'rocket-launch 3s ease-in-out infinite';
            }
        }
        
        const benefitItems = document.querySelectorAll('.cta-benefits .benefit-item');
        benefitItems.forEach((item, index) => {
            item.style.animation = `benefit-float ${2.5 + index * 0.5}s ease-in-out infinite`;
            item.style.animationDelay = `${index * 0.3}s`;
        });
    }

    // Glitch Text Effect
    startGlitchText() {
        const glitchTargets = document.querySelectorAll('.hero-title, .section-title');
        
        setInterval(() => {
            const randomTarget = glitchTargets[Math.floor(Math.random() * glitchTargets.length)];
            if (randomTarget && Math.random() > 0.85) {
                const originalText = randomTarget.textContent;
                const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
                
                // Create glitch effect
                let glitchText = '';
                for (let i = 0; i < originalText.length; i++) {
                    if (Math.random() > 0.8) {
                        glitchText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
                    } else {
                        glitchText += originalText[i];
                    }
                }
                
                randomTarget.textContent = glitchText;
                randomTarget.style.color = '#ff0000';
                randomTarget.style.textShadow = '2px 0 #00ffff, -2px 0 #ff00ff';
                
                setTimeout(() => {
                    randomTarget.textContent = originalText;
                    randomTarget.style.color = '';
                    randomTarget.style.textShadow = '';
                }, 150);
            }
        }, 8000);
    }

    // Performance monitoring
    monitorPerformance() {
        let frameCount = 0;
        let lastTime = performance.now();
        
        const checkPerformance = () => {
            frameCount++;
            const currentTime = performance.now();
            
            if (currentTime - lastTime >= 1000) {
                const fps = frameCount;
                frameCount = 0;
                lastTime = currentTime;
                
                // Reduce animations if FPS is too low
                if (fps < 30) {
                    this.reduceAnimations();
                }
            }
            
            requestAnimationFrame(checkPerformance);
        };
        
        requestAnimationFrame(checkPerformance);
    }

    reduceAnimations() {
        // Disable some animations for better performance
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            if (index % 2 === 0) {
                particle.style.display = 'none';
            }
        });
        
        const matrixColumns = document.querySelectorAll('.matrix-column');
        matrixColumns.forEach((column, index) => {
            if (index % 3 === 0) {
                column.style.display = 'none';
            }
        });
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const animations = new CyberpunkAnimations();
    
    // Start performance monitoring
    animations.monitorPerformance();
    
    // Initialize remaining animations with delay to prevent blocking
    setTimeout(() => {
        animations.initCaseStudiesAnimations();
        animations.initProcessAnimations();
        animations.initFAQAnimations();
        animations.initFinalCTAAnimations();
    }, 1000);
});

// Add CSS for new animations
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    /* Additional Cyberpunk Animations */
    
    .instructor-card {
        transition: all 0.3s ease;
    }
    
    .instructor-avatar {
        position: relative;
        overflow: hidden;
    }
    
    .skill-tag {
        display: inline-block;
        background: rgba(0, 255, 255, 0.2);
        border: 1px solid rgba(0, 255, 255, 0.5);
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.8rem;
        margin: 2px;
        transition: all 0.3s ease;
    }
    
    .skill-tag:hover {
        background: rgba(0, 255, 255, 0.3);
        box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    }
    
    .pricing-card {
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    
    .curriculum-item {
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .case-item {
        transition: all 0.3s ease;
    }
    
    .case-icon {
        transition: all 0.5s ease;
    }
    
    .process-step {
        transition: all 0.3s ease;
    }
    
    .faq-item {
        transition: all 0.3s ease;
    }
    
    .final-cta-button {
        position: relative;
        overflow: hidden;
    }
    
    .benefit-item {
        transition: all 0.3s ease;
    }
    
    /* Performance optimized animations */
    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`;

document.head.appendChild(additionalStyles);