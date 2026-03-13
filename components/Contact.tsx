
import React from 'react';
import { MapPin, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Get In Touch</h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              Whether it's a bulk order for an event or just a quick question about our ripe chips, we're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-10 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="bg-[#2E7D32] text-white p-6 rounded-2xl shadow-lg shadow-emerald-100 mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare size={32} />
              </div>
              <h4 className="font-bold text-slate-800 text-xl mb-2">WhatsApp Us</h4>
              <p className="text-[#2E7D32] font-semibold text-lg">
                {CONTACT_INFO.phone}
              </p>
              <p className="text-slate-400 text-sm mt-4">Click to start a chat</p>
            </a>

            <div className="flex flex-col items-center p-10 bg-slate-50 rounded-[2rem] border border-slate-100">
              <div className="bg-[#FF7518] text-white p-6 rounded-2xl shadow-lg shadow-orange-100 mb-6">
                <MapPin size={32} />
              </div>
              <h4 className="font-bold text-slate-800 text-xl mb-2">Our Location</h4>
              <p className="text-slate-500 font-medium text-lg text-center">
                {CONTACT_INFO.location}
              </p>
              <p className="text-slate-400 text-sm mt-4">Enugu, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
