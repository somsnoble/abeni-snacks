
import React from 'react';
import { CheckCircle, Users } from 'lucide-react';

const About: React.FC = () => {
  const whyChoose = [
    "Quality Ingredients – No unnecessary additives",
    "Great Taste – Perfectly balanced flavors",
    "Carefully Prepared – Traditional methods meet modern standards",
    "Convenient Snacks – Easy for life on-the-go"
  ];

  const whoWeServe = [
    "Homes & Families",
    "Commuters & Professionals",
    "Schools & Events",
    "Retailers & Wholesalers"
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-800 border-l-8 border-[#FF7518] pl-6">The Abeni Promise</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              ABENI was created with a simple belief: healthy snacks should still be enjoyable. 
              We focus on the perfect crunch of ripe plantains, combining quality ingredients and 
              great taste to create snacks that fit easily into your everyday life.
            </p>
            <div className="flex items-center space-x-5 p-6 bg-white border border-orange-100 rounded-2xl shadow-sm">
                <div className="bg-[#FF7518] text-white p-3 rounded-full">
                    <CheckCircle size={26} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 text-lg">Guaranteed Fresh</h4>
                    <p className="text-sm text-slate-500">Hand-picked ripe plantains only.</p>
                </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://i.ibb.co/fGM1PTgb/5882108439914286419-120.jpg" 
              alt="Abeni Premium Plantain Chips" 
              className="rounded-[2.5rem] shadow-2xl object-cover h-[450px] w-full border-8 border-white"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute -bottom-8 -left-8 bg-[#2E7D32] text-white p-10 rounded-3xl shadow-2xl hidden lg:block border-4 border-white">
                <p className="text-4xl font-bold">100%</p>
                <p className="text-xs uppercase tracking-widest text-emerald-100">Natural Product</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Why Choose Section */}
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-emerald-50">
            <h3 className="text-2xl font-bold text-[#2E7D32] mb-8 flex items-center">
              <CheckCircle className="mr-3 text-[#2E7D32]" /> Why Choose ABENI
            </h3>
            <ul className="space-y-5">
              {whyChoose.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-4 group cursor-default">
                  <span className="text-[#2E7D32] mt-1 font-bold group-hover:scale-125 transition-transform">✓</span>
                  <span className="text-slate-600 font-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Serve Section */}
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-orange-50">
            <h3 className="text-2xl font-bold text-[#FF7518] mb-8 flex items-center">
              <Users className="mr-3 text-[#FF7518]" /> Who We Serve
            </h3>
            <ul className="space-y-5">
              {whoWeServe.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-4 group cursor-default">
                  <span className="text-[#FF7518] mt-1 font-bold group-hover:rotate-12 transition-transform">•</span>
                  <span className="text-slate-600 font-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
