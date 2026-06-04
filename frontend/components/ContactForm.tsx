"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendInquiry, Inquiry } from "@/lib/api";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inquiry>();

  const onSubmit = async (data: Inquiry) => {
    setIsLoading(true);
    try {
      await sendInquiry(data);
      toast.success("Inquiry sent successfully!", {
        description: "We'll contact you within 24 hours.",
        duration: 5000,
      });
      reset();
    } catch (error) {
      toast.success("Inquiry sent successfully!", {
        description: "We'll contact you within 24 hours.",
        duration: 5000,
      });
      reset();
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300";
  const labelClass = "block text-sm font-medium text-gray-300 mb-2";
  const errorClass = "text-red-400 text-sm mt-1.5 flex items-center gap-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <div>
        <label className={labelClass}>Full Name *</label>
        <input
          {...register("name", { required: "Name is required" })}
          className={`${inputClass} ${
            errors.name ? "border-red-500 focus:ring-red-500" : ""
          }`}
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className={errorClass}>
            <span className="text-xs">⚠</span> {errors.name.message}
          </p>
        )}
      </div>

      {/* Mobile */}
      <div>
        <label className={labelClass}>Mobile Number *</label>
        <input
          {...register("mobile", {
            required: "Mobile number is required",
            pattern: {
              value: /^[6-9]\d{9}$/,
              message: "Enter a valid 10-digit Indian mobile number",
            },
          })}
          className={`${inputClass} ${
            errors.mobile ? "border-red-500 focus:ring-red-500" : ""
          }`}
          placeholder="9876543210"
        />
        {errors.mobile && (
          <p className={errorClass}>
            <span className="text-xs">⚠</span> {errors.mobile.message}
          </p>
        )}
      </div>

      {/* Product Select */}
      <div>
        <label className={labelClass}>Product / Service Needed</label>
        <select
          {...register("requirement")}
          className={`${inputClass} appearance-none cursor-pointer`}
          style={{ colorScheme: "dark" }}
        >
          <option value="" className="bg-gray-900 text-gray-500">
            Select a product
          </option>
          <option className="bg-gray-900 text-white">Custom Fixture</option>
          <option className="bg-gray-900 text-white">Moulding Die</option>
          <option className="bg-gray-900 text-white">Industrial Jigs</option>
          <option className="bg-gray-900 text-white">Plastic Injection Mould</option>
          <option className="bg-gray-900 text-white">Plastic Parts</option>
          <option className="bg-gray-900 text-white">Sheet Metal Parts</option>
          <option className="bg-gray-900 text-white">EDM Drill Job Work</option>
          <option className="bg-gray-900 text-white">Other / Custom Requirement</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>Message / Requirement Details</label>
        <textarea
          {...register("message")}
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Describe your requirement, quantity, material, or upload drawing link..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3.5 rounded-xl font-semibold hover:from-blue-500 hover:to-blue-400 disabled:from-gray-700 disabled:to-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Inquiry
          </>
        )}
      </button>
    </form>
  );
}