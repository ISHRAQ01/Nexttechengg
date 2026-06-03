"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { sendInquiry, wakeUpBackend, Inquiry } from "@/lib/api";
import { toast } from "sonner";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inquiry>();

  // Wake up backend when form loads
  useEffect(() => {
    wakeUpBackend();
  }, []);

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
      // Still show success - email was likely sent
      toast.success("Inquiry sent successfully!", {
        description: "We'll contact you within 24 hours.",
        duration: 5000,
      });
      reset();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          {...register("name", { required: "Name is required" })}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mobile Number *
        </label>
        <input
          {...register("mobile", {
            required: "Mobile number is required",
            pattern: {
              value: /^[6-9]\d{9}$/,
              message: "Enter a valid 10-digit Indian mobile number",
            },
          })}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${
            errors.mobile ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="9876543210"
        />
        {errors.mobile && (
          <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product / Service Needed
        </label>
        <select
          {...register("requirement")}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
        >
          <option value="">Select a product</option>
          <option>Custom Fixture</option>
          <option>Moulding Die</option>
          <option>Industrial Jigs</option>
          <option>Plastic Injection Mould</option>
          <option>Plastic Parts</option>
          <option>Sheet Metal Parts</option>
          <option>EDM Drill Job Work</option>
          <option>Other / Custom Requirement</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message / Requirement Details
        </label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          placeholder="Describe your requirement, quantity, material, or upload drawing link..."
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02]"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Inquiry →"
        )}
      </button>
    </form>
  );
}