"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const phoneNumber = "919810541602";
  const message = "Hello, I'm interested in your manufacturing services. Can you please share more details?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ delay: 1, type: "spring" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center overflow-hidden"
      style={{ width: isHovered ? "auto" : "52px", height: "52px" }}
      aria-label="Chat on WhatsApp"
    >
      <div className="flex items-center justify-center w-[52px] h-[52px]">
        <MessageCircle size={24} />
      </div>
      <span className={`whitespace-nowrap pr-5 font-medium transition-all duration-300 ${isHovered ? "opacity-100 w-auto" : "opacity-0 w-0"}`}>
        WhatsApp: {phoneNumber}
      </span>
    </motion.a>
  );
}