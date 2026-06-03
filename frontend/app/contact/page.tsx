"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
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
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Get in touch for inquiries, quotes, or technical discussions
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Next Tech Engineering
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-600">
                    PLOT NO:12 , KHASRA NO 21, MAINAPUR IND. AREA, MEERUT ROAD, GHAZIABAD
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">
                    <a href="tel:+91XXXXXXXXXX" className="hover:text-blue-600 transition">
                      +91-9810541602
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">
                    <a href="mailto:info@nexttechengineering.com" className="hover:text-blue-600 transition">
                      haroon_1174@gmail.com or nexttechengg@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white rounded-lg border border-gray-200">
              <p className="font-semibold">Proprietor:</p>
              <p className="text-gray-700">Mr. Haroon</p>
              <p className="text-sm text-gray-500 mt-2">
                10+ years of precision manufacturing experience
              </p>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-500">
                <strong>GST:</strong> 09*********1ZG
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send an Inquiry
            </h2>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}