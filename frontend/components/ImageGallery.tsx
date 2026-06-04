"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, Search, ArrowRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

const categories = [
  { id: "all", label: "All Moulds", count: 6 },
  { id: "moulds", label: "Plastic Moulds", count: 6 },
  { id: "products", label: "Products", count: 6 },
];

const allImages: Record<string, GalleryImage[]> = {
  moulds: [
    { src: "/Workshop/Moulds/mould-1.jpeg", alt: "Injection Mould", title: "Gear Mould" },
    { src: "/Workshop/Moulds/mould-2.jpeg", alt: "Custom Mould", title: "Custom Mould Design" },
    { src: "/Workshop/Moulds/mould-3.jpeg", alt: "Multi-Cavity Mould", title: "Multi-Cavity Mould" },
    { src: "/Workshop/Moulds/mould-4.jpeg", alt: "Mould Assembly", title: "Mould Assembly Work" },
    { src: "/Workshop/Moulds/mould-5.jpeg", alt: "Precision Mould", title: "Precision Mould" },
    { src: "/Workshop/Moulds/mould-6.jpeg", alt: "Hot Runner Mould", title: "Hot Runner Mould" },
  ],
  products: [
    { src: "/Workshop/product/product-1.jpeg", alt: "Plastic Component", title: "Finished Component" },
    { src: "/Workshop/product/product-2.jpeg", alt: "Sheet Metal Part", title: "Sheet Metal Part" },
    { src: "/Workshop/product/product-3.jpeg", alt: "Fixture Assembly", title: "Fixture Assembly" },
    { src: "/Workshop/product/product-4.jpeg", alt: "Industrial Jig", title: "Industrial Jig" },
    { src: "/Workshop/product/product-5.jpeg", alt: "Custom Part", title: "Custom Part" },
    { src: "/Workshop/product/product-6.jpeg", alt: "Tool Component", title: "Tool Component" },
  ],
};

const MAX_VISIBLE = 6;

export default function ImageGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const getFilteredImages = () => {
    if (activeCategory === "all") return allImages.moulds;
    return allImages[activeCategory] || [];
  };

  const filteredImages = getFilteredImages();
  const visibleImages = filteredImages.slice(0, MAX_VISIBLE);
  const hasMore = filteredImages.length > MAX_VISIBLE;

  const getCategoryName = () => {
    if (activeCategory === "all" || activeCategory === "moulds") return "Moulds";
    return "Products";
  };

  return (
    <>
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat.id
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            {cat.label}
            <span className="ml-1.5 text-xs opacity-60">({cat.count})</span>
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <AnimatePresence mode="wait">
          {visibleImages.map((image, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              onClick={() => setSelectedImage(image)}
              className="cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-800 group border border-gray-700 hover:border-blue-500/50"
            >
              <div className="relative h-48 md:h-56 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Search Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="w-8 h-8 bg-blue-600/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Search size={14} className="text-white" />
                  </div>
                </div>
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-semibold">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* View All Button */}
      {hasMore && (
        <div className="text-center mt-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-6 py-3 rounded-xl font-medium border border-blue-500/30 hover:bg-blue-600 hover:text-white transition-all duration-300 group"
          >
            View All {getCategoryName()}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition z-10 bg-white/10 rounded-full p-2"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl w-full max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <p className="text-white text-center mt-4 text-lg font-semibold">
                {selectedImage.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}