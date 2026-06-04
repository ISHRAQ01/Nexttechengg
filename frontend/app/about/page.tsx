"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Trophy, Users, Calendar, ChevronRight } from "lucide-react";

const values = [
  { 
    icon: Target, 
    title: "Precision", 
    description: "We deliver exact specifications with zero compromise on quality.",
  },
  { 
    icon: Eye, 
    title: "Innovation", 
    description: "Continuous improvement in manufacturing processes and techniques.",
  },
  { 
    icon: Heart, 
    title: "Quality", 
    description: "Fine finish and high strength in every product we manufacture.",
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
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
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
              Since 2013
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Next Tech
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Precision Manufacturing Excellence Since 2013
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
                10+ Years of{" "}
                <span className="text-blue-400">Manufacturing Excellence</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  <strong className="text-white">Next Tech Engineering</strong> was established in{" "}
                  <strong className="text-white">2013 at Ghaziabad, Uttar Pradesh</strong> as a Sole 
                  Proprietorship firm. Over the last decade, we have built a strong reputation as a 
                  reliable manufacturer of high-precision industrial components.
                </p>
                <p>
                  We are a well-known manufacturer of a wide array of{" "}
                  <strong className="text-white">Custom Fixtures, Moulding Dies, Industrial Jigs, 
                  Plastic Injection Moulds, Plastic Parts, Plastic Tools, and Sheet Metal Parts.</strong>
                  {" "}Additionally, we specialize in providing{" "}
                  <strong className="text-white">EDM Drill Job Work.</strong>
                </p>
                <p>
                  Our entire product range is highly acclaimed in the market for its{" "}
                  <strong className="text-white">fine finish, high strength, dimensional accuracy, and durability.</strong>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-500/30">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Mr. Haroon</h3>
                  <p className="text-gray-400">Owner & Proprietor</p>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed border-l-2 border-blue-500 pl-4">
                "Under my supervision, we have achieved consistent growth and client trust. 
                My deep industry knowledge and commitment to quality drive our daily operations."
              </p>
              <div className="mt-6 pt-6 border-t border-gray-800">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={18} className="text-blue-400" />
                  <span>10+ years of experience in precision manufacturing</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-blue-400 font-semibold text-sm uppercase tracking-widest"
            >
              What Drives Us
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/20 transition-all">
                  <value.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-blue-400 font-semibold text-sm uppercase tracking-widest"
            >
              Timeline
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-center border border-gray-800 hover:border-blue-500/30 transition-all"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                <div className="w-8 h-0.5 bg-blue-500 mx-auto my-3" />
                <h3 className="font-semibold text-white mb-1">{milestone.title}</h3>
                <p className="text-sm text-gray-500">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Trophy className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our Commitment to Quality
            </h2>
            <p className="text-blue-100 text-xl leading-relaxed max-w-3xl mx-auto">
              Every product is manufactured to meet or exceed client expectations. 
              We combine skilled craftsmanship with modern machining capabilities to deliver 
              solutions that improve your production efficiency.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}