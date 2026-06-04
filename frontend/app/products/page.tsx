"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  FaTools, FaCogs, FaCube, FaMicrochip, 
  FaIndustry, FaFire, FaWrench, FaCog, FaSearch, FaArrowRight
} from "react-icons/fa";

const products = [
  {
    icon: FaTools,
    name: "Custom Fixture",
    description: "Precision fixtures for accurate positioning and quality control in manufacturing.",
    features: ["High-strength steel", "Custom designs", "Dimensional accuracy"],
  },
  {
    icon: FaCogs,
    name: "Moulding Die",
    description: "Durable moulding dies for high-volume production with consistent quality.",
    features: ["Heat-treated", "Long service life", "Complex geometries"],
  },
  {
    icon: FaWrench,
    name: "Industrial Jigs",
    description: "Precision jigs for drilling, machining, and repetitive manufacturing tasks.",
    features: ["Wear-resistant", "Interchangeable bushings", "Quick setup"],
  },
  {
    icon: FaCube,
    name: "Plastic Injection Mould",
    description: "Custom injection moulds with fine finish and tight tolerance specifications.",
    features: ["Hot runner systems", "Multi-cavity", "Rapid prototyping"],
  },
  {
    icon: FaMicrochip,
    name: "Plastic Parts",
    description: "High-strength plastic components for automotive, electrical, and industrial use.",
    features: ["UL-rated materials", "Precision molding", "Bulk production"],
  },
  {
    icon: FaIndustry,
    name: "Sheet Metal Parts",
    description: "Custom sheet metal fabrication including brackets, enclosures, and panels.",
    features: ["Laser cutting", "CNC bending", "Powder coating"],
  },
  {
    icon: FaCog,  
    name: "Plastic Tools",
    description: "Tooling solutions for plastic manufacturing with optimized cycle times.",
    features: ["Prototype to production", "Cost-effective", "Quick turnaround"],
  },
  {
    icon: FaFire,
    name: "EDM Drill Job Work",
    description: "Electrical Discharge Machining for hard metals and complex hole shapes.",
    features: ["Deep holes", "Tight tolerances", "Difficult materials"],
  },
];

const galleryTabs = [
  { id: "moulds", label: "Mould Images", count: 31 },
  { id: "components", label: "Component Images", count: 24 },
  { id: "workshop", label: "Workshop Images", count: 4 },
];

const allImages: Record<string, { src: string; alt: string; title: string }[]> = {
  moulds: Array.from({ length: 31 }, (_, i) => ({
    src: `/Workshop/Moulds/mould-${i + 1}.jpeg`,
    alt: `Mould ${i + 1}`,
    title: `Mould Design ${i + 1}`,
  })),
  components: Array.from({ length: 24 }, (_, i) => ({
    src: `/Workshop/product/product-${i + 1}.jpeg`,
    alt: `Product ${i + 1}`,
    title: `Component ${i + 1}`,
  })),
  workshop: Array.from({ length: 4 }, (_, i) => ({
    src: `/Workshop/Machines/machine-${i + 1}.jpeg`,
    alt: `Machine ${i + 1}`,
    title: `Machine ${i + 1}`,
  })),
};

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("moulds");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getImages = () => allImages[activeTab] || [];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-blue-600/20 text-blue-400 text-sm px-4 py-1.5 rounded-full mb-6 border border-blue-500/30">
              Our Capabilities
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Products &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Comprehensive manufacturing solutions for diverse industrial needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ y: -5 }}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600/20 transition-all">
                  <product.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="border-t border-gray-800 pt-3">
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">Key Features</p>
                  <ul className="space-y-1">
                    {product.features.map((feature, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-blue-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-blue-400 font-semibold text-sm uppercase tracking-widest"
            >
              Gallery
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
              Our Work
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {galleryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {tab.label}
                <span className="ml-2 text-xs opacity-60">({tab.count})</span>
              </button>
            ))}
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <AnimatePresence mode="wait">
              {getImages().map((img, i) => (
                <motion.div
                  key={`${activeTab}-${i}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.02 }}
                  whileHover={{ scale: 1.03, zIndex: 10 }}
                  onClick={() => setSelectedImage(img.src)}
                  className="relative h-40 md:h-52 rounded-xl overflow-hidden cursor-pointer group border border-gray-800 hover:border-blue-500/50 transition-all"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-blue-600/80 rounded-full flex items-center justify-center">
                      <FaSearch className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-medium truncate">{img.title}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 border border-blue-400/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              We manufacture according to your drawings and specifications.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95"
            >
              Request Custom Quote
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}