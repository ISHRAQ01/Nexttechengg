"use client";

import { motion } from "framer-motion";
import { Award, Download, Shield, FileText, ExternalLink } from "lucide-react";

const certificates = [
  {
    name: "Udyam Registration",
    file: "/Workshop/Certificates/Udyam.pdf",
    description: "MSME Registered Enterprise",
    icon: FileText,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    name: "ZED Certification",
    file: "/Workshop/Certificates/Zed.pdf",
    description: "Zero Defect Zero Effect",
    icon: Shield,
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Bronze Certification",
    file: "/Workshop/Certificates/Bronze.pdf",
    description: "Quality Excellence Award",
    icon: Award,
    gradient: "from-amber-500 to-amber-600",
  },
];

export default function Certificates() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-400 font-semibold text-sm uppercase tracking-widest"
          >
            Credentials
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
            Our{" "}
            <span className="text-blue-400">Certifications</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Recognized for quality and excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center border border-gray-800 hover:border-blue-500/40 transition-all duration-500 shadow-lg hover:shadow-2xl"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${cert.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <cert.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {cert.name}
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">{cert.description}</p>
              <a
                href={cert.file}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-5 py-3 rounded-xl font-medium border border-blue-500/30 hover:bg-blue-600 hover:text-white transition-all duration-300 group/btn"
              >
                <Download size={16} className="group-hover/btn:scale-110 transition-transform" />
                View Certificate
                <ExternalLink size={14} className="opacity-60" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}