import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import axiosInstance from "../lib/api";
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const [carouselImages, setCarouselImages] = useState([
    {
      id: 1,
      src: "/images/Foto-1.jpeg",
      alt: "Professional training session with engaged participants",
      title: "Training of Trainer Professional",
      description: "Meningkatkan kompetensi trainer dengan metode terbaru",
    },
    {
      id: 2,
      src: "/images/Foto-2.jpeg",
      alt: "Corporate training workshop",
      title: "Workshop Interaktif",
      description: "Sesi pelatihan interaktif dengan partisipasi aktif",
    },
    {
      id: 3,
      src: "/images/Foto-3.jpeg",
      alt: "Team building session",
      title: "Team Building",
      description: "Membangun sinergi tim melalui pelatihan terstruktur",
    },
    {
      id: 4,
      src: "/images/Foto-4.jpeg",
      alt: "Leadership training program",
      title: "Leadership Development",
      description: "Mengembangkan keterampilan kepemimpinan yang efektif",
    },
    {
      id: 5,
      src: "/images/Foto-5.jpeg",
      alt: "Leadership training program",
      title: "Leadership Development",
      description: "Mengembangkan keterampilan kepemimpinan yang efektif",
    },
  ]);

  useEffect(() => {
    axiosInstance.get("/heros").then((res) => {
      const data = res.data.data;
      setCarouselImages(
        data.map((item) => {
          return {
            ...item,
            src: `${import.meta.env.VITE_API_BASE_URL}/${item.src}`.replaceAll(
              "/api/v1",
              "",
            ),
          };
        }),
      );
    });
  }, []);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, carouselImages.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <section className="relative w-full h-[600px] overflow-hidden rounded-2xl shadow-2xl">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/80 via-[#0A1F44]/50 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/90 via-transparent to-transparent z-10"></div>

            {/* Image */}
            <img
              src={carouselImages[currentIndex].src}
              alt={carouselImages[currentIndex].alt}
              className="w-full h-full object-cover"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0  flex items-center">
              <div className="container mx-auto px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="max-w-2xl"
                >
                  <div className="inline-block bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                    🎓 Learnova Consultant
                  </div>

                  <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
                    {carouselImages[currentIndex].title}
                  </h2>

                  <p className="text-xl text-gray-200 mb-8 max-w-lg">
                    {carouselImages[currentIndex].description}
                  </p>

                  <Button
                    onClick={() => scrollToSection("registration")}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-6 text-lg rounded-lg shadow-xl transition-all duration-300"
                  >
                    Daftar Sekarang
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Navigation Buttons
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button> */}
      {/* Play/Pause Button 
      <button
        onClick={togglePlay}
        className="absolute top-4 right-4 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white" />
        )}
      </button>
        */}
      {/* Indicator Dots */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-[#D4AF37] w-8' 
                : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
      Slide Counter
      {/* <div className="absolute bottom-8 right-8 z-30 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
        <span className="text-white font-medium">
          {currentIndex + 1} / {carouselImages.length}
        </span>
      </div> */}
    </section>
  );
};

export default ImageCarousel;
