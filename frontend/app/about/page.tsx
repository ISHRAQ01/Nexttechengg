"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Trophy, Users, Calendar } from "lucide-react";

const values = [
  { 
    icon: Target, 
    title: "Precision", 
    description: "We deliver exact specifications with zero compromise on quality.",
    color: "text-blue-600"
  },
  { 
    icon: Eye, 
    title: "Innovation", 
    description: "Continuous improvement in manufacturing processes and techniques.",
    color: "text-green-600"
  },
  { 
    icon: Heart, 
    title: "Quality", 
    description: "Fine finish and high strength in every product we manufacture.",
    color: "text-red-600"
  },
];

const milestones = [
  { year: "2013", title: "Company Founded", description: "Started operations in Ghaziabad" },
  { year: "2015", title: "First Export", description: "Expanded to international markets" },
  { year: "2018", title: "New Facility", description: "Expanded manufacturing capacity" },
  { year: "2023", title: "10 Years", description: "Decade of manufacturing excellence" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Next Tech Engineering
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Precision Manufacturing Excellence Since 2013
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                10+ Years of Manufacturing Excellence
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <strong>Next Tech Engineering</strong> was established in <strong>2013 at Ghaziabad, Uttar Pradesh</strong> as a Sole Proprietorship firm. Over the last decade, we have built a strong reputation as a reliable manufacturer of high-precision industrial components.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We are a well-known manufacturer of a wide array of <strong>Custom Fixtures, Moulding Dies, Industrial Jigs, Plastic Injection Moulds, Plastic Parts, Plastic Tools, and Sheet Metal Parts.</strong> Additionally, we specialize in providing <strong>EDM Drill Job Work.</strong>
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our entire product range is highly acclaimed in the market for its <strong>fine finish, high strength, dimensional accuracy, and durability.</strong>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Mr. Haroon</h3>
                  <p className="text-gray-600">Owner & Proprietor</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Under my supervision, we have achieved consistent growth and client trust. 
                My deep industry knowledge and commitment to quality drive our daily operations."
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={18} />
                  <span>10+ years of experience in precision manufacturing</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                <div className="w-12 h-0.5 bg-blue-600 mx-auto my-3"></div>
                <h3 className="font-semibold text-gray-900 mb-1">{milestone.title}</h3>
                <p className="text-sm text-gray-500">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Trophy className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Our Commitment to Quality
          </h2>
          <p className="text-blue-100 text-lg">
            Every product is manufactured to meet or exceed client expectations. 
            We combine skilled craftsmanship with modern machining capabilities to deliver 
            solutions that improve your production efficiency.
          </p>
        </div>
      </section>
    </div>
  );
}