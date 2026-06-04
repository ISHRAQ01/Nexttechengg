"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, Building2, User } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "PLOT NO:12, KHASRA NO 21, MAINAPUR IND. AREA, MEERUT ROAD, GHAZIABAD",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9810541602",
    href: "tel:+919810541602",
  },
  {
    icon: Mail,
    label: "Email",
    value: "haroon_1174@gmail.com / nexttechengg@gmail.com",
    href: "mailto:haroon_1174@gmail.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday - Saturday: 9:00 AM - 7:00 PM",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-blue-600/20 text-blue-400 text-sm px-4 py-1.5 rounded-full mb-6 border border-blue-500/30">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Contact{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Get in touch for inquiries, quotes, or technical discussions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800"
            >
              <div className="flex items-center gap-3 mb-8">
                <Building2 className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Next Tech Engineering</h2>
              </div>

              <div className="space-y-6">
                {contactDetails.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-all">
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-blue-400 transition font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Proprietor Card */}
              <div className="mt-8 p-5 bg-black/50 rounded-xl border border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Mr. Haroon</p>
                    <p className="text-gray-500 text-sm">Proprietor</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  10+ years of precision manufacturing experience
                </p>
              </div>

              {/* GST */}
              <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm">
                  <strong className="text-gray-400">GST:</strong>{" "}
                  <span className="text-gray-500">09ANPPM5546H1ZG</span>
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800"
            >
              <h2 className="text-2xl font-bold text-white mb-2">Send an Inquiry</h2>
              <p className="text-gray-400 mb-8 text-sm">
                Fill the form below and we&apos;ll get back to you within 24 hours
              </p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}