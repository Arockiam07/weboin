"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute -left-[20%] top-[20%] w-[50%] h-[50%] bg-blue-400 rounded-full mix-blend-multiply filter blur-[150px] opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.h2 
              className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Let's create something <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">extraordinary.</span>
            </motion.h2>
            <p className="text-xl text-slate-600 mb-10 max-w-lg">
              Have an ambitious idea? We have the technical horsepower to bring it to life. Drop us a line and let's start analyzing your needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center text-slate-700">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-4 text-violet-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Email Us</p>
                  <p className="font-medium text-lg">hello@Weboin.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {status === 'success' ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner">✓</div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Transmission Received</h3>
                <p className="text-lg text-slate-600 mb-8">Thank you for reaching out. An expert will get back to you momentarily.</p>
                <button onClick={() => setStatus('')} className="text-violet-600 font-bold hover:text-violet-700 transition-colors">Start another inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-3 tracking-wide uppercase">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white border focus:border-violet-300 focus:ring-4 focus:ring-violet-100 outline-none transition-all text-slate-900 font-medium"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-3 tracking-wide uppercase">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white border focus:border-violet-300 focus:ring-4 focus:ring-violet-100 outline-none transition-all text-slate-900 font-medium"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-3 tracking-wide uppercase">How can we help?</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white border focus:border-violet-300 focus:ring-4 focus:ring-violet-100 outline-none transition-all text-slate-900 font-medium resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about the features, goals, and timeline of your project..."
                  />
                </div>
                {status === 'error' && (
                  <p className="text-rose-500 font-medium bg-rose-50 p-4 rounded-xl">Please complete all fields before accelerating.</p>
                )}
                <button
                  type="submit"
                  className="w-full py-5 bg-slate-900 text-white font-extrabold tracking-wide uppercase rounded-2xl hover:bg-violet-600 transition-colors shadow-lg hover:shadow-[0_10px_30px_rgba(124,58,237,0.3)] hover:-translate-y-1 transform duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
