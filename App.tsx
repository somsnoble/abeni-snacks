
import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import ProductList from './components/ProductList';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_INFO } from './constants';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen relative overflow-x-hidden font-sans">
        <Header onOpenCart={() => setIsCartOpen(true)} />
        
        <main>
          <Hero />
          <Features />
          <About />
          <ProductList />
          <Reviews />
          <Contact />
        </main>
        
        <Footer />
        
        <AnimatePresence>
          {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
        </AnimatePresence>

        {/* Floating WhatsApp Button */}
        <motion.a
          href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
        >
          <MessageCircle size={28} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 font-bold whitespace-nowrap">
            Chat with us
          </span>
        </motion.a>
      </div>
    </CartProvider>
  );
};

export default App;
