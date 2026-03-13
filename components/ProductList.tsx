
import React from 'react';
import { ShoppingCart, Plus, Minus, Star, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../constants';
import { motion } from 'motion/react';

const ProductList: React.FC = () => {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = React.useState<Record<string, number>>(
    PRODUCTS.reduce((acc, p) => ({ ...acc, [p.id]: 1 }), {})
  );

  const updateLocalQty = (id: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  return (
    <section id="products" className="py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-[#FF7518] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Premium Selection</span>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Our Ripe Plantain Jars</h2>
          <div className="w-20 h-1.5 bg-[#FF7518] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {PRODUCTS.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group bg-white rounded-[3.5rem] shadow-[0_10px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_100px_rgba(0,0,0,0.1)] transition-all duration-700 overflow-hidden flex flex-col border border-gray-100"
            >
              <div className="relative h-[400px] overflow-hidden bg-gray-50/50">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5 }}
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-8 group-hover:rotate-2 transition-transform duration-[2000ms]"
                />
                <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl text-slate-900 font-bold shadow-xl border border-white/50 text-xl">
                  ₦{product.price.toLocaleString()}
                </div>
                {product.id === 'pc-1000' && (
                  <div className="absolute top-10 right-10 bg-emerald-500 text-white px-5 py-2.5 rounded-2xl text-xs font-bold shadow-lg flex items-center gap-2">
                    <Zap size={14} fill="white" />
                    <span>BEST VALUE</span>
                  </div>
                )}
              </div>
              
              <div className="p-12 flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#FF7518" className="text-[#FF7518]" />
                  ))}
                  <span className="text-xs text-gray-400 font-medium ml-2 uppercase tracking-widest">Verified Quality</span>
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-[#FF7518] transition-colors">{product.name}</h3>
                <p className="text-gray-500 mb-12 flex-grow leading-relaxed font-light text-lg">{product.description}</p>
                
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
                  <div className="flex items-center bg-gray-50 rounded-2xl px-6 py-4 border border-gray-100">
                    <button 
                      onClick={() => updateLocalQty(product.id, -1)}
                      className="text-gray-400 hover:text-[#FF7518] transition-colors p-1"
                    >
                      <Minus size={20} />
                    </button>
                    <span className="mx-8 font-bold w-6 text-center text-slate-900 text-xl">{quantities[product.id]}</span>
                    <button 
                      onClick={() => updateLocalQty(product.id, 1)}
                      className="text-gray-400 hover:text-[#FF7518] transition-colors p-1"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      addToCart(product, quantities[product.id]);
                      setQuantities(prev => ({ ...prev, [product.id]: 1 }));
                    }}
                    className="flex-grow bg-[#FF7518] hover:bg-[#e66a16] text-white font-bold py-5 px-10 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-orange-500/20"
                  >
                    <ShoppingCart size={24} />
                    <span className="text-lg">Add to Cart</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
