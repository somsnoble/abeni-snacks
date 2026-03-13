
import React from 'react';
import { Quote, Star } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Happy Customers</h2>
          <div className="w-16 h-1 bg-[#2E7D32] mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-10 rounded-[2rem] relative shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 group">
              <div className="text-[#FF7518] mb-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <Quote size={32} />
              </div>
              <div className="flex mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#FF7518" stroke="#FF7518" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed font-light">"{review.quote}"</p>
              <div className="border-t border-slate-50 pt-6">
                <p className="font-bold text-slate-800">{review.author}</p>
                <p className="text-xs text-[#2E7D32] font-semibold mt-1 tracking-wider uppercase">Verified Purchase</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
