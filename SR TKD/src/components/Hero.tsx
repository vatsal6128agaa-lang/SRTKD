
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { contact } = siteConfig;

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const heroElement = heroRef.current;
      const heroHeight = heroElement.clientHeight;
      
      // Parallax effect on scroll
      if (scrollPosition <= heroHeight) {
        const translateY = scrollPosition * 0.5;
        heroElement.style.backgroundPositionY = `${translateY}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} id="home" className="bg-gradient-to-b from-tkd-black to-gray-900 relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <div className="overflow-hidden">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in transform translate-y-0 transition-transform duration-700 ease-out">
                <span className="text-tkd-gold animate-scale-in inline-block">SHREE RAM</span><br /> 
                <span className="animate-slide-in-right inline-block delay-200">TAEKWONDO CLUB</span>
              </h1>
            </div>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 animate-fade-in transform transition-all duration-700 delay-400" style={{ animationDelay: '200ms' }}>
              Discover the art of discipline, respect, and self-defense through authentic Taekwondo training in Greater Noida.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button onClick={scrollToContact} className="bg-tkd-red hover:bg-red-700 text-white font-bold px-8 py-6 text-lg animate-pulse-subtle hover:-translate-y-1 transition-all duration-300">
                Book a Free Trial
              </Button>
              <a href={`tel:${contact.phone}`} className="flex items-center gap-2 text-white hover:text-tkd-gold transition-colors group">
                <Phone size={20} className="group-hover:rotate-12 transition-transform duration-300" /> 
                <span className="group-hover:font-bold transition-all duration-300">{contact.phone}</span>
              </a>
            </div>
            
            <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '600ms' }}>
              <a href="https://www.instagram.com/sr_tkd_club07/reel/C6YX4Z9y2lH/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-white hover:text-pink-400 transition-colors transform hover:scale-125 transition-transform duration-300"
                 aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/people/Shree-Ram-Taekwondo-Club/100048679274298/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-white hover:text-blue-400 transition-colors transform hover:scale-125 transition-transform duration-300"
                 aria-label="Facebook">
                <Facebook size={24} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 px-4">
            <div className="bg-white/15 backdrop-filter backdrop-blur-sm rounded-xl p-6 shadow-lg animate-fade-in-right hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <MapPin className="mr-2 text-amber-400 animate-bounce" /> Find Us
              </h2>
              <div 
                className="rounded-lg overflow-hidden shadow-lg mb-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                onClick={() => window.open('https://maps.app.goo.gl/HVvRiTtkDJjoBsQQ7', '_blank')}
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.284203881544!2d77.51187417465366!3d28.465855290436276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea824e5de7b5%3A0x3a7c4f4a220b8c89!2sI-Block%2C%20NS-13%2C%20Block%20I%2C%20Beta%20II%2C%20Greater%20Noida%2C%20Rampur%20Jagir%2C%20Uttar%20Pradesh%20201308%2C%20India!5e0!3m2!1sen!2sus!4v1710868642405!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0, pointerEvents: 'none' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SHREE RAM TAEKWONDO CLUB location map - Click to open in Google Maps"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 px-3 py-1 rounded">
                    Click to open in Google Maps
                  </div>
                </div>
              </div>
              <div className="text-blue-50 space-y-2 text-sm">
                <p className="flex items-center gap-2 hover:bg-white/10 p-2 rounded transition-colors">
                  <MapPin size={16} className="text-amber-400" />
                  <span>{contact.address}</span>
                </p>
                <p className="flex items-center gap-2 hover:bg-white/10 p-2 rounded transition-colors">
                  <Phone size={16} className="text-amber-400" />
                  <span>{contact.phone}</span>
                </p>
                <p className="flex items-center gap-2 hover:bg-white/10 p-2 rounded transition-colors">
                  <Mail size={16} className="text-amber-400" />
                  <span>{contact.email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
          <button 
            onClick={scrollToAbout}
            className="flex flex-col items-center justify-center animate-bounce hover:text-amber-400 transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-sm mb-1">Explore</span>
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
