import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { siteConfig } from '@/config/siteConfig';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageModal = (imageSrc: string, categoryId: string, imageIndex: number) => {
    setSelectedImage(imageSrc);
    setSelectedCategory(categoryId);
    setCurrentImageIndex(imageIndex);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedCategory(null);
    setCurrentImageIndex(0);
  };

  const getCurrentCategoryImages = () => {
    if (!selectedCategory) return [];
    const category = siteConfig.galleryCategories.find(cat => cat.id === selectedCategory);
    return category?.images || [];
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const images = getCurrentCategoryImages();
    if (images.length === 0) return;

    let newIndex;
    if (direction === 'prev') {
      newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
    } else {
      newIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
    }
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-tkd-black text-white py-16 pt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center mb-6">
            <Link to="/">
              <Button variant="ghost" className="text-white hover:text-tkd-red mr-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
            Explore our collection of memories, achievements, and moments from our journey in martial arts excellence.
          </p>
        </div>
      </div>

      {/* Gallery Categories */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        {siteConfig.galleryCategories.map((category) => (
          <section key={category.id} className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{category.title}</h2>
              <p className="text-gray-600 text-lg">{category.description}</p>
            </div>

            {/* Horizontal Scrollable Images */}
            <div className="relative">
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {category.images.map((imageSrc, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-64 md:w-80 h-48 md:h-60 relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => openImageModal(imageSrc, category.id, index)}
                  >
                    <img
                      src={imageSrc}
                      alt={`${category.title} ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl p-0 bg-black border-none">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
            
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Gallery image"
                  className="w-full max-h-[80vh] object-contain"
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded">
                  {currentImageIndex + 1} / {getCurrentCategoryImages().length}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Custom scrollbar styles */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;