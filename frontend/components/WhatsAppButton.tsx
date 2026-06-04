"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = "919810541602";
  const message = "Hello, I'm interested in your manufacturing services. Can you please share more details?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all flex items-center overflow-hidden"
      style={{ width: isHovered ? "auto" : "56px", height: "56px" }}
      aria-label="Chat on WhatsApp"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-[56px] h-[56px] flex-shrink-0">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, repeatDelay: 5 }}
        >
          <MessageCircle size={26} />
        </motion.div>
      </div>

      {/* Label */}
      <span
        className={`whitespace-nowrap pr-5 font-medium text-sm transition-all duration-300 ${
          isHovered ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
        }`}
      >
        Chat with us
      </span>

      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full animate-ping bg-green-500/30" />
    </motion.a>
  );
}