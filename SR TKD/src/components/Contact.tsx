// import React from 'react';
// import { MapPin, Phone, Mail, Clock } from 'lucide-react';
// import { siteConfig } from '@/config/siteConfig';

// const Contact = () => {
//   const { contact } = siteConfig;

//   return (
//     <section id="contact" className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
//           <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
//             Ready to start your martial arts journey? Get in touch with us today!
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
              
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <MapPin className="w-6 h-6 text-tkd-red mt-1" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
//                     <p className="text-gray-600">{contact.address}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <Phone className="w-6 h-6 text-tkd-red mt-1" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
//                     <a 
//                       href={`tel:${contact.phone}`}
//                       className="text-gray-600 hover:text-tkd-red transition-colors"
//                     >
//                       {contact.phone}
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <Mail className="w-6 h-6 text-tkd-red mt-1" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
//                     <a 
//                       href={`mailto:${contact.email}`}
//                       className="text-gray-600 hover:text-tkd-red transition-colors"
//                     >
//                       {contact.email}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Opening Hours */}
//             <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
//                 <Clock className="w-6 h-6 text-tkd-red mr-2" />
//                 Opening Hours
//               </h3>
              
//               <div className="space-y-3">
//                 {contact.openingHours.map((schedule, index) => (
//                   <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
//                     <span className="font-medium text-gray-700">{schedule.day}</span>
//                     <span className={`${schedule.isOpen ? 'text-green-600' : 'text-red-500'} font-medium`}>
//                       {schedule.hours}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Map */}
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//             <div 
//               className="relative w-full h-full min-h-[400px] cursor-pointer group"
//               onClick={() => window.open(contact.mapLink, '_blank')}
//             >
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.284203881544!2d77.51187417465366!3d28.465855290436276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea824e5de7b5%3A0x3a7c4f4a220b8c89!2sShree%20Ram%20Taekwondo%20Classes!5e0!3m2!1sen!2sus!4v1710868642405!5m2!1sen!2sus"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0, pointerEvents: 'none' }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Shree Ram Taekwondo Classes Location"
//                 className="w-full h-full"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
//                 <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 px-4 py-2 rounded-lg">
//                   <p className="font-semibold">Click to open in Google Maps</p>
//                   <p className="text-sm">Shree Ram Taekwondo Classes</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;