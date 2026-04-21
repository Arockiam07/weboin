"use client";
import { motion } from 'framer-motion';

const services = [
  {
    num: "01",
    title: "Software Development.",
    subtitle: "Custom Solutions",
    description: "We engineer robust, scalable, and secure desktop and enterprise-grade software tailored to your specific business requirements.",
    bgColor: "bg-slate-900",
    buttonText: "Get a Quote"
  },
  {
    num: "02",
    title: "Web Applications.",
    subtitle: "SaaS & Dynamic",
    description: "High-performance web apps built with React and Next.js. We create fluid, app-like experiences that run in the browser.",
    bgColor: "bg-violet-600",
    buttonText: "Get a Quote"
  },
  {
    num: "03",
    title: "Website Design.",
    subtitle: "Corporate & Portfolio",
    description: "Stunning, responsive websites that tell your brand's story. We focus on UI/UX, speed optimization, and SEO.",
    bgColor: "bg-emerald-600",
    buttonText: "Get a Quote"
  },
  {
    num: "04",
    title: "Mobile Apps.",
    subtitle: "iOS & Android",
    description: "Native and cross-platform mobile applications designed for performance, usability, and seamless user experiences.",
    bgColor: "bg-rose-600",
    buttonText: "Get a Quote"
  },
  {
    num: "05",
    title: "Digital Marketing.",
    subtitle: "Growth & Strategy",
    description: "Data-driven marketing campaigns, SEO, and paid media management designed to accelerate your growth.",
    bgColor: "bg-amber-500",
    buttonText: "Get a Quote"
  },
  {
    num: "06",
    title: "UI/UX Design.",
    subtitle: "User-Centered",
    description: "Beautiful, intuitive interfaces that engage users and elevate your brand's digital presence across all platforms.",
    bgColor: "bg-blue-600",
    buttonText: "Get a Quote"
  }
];

import Link from 'next/link';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2 
            className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Services.</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comprehensive digital solutions designed to help your business grow, manage, and scale effectively.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center text-center p-10 md:p-14 rounded-[2.5rem] ${service.bgColor} text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-sm font-semibold tracking-wider opacity-80 mb-6">
                {service.num}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
                {service.title}
              </h3>
              
              <p className="font-medium text-white/90 mb-6 text-sm uppercase tracking-widest">
                {service.subtitle}
              </p>
              
              <p className="text-white/80 leading-relaxed mb-10 flex-grow">
                {service.description}
              </p>
              
              <Link 
                href="/contact"
                className="mt-auto px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-sm focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                {service.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
