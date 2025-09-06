
import React, { useEffect } from 'react';

const AnimationObserver = () => {
  useEffect(() => {
    // Function to handle intersection observations with enhanced animations
    const observeElements = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add active class to trigger the animation
            entry.target.classList.add('active');
            
            // For elements with data-animate attribute, add specific animation classes
            const animationType = entry.target.getAttribute('data-animate');
            if (animationType) {
              switch(animationType) {
                case 'fade':
                  entry.target.classList.add('animate-fade-in');
                  break;
                case 'slide-left':
                  entry.target.classList.add('animate-slide-left');
                  break;
                case 'slide-right':
                  entry.target.classList.add('animate-slide-right');
                  break;
                case 'zoom':
                  entry.target.classList.add('animate-zoom');
                  break;
                case 'bounce':
                  entry.target.classList.add('animate-bounce');
                  break;
                default:
                  break;
              }
            }
          }
        });
      }, { threshold: 0.1 });
      
      // Observe all elements with reveal classes and data-animate attributes
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, [data-animate]').forEach(element => {
        observer.observe(element);
      });
    };
    
    // Call the function to setup observers
    observeElements();
    
    // Setup parallax effect on scroll for elements with parallax class
    const parallaxElements = document.querySelectorAll('.parallax');
    const handleParallax = () => {
      const scrollTop = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        // Cast element to HTMLElement which has the style property
        const htmlElement = element as HTMLElement;
        const speed = element.getAttribute('data-speed') || '0.5';
        const yPos = -(scrollTop * parseFloat(speed));
        htmlElement.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleParallax);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);
  
  return null; // This component doesn't render anything
};

export default AnimationObserver;
