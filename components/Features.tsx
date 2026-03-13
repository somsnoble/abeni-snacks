import React from 'react';
import { Leaf, ShieldCheck, Truck, Heart } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Leaf className="text-emerald-500" size={32} />,
    title: "100% Natural",
    description: "No preservatives, no artificial colors. Just pure ripe plantain goodness."
  },
  {
    icon: <ShieldCheck className="text-blue-500" size={32} />,
    title: "Quality Assured",
    description: "Hand-picked plantains, hand-crafted with the highest hygiene standards."
  },
  {
    icon: <Truck className="text-[#FF7518]" size={32} />,
    title: "Fast Delivery",
    description: "Freshly made and delivered to your doorstep across Enugu and beyond."
  },
  {
    icon: <Heart className="text-red-500" size={32} />,
    title: "Made with Love",
    description: "A family recipe perfected over generations to bring you joy."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF7518]/10 transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
