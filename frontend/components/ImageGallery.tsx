"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

const categories = [
  { id: "all", label: "All Works" },
  { id: "moulds", label: "Plastic Moulds" },
  { id: "products", label: "Products" },
  { id: "machines", label: "Workshop & Machines" },
];

const allImages: Record<string, GalleryImage[]> = {
  moulds: [
    { src: "/Workshop/Moulds/mould-1.jpeg", alt: "Injection Mould", title: "Plastic Injection Mould" },
    { src: "/Workshop/Moulds/mould-2.jpeg", alt: "Custom Mould", title: "Custom Mould Design" },
    { src: "/Workshop/Moulds/mould-3.jpeg", alt: "Multi-Cavity Mould", title: "Multi-Cavity Mould" },
    { src: "/Workshop/Moulds/mould-4.jpeg", alt: "Mould Assembly", title: "Mould Assembly Work" },
    { src: "/Workshop/Moulds/mould-5.jpeg", alt: "Precision Mould", title: "Precision Mould" },
    { src: "/Workshop/Moulds/mould-6.jpeg", alt: "Hot Runner Mould", title: "Hot Runner Mould System" },
  ],
  products: [
    { src: "/Workshop/product/product-1.jpeg", alt: "Plastic Component", title: "Finished Plastic Component" },
    { src: "/Workshop/product/product-2.jpeg", alt: "Sheet Metal Part", title: "Sheet Metal Bracket" },
    { src: "/Workshop/product/product-3.jpeg", alt: "Fixture Assembly", title: "Precision Fixture" },
    { src: "/Workshop/product/product-4.jpeg", alt: "Industrial Jig", title: "Industrial Jig" },
    { src: "/Workshop/product/product-5.jpeg", alt: "Custom Part", title: "Custom Manufactured Part" },
    { src: "/Workshop/product/product-6.jpeg", alt: "Tool Component", title: "Tool Component" },
  ],
  machines: [
    { src: "/Workshop/Machines/machine-1.jpeg", alt: "CNC Machine", title: "CNC Milling Machine" },
    { src: "/Workshop/Machines/machine-2.jpeg", alt: "Lathe Machine", title: "Precision Lathe" },
    { src: "/Workshop/Machines/machine-3.jpeg", alt: "EDM Machine", title: "EDM Drilling Machine" },
    { src: "/Workshop/Machines/machine-4.jpeg", alt: "Grinding Machine", title: "Surface Grinder" },
  ],
};

export default function ImageGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const getFilteredImages = () => {
    if (activeCategory === "all") {
      return allImages.moulds;  // Show ALL moulds
    }
    return allImages[activeCategory] || [];
  };

  const filteredImages = getFilteredImages();

  return (
    <>
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <AnimatePresence mode="wait">
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(image)}
              className="cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all bg-gray-100 group"
            >
              <div className="relative h-48 md:h-56 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-white text-sm font-semibold">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredImages.length === 0 && (
        <p className="text-center text-gray-500 py-10">No images in this category yet.</p>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-10"
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl w-full max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
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
          </div>
        </div>
      )}
    </>
  );
}