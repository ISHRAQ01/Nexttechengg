"use client";

import { motion } from "framer-motion";
import { Award, Download, Shield, FileText } from "lucide-react";

const certificates = [
  {
    name: "Udyam Registration",
    file: "/Workshop/Certificates/Udyam.pdf",
    description: "MSME Registered Enterprise",
    icon: FileText,
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "ZED Certification",
    file: "/Workshop/Certificates/Zed.pdf",
    description: "Zero Defect Zero Effect",
    icon: Shield,
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Bronze Certification",
    file: "/Workshop/Certificates/Bronze.pdf",
    description: "Quality Excellence Award",
    icon: Award,
    color: "bg-orange-100 text-orange-600",
  },
];

export default function Certificates() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Certifications
          </h2>
          <p className="text-xl text-gray-600">
            Recognized for quality and excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all"
            >
              <div className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <cert.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-600 mb-6">{cert.description}</p>
              <a
                href={cert.file}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                <Download size={16} />
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}