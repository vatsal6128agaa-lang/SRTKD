
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-white font-bold text-xl md:text-2xl flex items-center">
              <span className="text-tkd-red">SR</span> <span className="ml-1">TKD CLUB</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-white hover:text-tkd-red transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white hover:text-tkd-red transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('schedule')} 
              className="text-white hover:text-tkd-red transition-colors"
            >
              Schedule
            </button>
            <a
              href="/gallery"
              className="text-white hover:text-tkd-red transition-colors"
            >
              Gallery
            </a>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-white hover:text-tkd-red transition-colors"
            >
              Testimonials
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-tkd-red hover:bg-red-700 text-white font-semibold"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-white hover:text-tkd-red transition-colors py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-white hover:text-tkd-red transition-colors py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('schedule')} 
                className="text-white hover:text-tkd-red transition-colors py-2"
              >
                Schedule
              </button>
              <a
                href="/gallery"
                className="text-white hover:text-tkd-red transition-colors py-2"
              >
                Gallery
              </a>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-white hover:text-tkd-red transition-colors py-2"
              >
                Testimonials
              </button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-tkd-red hover:bg-red-700 text-white w-full"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
