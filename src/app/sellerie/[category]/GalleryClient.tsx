"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";
import { useLanguage } from "@/context/LanguageContext";
import type { CategoryData } from "@/data/gallery";

interface Props {
  category: string;
  data: CategoryData;
}

export default function GalleryClient({ category, data }: Props) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showVideos, setShowVideos] = useState(false);
  const { t } = useLanguage();

  const catKey = category as keyof typeof t.gallery.categories;
  const catT = t.gallery.categories[catKey];

  const images = data.items.filter((item) => !item.isVideo);
  const videos = data.items.filter((item) => item.isVideo);
  const hasVideos = videos.length > 0;

  const handlePrev = useCallback(() => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  }, [selectedImage]);

  const handleNext = useCallback(() => {
    if (selectedImage !== null && selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  }, [selectedImage, images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, handlePrev, handleNext]);

  // Dynamic sporty layout — works for any number of photos
  const getItemLayout = (index: number, total: number) => {
    // Hero image: first one always big
    if (index === 0) {
      return {
        grid: "md:col-span-2 md:row-span-2",
        aspect: "aspect-[4/3] md:aspect-square",
      };
    }

    if (total <= 5) {
      // Small galleries: hero + equal cards
      return { grid: "col-span-1", aspect: "aspect-square" };
    }

    if (total <= 10) {
      // Medium galleries: hero + feature at index 3 + rest
      if (index === 3) {
        return { grid: "md:col-span-2", aspect: "aspect-[2/1]" };
      }
      return { grid: "col-span-1", aspect: "aspect-square" };
    }

    // Large galleries: repeating pattern with features
    const pos = (index - 1) % 7;
    if (pos === 2) {
      return { grid: "md:col-span-2", aspect: "aspect-[2/1]" };
    }
    if (pos === 5) {
      return {
        grid: "md:col-span-2 md:row-span-2",
        aspect: "aspect-[4/3] md:aspect-square",
      };
    }
    return { grid: "col-span-1", aspect: "aspect-square" };
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${data.bannerImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/30" />

        {/* Sporty diagonal accents */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-[20%] -right-[20%] w-[80%] h-[1px] bg-gradient-to-l from-transparent via-gold/15 to-transparent rotate-[-28deg]" />
          <div className="absolute bottom-[30%] -left-[20%] w-[60%] h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent rotate-[-28deg]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-cream/40 text-xs tracking-wider uppercase mb-4">
              <TransitionLink
                href="/"
                className="hover:text-gold transition-colors duration-300"
              >
                {t.gallery.breadcrumbHome}
              </TransitionLink>
              <span>/</span>
              <span className="text-gold">{catT.title}</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream tracking-wider">
              {catT.title}
            </h1>
            <div className="w-16 h-[1px] bg-gold/50 mt-4 mb-4" />
            <p className="text-cream/50 font-light text-[15px] max-w-lg">
              {catT.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Toggle */}
          {hasVideos && (
            <div className="flex justify-center mb-12">
              <div className="flex border border-gold/20 skew-x-[-3deg]">
                <button
                  onClick={() => setShowVideos(false)}
                  className={`px-8 py-3 text-[13px] tracking-[0.15em] uppercase transition-all duration-300 ${
                    !showVideos
                      ? "bg-gold text-dark font-medium"
                      : "text-cream/50 hover:text-gold"
                  }`}
                >
                  <span className="inline-block skew-x-[3deg]">
                    {t.gallery.photos} ({images.length})
                  </span>
                </button>
                <button
                  onClick={() => setShowVideos(true)}
                  className={`px-8 py-3 text-[13px] tracking-[0.15em] uppercase transition-all duration-300 ${
                    showVideos
                      ? "bg-gold text-dark font-medium"
                      : "text-cream/50 hover:text-gold"
                  }`}
                >
                  <span className="inline-block skew-x-[3deg]">
                    {t.gallery.videos} ({videos.length})
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Images Grid — Sporty dynamic masonry */}
          {!showVideos && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3"
            >
              {images.map((item, index) => {
                const layout = getItemLayout(index, images.length);
                return (
                  <motion.div
                    key={item.imagePath}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.06 }}
                    className={`group relative overflow-hidden cursor-pointer ${layout.grid} ${layout.aspect}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={item.imagePath}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      loading="lazy"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-500" />

                    {/* Sporty diagonal sweep on hover */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute inset-y-0 w-[200%] bg-gradient-to-r from-transparent via-gold/[0.08] to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-[1000ms] ease-out skew-x-[-20deg]" />
                    </div>

                    {/* Title + View overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-cream font-display text-lg md:text-xl tracking-wider mb-2">
                        {item.title}
                      </p>
                      <div className="w-6 h-[1px] bg-gold mb-2" />
                      <svg
                        className="w-6 h-6 text-gold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-gold/0 group-hover:border-gold/60 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-2 -translate-y-2" />
                    <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-gold/0 group-hover:border-gold/60 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 translate-x-2 translate-y-2" />
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Videos Grid */}
          {showVideos && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {videos.map((video) => (
                <div key={video.imagePath} className="space-y-3">
                  <div className="relative aspect-video overflow-hidden border border-gold/10">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.imagePath}`}
                      title={video.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <p className="text-cream/50 text-sm tracking-wider capitalize font-light">
                    {video.title}
                  </p>
                </div>
              ))}
            </motion.div>
          )}

          {/* Back to home */}
          <div className="mt-16 text-center">
            <TransitionLink
              href="/#realisations"
              className="inline-flex items-center gap-3 text-cream/40 hover:text-gold text-[13px] tracking-[0.15em] uppercase transition-colors duration-300"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              {t.gallery.backToPortfolio}
            </TransitionLink>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-dark/95 backdrop-blur-md flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-cream/50 hover:text-gold transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              aria-label={t.gallery.close}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 text-cream/30 text-sm tracking-wider">
              {selectedImage + 1} / {images.length}
            </div>

            {/* Previous */}
            {selectedImage > 0 && (
              <button
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-cream/30 hover:text-gold transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label={t.gallery.previous}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* Next */}
            {selectedImage < images.length - 1 && (
              <button
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-cream/30 hover:text-gold transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label={t.gallery.next}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={images[selectedImage].imagePath}
              alt={images[selectedImage].title}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Title */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/40 text-sm tracking-wider capitalize font-light">
              {images[selectedImage].title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
