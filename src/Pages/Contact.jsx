import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaSpinner, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const handleReset = () => {
    setStatus('idle');
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#121b2e] to-[#0f172a] py-24 px-4 relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute left-0 bottom-0 w-[250px] h-[250px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

      <div className="w-full max-w-2xl bg-slate-800/30 border border-slate-800 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl relative z-10 transition-all duration-300 hover:border-cyan-500/20">
        
        <AnimatePresence mode="wait">
          {status !== 'success' ? (
            <motion.div
              key="contact-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-4 text-center tracking-wide">
                Get in Touch 🚀
              </h2>
              <p className="text-slate-400 text-center text-sm md:text-base mb-10 max-w-md mx-auto">
                Have a question or want to work together? Leave a message below, and I'll get back to you shortly!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className={`peer p-4 w-full bg-[#0f172a]/40 border rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.name 
                        ? 'border-rose-500 focus:ring-rose-500' 
                        : 'border-slate-700 focus:border-cyan-400 focus:ring-cyan-400/25'
                    }`}
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-2 text-xs text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-400"
                  >
                    Your Name
                  </label>
                  {errors.name && (
                    <p className="text-rose-500 text-xs mt-1.5 pl-1">{errors.name}</p>
                  )}
                </div>

                {/* Email field */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className={`peer p-4 w-full bg-[#0f172a]/40 border rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.email 
                        ? 'border-rose-500 focus:ring-rose-500' 
                        : 'border-slate-700 focus:border-cyan-400 focus:ring-cyan-400/25'
                    }`}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-2 text-xs text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-400"
                  >
                    Your Email
                  </label>
                  {errors.email && (
                    <p className="text-rose-500 text-xs mt-1.5 pl-1">{errors.email}</p>
                  )}
                </div>

                {/* Message field */}
                <div className="relative">
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    className={`peer p-4 w-full bg-[#0f172a]/40 border rounded-xl text-white placeholder-transparent resize-none focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.message 
                        ? 'border-rose-500 focus:ring-rose-500' 
                        : 'border-slate-700 focus:border-cyan-400 focus:ring-cyan-400/25'
                    }`}
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-2 text-xs text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-400"
                  >
                    Your Message
                  </label>
                  {errors.message && (
                    <p className="text-rose-500 text-xs mt-1.5 pl-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-sky-500 disabled:from-cyan-800 disabled:to-sky-850 text-slate-900 font-bold py-4 rounded-xl shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <FaSpinner className="animate-spin text-lg" /> Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="contact-success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, type: 'spring' }}
              className="flex flex-col items-center text-center py-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="text-cyan-400 text-7xl mb-6 filter drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]"
              >
                <FaCheckCircle />
              </motion.div>
              <h2 className="text-3xl font-extrabold text-slate-100 mb-3 tracking-wide">
                Message Sent!
              </h2>
              <p className="text-slate-400 text-base mb-8 max-w-sm leading-relaxed">
                Thank you for reaching out. I've received your message and will respond as soon as possible.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-slate-800 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:bg-slate-700 hover:text-white transition duration-300"
              >
                Send Another Message
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Contact;
