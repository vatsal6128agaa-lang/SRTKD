
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Schedule from '@/components/Schedule';
import Testimonials from '@/components/Testimonials';
import Tournaments from '@/components/Tournaments';
import Footer from '@/components/Footer';
import AnimationObserver from '@/components/AnimationObserver';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "SHREE RAM TAEKWONDO CLUB - Martial Arts Training in Greater Noida";
    
    // Add smooth scrolling to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Add parallax effect to specific elements
    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.classList.add('parallax');
      heroSection.setAttribute('data-speed', '0.3');
    }
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          // Cleanup event listeners
        });
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Schedule />
        <Testimonials />
        <Tournaments />
      </main>
      <Footer />
      <AnimationObserver />
    </div>
  );
};

export default Index;
