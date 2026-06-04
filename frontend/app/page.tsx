"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaTools, FaCogs, FaIndustry, FaFire, FaCube, FaMicrochip } from "react-icons/fa";
import ImageGallery from "@/components/ImageGallery";
import Certificates from "@/components/Certificates";

const services = [
  { icon: FaTools, title: "Custom Fixtures & Jigs", desc: "Precision-engineered fixtures for accurate manufacturing" },
  { icon: FaCogs, title: "Moulding Dies", desc: "High-durability dies for consistent production" },
  { icon: FaCube, title: "Plastic Injection Moulds", desc: "Custom moulds with fine finish and tight tolerances" },
  { icon: FaMicrochip, title: "Plastic Parts & Tools", desc: "High-strength plastic components" },
  { icon: FaIndustry, title: "Sheet Metal Parts", desc: "Custom fabrication including brackets and enclosures" },
  { icon: FaFire, title: "EDM Drill Job Work", desc: "Electrical discharge machining for hard metals" },
];

const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "500+", label: "Projects Completed" },
  { value: "200+", label: "Happy Clients" },
  { value: "15+", label: "Machine Tools" },
];

const clients = [
  { name: "Maruti Suzuki", logo: "/images/clients/maruti.png" },
  { name: "Hero MotoCorp", logo: "/images/clients/hero.png" },
  { name: "Bajaj Auto", logo: "/images/clients/bajaj.png" },
  { name: "Honda", logo: "/images/clients/honda.png" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 z-10" />
          <Image
            src="/images/hero.png"
            alt="Manufacturing facility"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-blue-500 text-white text-sm px-4 py-1 rounded-full mb-6">
              Since 2013 | Ghaziabad, Uttar Pradesh
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Precision{" "}
              <span className="text-blue-400">Manufacturing</span>
              <br />
              Engineered Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              • Spl. In: Cap Mould, Flip Top Cap Mould • Mfg. of: Injection Mould, Press Tool,Plastic & Metal Component • EDM & Moulding Job Work
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 inline-block"
              >
                Get a Quote →
              </Link>
              <Link
                href="/products"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all inline-block"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Manufacturing Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering precision-engineered solutions tailored to your exact specifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Valued Clients
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by leading manufacturers across India
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500 font-semibold">{client.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Certificates Section */}
<Certificates />

{/* CTA Section */}
<section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
  ...
</section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Send us your drawings or requirements. We'll provide a competitive quote within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105"
          >
            Get a Free Quote →
          </Link>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Recent Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse some of our successful manufacturing projects
            </p>
          </div>
          <ImageGallery />
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View More Projects →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}