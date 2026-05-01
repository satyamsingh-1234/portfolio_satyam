import React from "react";
import { motion } from "framer-motion";
import MyPortfolio from "../assests/MyPortfolio.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center px-6 text-center md:text-left bg-[#0f172a] pt-24"
    >

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-80 h-80 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-[6px] border-cyan-400 shadow-xl bg-gradient-to-br from-cyan-400/10 to-cyan-300/5 backdrop-blur-lg animate-pulse"
      >
        <motion.img
          src={MyPortfolio}
          alt="Satyam Singh"
          whileHover={{ scale: 1.1, rotate: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="md:ml-14 max-w-xl mt-12 md:mt-0"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-cyan-400 transition duration-500 hover:scale-105">
          Hi, I'm Satyam Singh
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Frontend Developer | Passionate about crafting beautiful UIs & seamless UX experiences.
        </p>
        <a
          href="#projects"
          className="px-7 py-3 bg-cyan-400 text-[#0f172a] font-semibold rounded-full shadow-md hover:bg-cyan-500 transition-transform transform hover:scale-105"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
