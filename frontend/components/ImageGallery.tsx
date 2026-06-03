"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/fixture-1.jpg",
    alt: "Custom fixture for automotive industry",
    title: "Custom Fixture for Maruti Suzuki",
  },
  {
    src: "/images/gallery/mould-1.jpg",
    alt: "Plastic injection mould",
    title: "Precision Injection Mould",
  },
  {
    src: "/images/gallery/sheet-metal-1.jpg",
    alt: "Sheet metal parts",
    title: "Sheet Metal Components",
  },
  {
    src: "/images/gallery/edm-1.jpg",
    alt: "EDM drilling machine in operation",
    title: "EDM Drill Job Work",
  },
  {
    src: "/images/gallery/workshop-1.jpg",
    alt: "Manufacturing facility",
    title: "Our Workshop",
  },
  {
    src: "/images/gallery/quality-1.jpg",
    alt: "Quality inspection",
    title: "Quality Control Process",
  },
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedImage(image)}
            className="cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <div className="relative h-64 w-full bg-gray-200">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <div className="absolute bottom-4 left-4 z-20 text-white">
                <p className="font-semibold">{image.title}</p>
              </div>
              {/* Replace with actual images */}
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-sm px-4 py-2 bg-black/50 rounded-full">
                  📸 {image.title}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <p className="text-white text-center">
                  📷 Add your image here: {selectedImage.title}
                </p>
              </div>
              <p className="text-white text-center mt-4">{selectedImage.title}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}