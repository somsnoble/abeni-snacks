
import React from 'react';
import { X, Trash2, Plus, Minus, CreditCard, MessageCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CONTACT_INFO } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

interface CartModalProps {
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const { cart, removeFromCart, updateQuantity, total, itemCount, clearCart } = useCart();

  const handleWhatsAppCheckout = () => {
    const orderDetails = cart.map(item => `${item.name} (x${item.quantity}) - ₦${item.price * item.quantity}`).join('\n');
    const message = `Hello Abeni! I would like to place an order:\n\n${orderDetails}\n\nTotal: ₦${total}\n\nPlease confirm availability and delivery!`;
    const url = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-end">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      ></motion.div>
      
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full max-w-lg bg-white h-full flex flex-col shadow-2xl"
      >
        <div className="p-8 border-b flex justify-between items-center bg-gray-50/50">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-[#FF7518]" size={28} />
            <h2 className="text-2xl font-bold text-gray-900">Your Cart ({itemCount})</h2>
          </div>
          <motion.button 
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose} 
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X size={24} />
          </motion.button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {cart.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="text-gray-300" size={48} />
                </div>
                <p className="text-gray-500 mb-8 text-lg">Your cart is currently empty.</p>
                <button 
                  onClick={onClose} 
                  className="text-[#FF7518] font-bold hover:underline text-lg"
                >
                  Start Shopping
                </button>
              </motion.div>
            ) : (
              cart.map(item => (
                <motion.div 
                  layout
                  key={item.id} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20, scale: 0.95 }}
                  className="flex space-x-6 bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-24 h-24 bg-gray-50 rounded-2xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-gray-900 text-lg">{item.name}</h4>
                      <motion.button 
                        whileHover={{ scale: 1.1, color: '#ef4444' }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeFromCart(item.id)} 
                        className="text-gray-300 transition-colors"
                      >
                        <Trash2 size={20} />
                      </motion.button>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">₦{item.price.toLocaleString()} per pack</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center bg-gray-50 rounded-xl px-3 py-2 border border-gray-100">
                        <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-[#FF7518] transition-colors">
                          <Minus size={16} />
                        </button>
                        <span className="font-bold text-lg w-8 text-center text-slate-900">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-[#FF7518] transition-colors">
                          <Plus size={16} />
                        </button>
                      </div>
                      <p className="font-bold text-emerald-600 text-xl">₦{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {cart.length > 0 && (
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="p-8 border-t bg-gray-50/50 space-y-6"
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-medium text-lg uppercase tracking-widest">Total Amount</span>
              <span className="text-3xl font-bold text-emerald-600">₦{total.toLocaleString()}</span>
            </div>
            
            <div className="space-y-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppCheckout}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/10 transition-all"
              >
                <MessageCircle size={24} />
                <span className="text-lg">Checkout via WhatsApp</span>
              </motion.button>
              
              <button 
                disabled={true}
                className="w-full bg-gray-200 text-gray-400 font-bold py-5 rounded-2xl flex items-center justify-center gap-3 cursor-not-allowed opacity-75"
              >
                <CreditCard size={24} />
                <span className="text-lg">Pay with Paystack (Coming Soon)</span>
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CartModal;
