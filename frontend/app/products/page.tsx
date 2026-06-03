"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FaTools, FaCogs, FaCube, FaMicrochip, 
  FaIndustry, FaFire, FaWrench, FaCog
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

export default function ProductsPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Products & Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive manufacturing solutions for diverse industrial needs
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <product.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {product.description}
              </p>
              <div className="border-t border-gray-100 pt-3 mt-2">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                  Key Features
                </p>
                <ul className="mt-1 space-y-1">
                  {product.features.map((feature, i) => (
                    <li key={i} className="text-xs text-gray-500">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Need a Custom Solution?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We manufacture according to your drawings and specifications.
              Share your requirements for a tailored quote.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
            >
              Request Custom Quote →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}