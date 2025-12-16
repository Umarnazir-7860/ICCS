'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    img: '/b3.jpg',
    caption: 'Welcome to ICC College',
  },
  {
    id: 2,
    img: '/b6.jpg',
    caption: 'Excellence in Education',
  },
  {
    id: 3,
    img: '/iccs-home-labs (2).jpg',
    caption: 'Modern Labs & Facilities',
  },

];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (isHovering) return; // stop sliding on hover
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <div
      className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden  shadow-lg"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence>
        {slides.map(
          (slide, idx) =>
            idx === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                {/* Next.js Image */}
                <Image
                  src={slide.img}
                  alt={slide.caption}
                  fill
                  className="object-cover"
                  priority={idx === 0} // first slide loads fast
                />

                {/* Overlay text */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <motion.h1
                    className="text-white text-3xl md:text-6xl font-serif font-bold text-center px-4"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    {slide.caption}
                  </motion.h1>
                </div>

                {/* Navigation buttons */}
                <div className="absolute  left-1 right-1 top-1/2 flex -translate-y-1/2 justify-between">
                  <button
                    onClick={() =>
                      setCurrentSlide(
                        (currentSlide - 1 + slides.length) % slides.length
                      )
                    }
                    className="btn btn-circle bg-transparent border border-amber-400 text-white hover:scale-110 transform transition"
                  >
                    ❮
                  </button>
                  <button
                    onClick={() =>
                      setCurrentSlide((currentSlide + 1) % slides.length)
                    }
                    className="btn btn-circle bg-transparent border border-amber-400 text-white hover:scale-110 transform transition"
                  >
                    ❯
                  </button>
                </div>
              </motion.div>
              
            )
        )}
      </AnimatePresence>
      
</div>
    
  );
};

export default Carousel;
