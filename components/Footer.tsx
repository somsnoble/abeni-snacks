
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="handwriting-font text-5xl mb-4 select-none">
          <span className="text-[#FF7518]">Abeni</span>{' '}
          <span className="text-emerald-500">Snacks</span>
        </div>
        <p className="text-gray-400 mb-8 italic">"A healthy snack for everyone"</p>
        <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.instagram.com/abenisnackbrand?igsh=ejg0NWN3N2NuY3ly" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 hover:text-[#FF7518] transition-colors group"
            >
              <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              <span>Instagram</span>
            </a>
        </div>
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ABENI Snacks. All rights reserved.</p>
          <p className="mt-2">Made with Fresh Ingredients in Enugu, Nigeria.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
