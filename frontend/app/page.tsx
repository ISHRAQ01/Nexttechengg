"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaTools, FaCogs, FaIndustry, FaFire, FaCube, FaMicrochip, FaArrowRight, FaCheck } from "react-icons/fa";
import ImageGallery from "@/components/ImageGallery";
import Certificates from "@/components/Certificates";

const services = [
  {
    icon: FaTools,
    title: "Custom Fixtures & Jigs",
    desc: "Precision-engineered fixtures for accurate manufacturing",
    image: "/custom-jigs.jpeg",
  },
  {
    icon: FaCogs,
    title: "Moulding Dies",
    desc: "High-durability dies for consistent production",
    image: "/Workshop/Moulds/mould-1.jpeg",
  },
  {
    icon: FaCube,
    title: "Plastic Injection Moulds",
    desc: "Custom moulds with fine finish and tight tolerances",
    image: "/Workshop/Moulds/mould-5.jpeg",
  },
  {
    icon: FaMicrochip,
    title: "Plastic Parts & Tools",
    desc: "High-strength plastic components",
    image: "/Workshop/product/product-24.jpeg",
  },
  {
    icon: FaIndustry,
    title: "Sheet Metal Parts",
    desc: "Custom fabrication including brackets and enclosures",
    image: "/sheet.jpeg",
  },
  {
    icon: FaFire,
    title: "EDM Drill Job Work",
    desc: "Electrical discharge machining for hard metals",
    image: "/edm.jpeg",
  },
];

const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "500+", label: "Projects Completed" },
  { value: "200+", label: "Happy Clients" },
  { value: "15+", label: "Machine Tools" },
];

const clients = [
  { name: "Advance Engineering", location: "Dehradun" },
  { name: "Affy India Pvt. Ltd.", location: "Delhi" },
  { name: "Amba Plastics", location: "" },
  { name: "Bala Ji Polymers", location: "Ghaziabad" },
  { name: "Bholi Hardware", location: "NEPZ" },
  { name: "Bhagwati Pat", location: "Bareilly" },
  { name: "Concord Electroceramic", location: "Kundli" },
  { name: "Dewan Polycap", location: "Ghaziabad" },
  { name: "Grace Industries", location: "Delhi" },
  { name: "Micropat", location: "Himachal" },
  { name: "Jayesh Tradex P. Ltd.", location: "Modinagar" },
  { name: "JE Enterprises", location: "" },
  { name: "KS Precision Components", location: "Ghaziabad" },
  { name: "Kumar Engineering", location: "Sonipat" },
  { name: "LM Plastics", location: "" },
  { name: "Maheshwari Cap", location: "" },
  { name: "Ocean Industrial Solution", location: "" },
  { name: "Swastic Traders", location: "" },
  { name: "Tirupati Polymers", location: "" },
  { name: "Taurus Industries", location: "" },
  { name: "Techno Craft", location: "" },
];

export default function Home() {
  return (
    <div className="bg-black">
      {/* Schema Markup for Manufacturing Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Next Tech Engineering",
            image: "https://nexttech-engineering.vercel.app/back.jpeg",
            "@id": "https://nexttech-engineering.vercel.app",
            url: "https://nexttech-engineering.vercel.app",
            telephone: "+919810541602",
            email: "nexttechengg@gmail.com",
            description: "Precision manufacturing of Custom Fixtures, Moulding Dies, Plastic Injection Moulds, EDM Drill Job Work in Ghaziabad since 2013.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "PLOT NO:12, KHASRA NO 21, MAINAPUR IND. AREA, MEERUT ROAD",
              addressLocality: "Ghaziabad",
              addressRegion: "Uttar Pradesh",
              postalCode: "201001",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "28.6692",
              longitude: "77.4538",
            },
            openingHoursSpecification: [
              {
               "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "19:00",
              },
            ],
            sameAs: [],
          }),
        }}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-4 py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/back.jpeg"
            alt="Manufacturing facility"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        <div className="relative z-20 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block bg-black/60 backdrop-blur-sm text-white text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 border border-white/20"
            >
              Since 2013 — Ghaziabad, Uttar Pradesh
            </motion.span>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8 tracking-tight leading-tight drop-shadow-2xl">
              Precision{" "}
              <span className="text-blue-400 drop-shadow-2xl">Manufacturing</span>
              <br />
              <span className="text-2xl sm:text-4xl md:text-6xl text-white drop-shadow-2xl">Engineered Excellence</span>
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto font-medium drop-shadow-lg px-2 leading-relaxed">
              Specializing in Cap Mould, Flip Top Cap Mould<br className="sm:hidden" />
              • Injection Mould & Press Tool Manufacturing
              • Plastic & Metal Components • EDM & Moulding Job Work
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/contact"
                className="group bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-blue-500 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
              >
                Get a Quote
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/products"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-7 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </section>
      {/* Services Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-blue-400 font-semibold text-sm uppercase tracking-widest"
            >
              Capabilities
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              Manufacturing{" "}
              <span className="text-blue-400">Excellence</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Precision-engineered solutions tailored to your exact specifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/40 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-10 h-10 bg-blue-600/80 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-700 opacity-90" />

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-blue-200 text-sm uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-blue-400 font-semibold text-sm uppercase tracking-widest"
            >
              Trusted By
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              Our Valued{" "}
              <span className="text-blue-400">Clients</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Trusted by leading manufacturers across India
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.015 }}
                whileHover={{ scale: 1.03, zIndex: 10 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-blue-500/30 rounded-xl p-4 text-center transition-all duration-300"
              >
                <p className="text-white font-medium text-sm">{client.name}</p>
                {client.location && (
                  <p className="text-gray-500 text-xs mt-1.5">{client.location}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <Certificates />

      {/* CTA */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
            Send us your drawings or requirements. We&aposll provide a competitive quote within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Get a Free Quote
            <FaArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-blue-400 font-semibold text-sm uppercase tracking-widest"
            >
              Portfolio
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              Our Recent{" "}
              <span className="text-blue-400">Work</span>
            </h2>
          </div>
          <ImageGallery />
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-500 transition-all duration-300"
            >
              View All Projects
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}