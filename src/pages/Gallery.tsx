
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

// CUSTOMIZE: Replace this interface and the placeholder images with your actual photos
// You'll want to add your own images to the public folder or import them
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Gallery = () => {
  // CUSTOMIZE: Replace this array with your actual photos
  // Format: { id: unique number, src: path to image, alt: description, width: original width, height: original height }
  const [images, setImages] = useState<GalleryImage[]>([
    { id: 1,  src: '/theFullers/images/CaymenLinZi-02.jpeg',   alt: 'LinZi and Caymen in a field',           width: 800,  height: 1200 },
    { id: 2,  src: '/theFullers/images/EngagementEuro-03.jpeg', alt: 'Kiss on a bridge in Europe',            width: 1600, height: 900  },
    { id: 3,  src: '/theFullers/images/EngagementEuro-07.jpeg', alt: 'Sitting together under a gazebo',       width: 800,  height: 1200 },
    { id: 4,  src: '/theFullers/images/IMG_0091.jpg',           alt: 'Copenhagen waterfront',                 width: 1200, height: 1200 },
    { id: 5,  src: '/theFullers/images/IMG_0218.jpg',           alt: 'Outside Vaekst restaurant',             width: 1200, height: 1200 },
    { id: 6,  src: '/theFullers/images/IMG_0586.jpg',           alt: 'Seattle waterfront',                    width: 1200, height: 1200 },
    { id: 7,  src: '/theFullers/images/IMG_0812.jpg',           alt: 'Celebrating at home',                   width: 1200, height: 900  },
    { id: 8,  src: '/theFullers/images/IMG_1309.jpg',           alt: 'Proposal moment',                       width: 900,  height: 1200 },
    { id: 9,  src: '/theFullers/images/IMG_1318.jpg',           alt: 'Thrift shopping together',              width: 900,  height: 1200 },
    { id: 10, src: '/theFullers/images/IMG_1371.jpg',           alt: 'Evening out in Copenhagen',             width: 1200, height: 900  },
    { id: 11, src: '/theFullers/images/IMG_1632.jpg',           alt: 'Mirror selfie together',                width: 1200, height: 1200 },
    { id: 12, src: '/theFullers/images/IMG_9935.jpg',           alt: 'Mountain lake selfie',                  width: 1200, height: 900  },
    { id: 13, src: '/theFullers/images/eng.jpg',                alt: 'Engagement photo together',             width: 1200, height: 1200 },
    { id: 14, src: '/theFullers/images/ele.jpg',                alt: 'Meeting an elephant',                   width: 1200, height: 1200 },
    { id: 15, src: '/theFullers/images/crab.jpg',               alt: 'Holding a crab',                        width: 1200, height: 1200 },
    { id: 16, src: '/theFullers/images/image0.jpg',             alt: 'Favorite moment together',              width: 1200, height: 1200 },
  ]);

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.id === selectedImage.id);
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto leading-relaxed">
            Some of our favorite moments together. Click any photo to take a closer look.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {images.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-black">
                {/* This message will show when no images have been added yet */}
                No photos have been added yet. Please add your engagement photos to display them here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image) => (
                <div 
                  key={image.id}
                  className="aspect-[3/4] overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-pale-yellow"
                  onClick={() => openLightbox(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={closeLightbox}
          >
            &times;
          </button>

          <button
            className="absolute left-2 md:left-8 text-white text-4xl hover:text-gray-300 transition-colors p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={prevImage}
          >
            &#10094;
          </button>
          
          <img 
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-[90%] max-h-[90vh] object-contain"
          />
          
          <button
            className="absolute right-2 md:right-8 text-white text-4xl hover:text-gray-300 transition-colors p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={nextImage}
          >
            &#10095;
          </button>
        </div>
      )}

    </div>
  );
};

export default Gallery;
