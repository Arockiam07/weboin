"use client";
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 40, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  // Subtle Parallax for the right-side visual
  const visualX = useTransform(smoothX, [0, 1], [-20, 20]);
  const visualY = useTransform(smoothY, [0, 1], [-20, 20]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      
      {/* Background Decor - Subtle Grid with a radial fade */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ 
             backgroundImage: `radial-gradient(#e5e7eb 1.5px, transparent 1.5px)`, 
             backgroundSize: '32px 32px',
             maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%)'
           }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Content Column */}
        <div className="flex flex-col items-start text-left">
          
          {/* <motion.div 
            className="flex items-center space-x-3 mb-8 bg-slate-50 border border-slate-100 px-4 py-2 rounded-full"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">Premium Digital Partner</span>
          </motion.div> */}

          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            We define the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500">
              Future of Design.
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg text-slate-500 max-w-lg leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elevate your brand with award-winning creative strategies and precision-engineered digital products. We build for performance, impact, and scaling.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a href="#contact" className="px-10 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-black transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex items-center justify-center">
              Get Started Free
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
            <a href="#portfolio" className="px-10 py-4 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all flex items-center justify-center">
              Our Work
            </a>
          </motion.div>

          <motion.div 
            className="mt-16 flex items-center space-x-10 text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div>
              <p className="text-2xl font-bold text-slate-900">120+</p>
              <p className="text-xs font-medium uppercase tracking-widest">Projects</p>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div>
              <p className="text-2xl font-bold text-slate-900">45+</p>
              <p className="text-xs font-medium uppercase tracking-widest">Clients</p>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div>
              <p className="text-2xl font-bold text-slate-900">99%</p>
              <p className="text-xs font-medium uppercase tracking-widest">Success</p>
            </div>
          </motion.div>
        </div>

        {/* Right: Visual Column */}
        <div className="relative h-[600px] w-full flex items-center justify-center">
          
          {/* Main Visual Composition */}
          <motion.div 
            style={{ x: visualX, y: visualY }}
            className="relative w-full max-w-[500px] aspect-square flex items-center justify-center"
          >
            {/* The 3D Human Illustration (Saly-10) */}
            <motion.div
              className="relative w-full h-full z-10"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <img 
                src="https://img.freepik.com/premium-photo/3d-people-invite-join-them-with-white-background_926199-2874749.jpg" 
                alt="3D Creative Illustration" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Glowing Backdrop for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-purple-100/30 rounded-full blur-[120px] scale-75 z-0" />

            {/* Floating Accents */}
            <motion.div 
              style={{ x: useTransform(visualX, v=>v*-1.8), y: useTransform(visualY, v=>v*-1.8) }}
              className="absolute top-10 right-10 w-24 h-24 bg-blue-100 rounded-full blur-2xl z-0 opacity-60"
            />
            <motion.div 
              style={{ x: useTransform(visualX, v=>v*1.5), y: useTransform(visualY, v=>v*1.5) }}
              className="absolute bottom-10 left-10 w-32 h-32 bg-purple-100 rounded-full blur-3xl z-0 opacity-60"
            />
          </motion.div>

        </div>

      </div>

      {/* Aesthetic bottom fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
    </section>
  );
}
