
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const carouselImages = [
  "https://i.ibb.co/fGM1PTgb/5882108439914286419-120.jpg", // New Brand Product Image
  "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=1920", // Close up chips
  "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?auto=format&fit=crop&q=80&w=1920"  // Sliced chips
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div 
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('${carouselImages[current]}')` }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl"
        >
          <span className="handwriting-font text-[#FF7518]">Abeni</span>{' '}
          <span className="handwriting-font text-emerald-400">Snacks</span> <br />
          <span className="text-white font-medium text-4xl md:text-6xl">Premium Ripe Chips</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-emerald-50 mb-10 opacity-90 font-light tracking-wide max-w-2xl mx-auto"
        >
          Hand-crafted golden slices of joy. 100% natural, 100% delicious. Experience the crunch of Enugu.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <motion.a 
            href="#products" 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(255 117 24 / 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF7518] text-white px-12 py-5 rounded-full font-bold text-lg transition-all"
          >
            Order Your Jar
          </motion.a>
          <motion.a 
            href="#about" 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-full font-medium text-lg transition-all"
          >
            Our Story
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-3 z-20">
        {carouselImages.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === current ? 'bg-[#FF7518] w-10' : 'bg-white/40 hover:bg-white/60'}`}
          />
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-white/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
