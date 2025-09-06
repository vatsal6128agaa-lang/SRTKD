
// import React from 'react';
// import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
// import { siteConfig } from '@/config/siteConfig';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   const { contact } = siteConfig;
  
//   const scrollToSection = (sectionId: string) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };
  
//   return (
//     <footer className="bg-tkd-black text-white pt-12 pb-6">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4">SHREE RAM TAEKWONDO CLUB</h3>
//             <p className="text-gray-300 mb-4">
//               Providing quality martial arts training in Greater Noida since 2015. 
//               Join us on the path to physical and mental excellence.
//             </p>
//             <div className="flex space-x-4">
//               <a 
//                 href="https://www.instagram.com/sr_tkd_club07/reel/C6YX4Z9y2lH/" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-white hover:text-pink-400 transition-colors"
//                 aria-label="Instagram"
//               >
//                 <Instagram size={20} />
//               </a>
//               <a 
//                 href="https://www.facebook.com/people/Shree-Ram-Taekwondo-Club/100048679274298/" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-white hover:text-blue-400 transition-colors"
//                 aria-label="Facebook"
//               >
//                 <Facebook size={20} />
//               </a>
//             </div>
//           </div>
          
//           <div>
//             <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <button 
//                   onClick={() => scrollToSection('home')} 
//                   className="text-gray-300 hover:text-white transition-colors"
//                 >
//                   Home
//                 </button>
//               </li>
//               <li>
//                 <button 
//                   onClick={() => scrollToSection('about')} 
//                   className="text-gray-300 hover:text-white transition-colors"
//                 >
//                   About Us
//                 </button>
//               </li>
//               <li>
//                 <button 
//                   onClick={() => scrollToSection('schedule')} 
//                   className="text-gray-300 hover:text-white transition-colors"
//                 >
//                   Class Schedule
//                 </button>
//               </li>
//               <li>
//                 <a
//                   href="/gallery"
//                   className="text-gray-300 hover:text-white transition-colors"
//                 >
//                   Gallery
//                 </a>
//               </li>
//               <li>
//                 <button 
//                   onClick={() => scrollToSection('testimonials')} 
//                   className="text-gray-300 hover:text-white transition-colors"
//                 >
//                   Testimonials
//                 </button>
//               </li>
//               <li>
//                 {/* <button 
//                   onClick={() => scrollToSection('contact')} 
//                   className="text-gray-300 hover:text-white transition-colors"
//                 >
//                   Contact Us
//                 </button> */}
//               </li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-xl font-bold mb-4">Contact Info</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <MapPin size={18} className="text-tkd-red mr-2 mt-1 flex-shrink-0" />
//                 <span className="text-gray-300">
//                   {contact.address}
//                 </span>
//               </li>
//               <li className="flex items-center">
//                 <Phone size={18} className="text-tkd-red mr-2 flex-shrink-0" />
//                 <a href={`tel:${contact.phone}`} className="text-gray-300 hover:text-white transition-colors">
//                   {contact.phone}
//                 </a>
//               </li>
//               <li className="flex items-center">
//                 <Mail size={18} className="text-tkd-red mr-2 flex-shrink-0" />
//                 <a href={`mailto:${contact.email}`} className="text-gray-300 hover:text-white transition-colors">
//                   {contact.email}
//                 </a>
//               </li>
//             </ul>
//           </div>
          
//           {/* <div>
//             <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
//             <ul className="space-y-2">
//               {contact.openingHours.map((schedule, index) => (
//                 <li key={index} className="flex justify-between">
//                   <span className="text-gray-300">{schedule.day}:</span>
//                   <span className={`${schedule.isOpen ? 'text-gray-300' : 'text-red-400'}`}>
//                     {schedule.hours}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div> */}
//         </div>
        
//         <div className="border-t border-gray-800 mt-10 pt-6 text-center">
//           <p className="text-gray-400 text-sm">
//             &copy; {currentYear} SHREE RAM TAEKWONDO CLUB. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { contact } = siteConfig;

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-tkd-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">SHREE RAM TAEKWONDO CLUB</h3>
            <p className="text-gray-300 mb-4">
              Providing quality martial arts training in Greater Noida since 2015.
              Join us on the path to physical and mental excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/sr_tkd_club07/reel/C6YX4Z9y2lH/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/people/Shree-Ram-Taekwondo-Club/100048679274298/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('schedule')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Class Schedule
                </button>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info - Moved to Right */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-tkd-red mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  {contact.address}
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-tkd-red mr-2 flex-shrink-0" />
                <a href={`tel:${contact.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-tkd-red mr-2 flex-shrink-0" />
                <a href={`mailto:${contact.email}`} className="text-gray-300 hover:text-white transition-colors">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} SHREE RAM TAEKWONDO CLUB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
