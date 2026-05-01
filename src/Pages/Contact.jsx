import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0f172a] pt-24 px-4">
      <div className="w-full max-w-3xl bg-white/10 border border-white/20 backdrop-blur-lg p-10 rounded-3xl shadow-[0_0_40px_#0ff2] transition-all duration-300 hover:shadow-cyan-500/20">
        <h2 className="text-4xl font-extrabold text-cyan-400 mb-8 text-center tracking-wide">
          Get in Touch 🚀
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              placeholder=" "
              className="peer p-4 w-full bg-transparent border border-cyan-400 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-2 text-cyan-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400"
            >
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="peer p-4 w-full bg-transparent border border-cyan-400 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-cyan-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400"
            >
              Your Email
            </label>
          </div>

          <div className="relative md:col-span-2">
            <textarea
              id="message"
              rows="5"
              placeholder=" "
              className="peer p-4 w-full bg-transparent border border-cyan-400 rounded-xl text-white placeholder-transparent resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-2 text-cyan-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400"
            >
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="md:col-span-2 mt-4 bg-cyan-400 text-[#0f172a] font-bold py-3 rounded-xl hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300 ease-in-out"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
